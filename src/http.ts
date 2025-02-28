import { produce } from 'immer';
import {
  HttpResponse,
  HttpHandler,
  http as originalHttp,
  PathParams,
  DefaultBodyType,
  ResponseResolver,
  Path,
} from 'msw';
import { mockingState } from './mockingState';
import { presetActions } from './store/stores';
import {
  Http,
  HttpMethodHandler,
  HttpMethodLiteral,
  PresetHandler,
  SelectedPreset,
} from './types';
import { HttpRequestResolverExtras } from 'msw/lib/core/handlers/HttpHandler';

function createMethodHandler<K extends HttpMethodLiteral>(
  method: K,
  originalMethod: Function
): HttpMethodHandler<K> {
  return <
    Params extends PathParams = PathParams,
    RequestBodyType extends DefaultBodyType = DefaultBodyType,
    ResponseBodyType extends DefaultBodyType = undefined,
    RequestPath extends Path = Path,
  >(
    path: RequestPath,
    resolver: ResponseResolver<
      HttpRequestResolverExtras<Params>,
      RequestBodyType,
      ResponseBodyType
    >
  ): PresetHandler<
    ResponseBodyType,
    K,
    RequestPath,
    string,
    ResponseBodyType,
    Params,
    RequestBodyType
  > => {
    const wrappedResolver: typeof resolver = async (info) => {
      const pathStr = typeof path === 'string' ? path : path.toString();
      const state = mockingState.getEndpointState(method, pathStr) as
        | SelectedPreset<ResponseBodyType>
        | undefined;

      if (state) {
        let response = state.preset.response;

        if (typeof response === 'function') {
          if (response === resolver) {
            return resolver(info);
          }
          response = await (response as Function)(info);
        }

        if (state.override) {
          response = produce(response, (draft: ResponseBodyType) => {
            state.override!({ data: draft });
          });
        }

        return HttpResponse.json(response, {
          status: state.preset.status,
        });
      }

      return resolver(info);
    };

    const base = originalMethod(path, wrappedResolver) as HttpHandler;
    const defaultPreset = {
      label: 'default',
      status: 200,
      response: resolver,
    };

    const handler = Object.create(base, {
      _method: { value: method, enumerable: true },
      _path: { value: path, enumerable: true },
      _responseType: { value: {} as ResponseBodyType, enumerable: true },
      _presets: {
        value: [defaultPreset],
        writable: true,
        enumerable: true,
      },
      _labels: { value: 'default', writable: true, enumerable: true },
      presets: {
        value: function <
          Labels extends string,
          Response extends DefaultBodyType,
        >(
          ...presets: Array<{
            label: Labels;
            status: number;
            response: Response | (() => Promise<Response>);
          }>
        ) {
          const pathStr = typeof path === 'string' ? path : path.toString();
          this._presets = [defaultPreset, ...presets];
          this._labels = presets[0].label;
          presetActions.setPresets(pathStr, this._presets);
          return this;
        },
        enumerable: true,
      },
      addPreset: {
        value: function <Response extends DefaultBodyType>(preset: {
          label: string;
          status: number;
          response: Response | (() => Promise<Response>);
        }) {
          const pathStr = typeof path === 'string' ? path : path.toString();
          this._presets = [...this._presets, preset];
          presetActions.setPresets(pathStr, this._presets);
          return this;
        },
        enumerable: true,
      },
    }) as PresetHandler<
      ResponseBodyType,
      K,
      RequestPath,
      string,
      ResponseBodyType,
      Params,
      RequestBodyType
    >;

    const pathStr = typeof path === 'string' ? path : path.toString();
    presetActions.setPresets(pathStr, handler._presets);

    return handler;
  };
}

export const http: Http = {
  get: createMethodHandler('get', originalHttp.get),
  post: createMethodHandler('post', originalHttp.post),
  put: createMethodHandler('put', originalHttp.put),
  delete: createMethodHandler('delete', originalHttp.delete),
  patch: createMethodHandler('patch', originalHttp.patch),
  options: createMethodHandler('options', originalHttp.options),
  head: createMethodHandler('head', originalHttp.head),
  all: createMethodHandler('all', originalHttp.all),
};

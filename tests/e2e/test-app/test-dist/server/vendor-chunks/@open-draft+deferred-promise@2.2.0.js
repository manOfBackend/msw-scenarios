/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@open-draft+deferred-promise@2.2.0";
exports.ids = ["vendor-chunks/@open-draft+deferred-promise@2.2.0"];
exports.modules = {

/***/ "../../../node_modules/.pnpm/@open-draft+deferred-promise@2.2.0/node_modules/@open-draft/deferred-promise/build/index.js":
/*!*******************************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/@open-draft+deferred-promise@2.2.0/node_modules/@open-draft/deferred-promise/build/index.js ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

eval("var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\n\n// src/index.ts\nvar src_exports = {};\n__export(src_exports, {\n  DeferredPromise: () => DeferredPromise,\n  createDeferredExecutor: () => createDeferredExecutor\n});\nmodule.exports = __toCommonJS(src_exports);\n\n// src/createDeferredExecutor.ts\nfunction createDeferredExecutor() {\n  const executor = (resolve, reject) => {\n    executor.state = \"pending\";\n    executor.resolve = (data) => {\n      if (executor.state !== \"pending\") {\n        return;\n      }\n      executor.result = data;\n      const onFulfilled = (value) => {\n        executor.state = \"fulfilled\";\n        return value;\n      };\n      return resolve(\n        data instanceof Promise ? data : Promise.resolve(data).then(onFulfilled)\n      );\n    };\n    executor.reject = (reason) => {\n      if (executor.state !== \"pending\") {\n        return;\n      }\n      queueMicrotask(() => {\n        executor.state = \"rejected\";\n      });\n      return reject(executor.rejectionReason = reason);\n    };\n  };\n  return executor;\n}\n\n// src/DeferredPromise.ts\nvar DeferredPromise = class extends Promise {\n  #executor;\n  resolve;\n  reject;\n  constructor(executor = null) {\n    const deferredExecutor = createDeferredExecutor();\n    super((originalResolve, originalReject) => {\n      deferredExecutor(originalResolve, originalReject);\n      executor?.(deferredExecutor.resolve, deferredExecutor.reject);\n    });\n    this.#executor = deferredExecutor;\n    this.resolve = this.#executor.resolve;\n    this.reject = this.#executor.reject;\n  }\n  get state() {\n    return this.#executor.state;\n  }\n  get rejectionReason() {\n    return this.#executor.rejectionReason;\n  }\n  then(onFulfilled, onRejected) {\n    return this.#decorate(super.then(onFulfilled, onRejected));\n  }\n  catch(onRejected) {\n    return this.#decorate(super.catch(onRejected));\n  }\n  finally(onfinally) {\n    return this.#decorate(super.finally(onfinally));\n  }\n  #decorate(promise) {\n    return Object.defineProperties(promise, {\n      resolve: { configurable: true, value: this.resolve },\n      reject: { configurable: true, value: this.reject }\n    });\n  }\n};\n// Annotate the CommonJS export names for ESM import in node:\n0 && (0);\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVuLWRyYWZ0K2RlZmVycmVkLXByb21pc2VAMi4yLjAvbm9kZV9tb2R1bGVzL0BvcGVuLWRyYWZ0L2RlZmVycmVkLXByb21pc2UvYnVpbGQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5Q0FBeUM7QUFDMUQsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLENBR0w7QUFDRCIsInNvdXJjZXMiOlsiL1VzZXJzL2ZpbmRhL0RvY3VtZW50cy9HaXRIdWIvbXN3LXNjZW5hcmlvcy9ub2RlX21vZHVsZXMvLnBucG0vQG9wZW4tZHJhZnQrZGVmZXJyZWQtcHJvbWlzZUAyLjIuMC9ub2RlX21vZHVsZXMvQG9wZW4tZHJhZnQvZGVmZXJyZWQtcHJvbWlzZS9idWlsZC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgRGVmZXJyZWRQcm9taXNlOiAoKSA9PiBEZWZlcnJlZFByb21pc2UsXG4gIGNyZWF0ZURlZmVycmVkRXhlY3V0b3I6ICgpID0+IGNyZWF0ZURlZmVycmVkRXhlY3V0b3Jcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoc3JjX2V4cG9ydHMpO1xuXG4vLyBzcmMvY3JlYXRlRGVmZXJyZWRFeGVjdXRvci50c1xuZnVuY3Rpb24gY3JlYXRlRGVmZXJyZWRFeGVjdXRvcigpIHtcbiAgY29uc3QgZXhlY3V0b3IgPSAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZXhlY3V0b3Iuc3RhdGUgPSBcInBlbmRpbmdcIjtcbiAgICBleGVjdXRvci5yZXNvbHZlID0gKGRhdGEpID0+IHtcbiAgICAgIGlmIChleGVjdXRvci5zdGF0ZSAhPT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXhlY3V0b3IucmVzdWx0ID0gZGF0YTtcbiAgICAgIGNvbnN0IG9uRnVsZmlsbGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGV4ZWN1dG9yLnN0YXRlID0gXCJmdWxmaWxsZWRcIjtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfTtcbiAgICAgIHJldHVybiByZXNvbHZlKFxuICAgICAgICBkYXRhIGluc3RhbmNlb2YgUHJvbWlzZSA/IGRhdGEgOiBQcm9taXNlLnJlc29sdmUoZGF0YSkudGhlbihvbkZ1bGZpbGxlZClcbiAgICAgICk7XG4gICAgfTtcbiAgICBleGVjdXRvci5yZWplY3QgPSAocmVhc29uKSA9PiB7XG4gICAgICBpZiAoZXhlY3V0b3Iuc3RhdGUgIT09IFwicGVuZGluZ1wiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgZXhlY3V0b3Iuc3RhdGUgPSBcInJlamVjdGVkXCI7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZWplY3QoZXhlY3V0b3IucmVqZWN0aW9uUmVhc29uID0gcmVhc29uKTtcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXhlY3V0b3I7XG59XG5cbi8vIHNyYy9EZWZlcnJlZFByb21pc2UudHNcbnZhciBEZWZlcnJlZFByb21pc2UgPSBjbGFzcyBleHRlbmRzIFByb21pc2Uge1xuICAjZXhlY3V0b3I7XG4gIHJlc29sdmU7XG4gIHJlamVjdDtcbiAgY29uc3RydWN0b3IoZXhlY3V0b3IgPSBudWxsKSB7XG4gICAgY29uc3QgZGVmZXJyZWRFeGVjdXRvciA9IGNyZWF0ZURlZmVycmVkRXhlY3V0b3IoKTtcbiAgICBzdXBlcigob3JpZ2luYWxSZXNvbHZlLCBvcmlnaW5hbFJlamVjdCkgPT4ge1xuICAgICAgZGVmZXJyZWRFeGVjdXRvcihvcmlnaW5hbFJlc29sdmUsIG9yaWdpbmFsUmVqZWN0KTtcbiAgICAgIGV4ZWN1dG9yPy4oZGVmZXJyZWRFeGVjdXRvci5yZXNvbHZlLCBkZWZlcnJlZEV4ZWN1dG9yLnJlamVjdCk7XG4gICAgfSk7XG4gICAgdGhpcy4jZXhlY3V0b3IgPSBkZWZlcnJlZEV4ZWN1dG9yO1xuICAgIHRoaXMucmVzb2x2ZSA9IHRoaXMuI2V4ZWN1dG9yLnJlc29sdmU7XG4gICAgdGhpcy5yZWplY3QgPSB0aGlzLiNleGVjdXRvci5yZWplY3Q7XG4gIH1cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLiNleGVjdXRvci5zdGF0ZTtcbiAgfVxuICBnZXQgcmVqZWN0aW9uUmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzLiNleGVjdXRvci5yZWplY3Rpb25SZWFzb247XG4gIH1cbiAgdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLiNkZWNvcmF0ZShzdXBlci50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSk7XG4gIH1cbiAgY2F0Y2gob25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLiNkZWNvcmF0ZShzdXBlci5jYXRjaChvblJlamVjdGVkKSk7XG4gIH1cbiAgZmluYWxseShvbmZpbmFsbHkpIHtcbiAgICByZXR1cm4gdGhpcy4jZGVjb3JhdGUoc3VwZXIuZmluYWxseShvbmZpbmFsbHkpKTtcbiAgfVxuICAjZGVjb3JhdGUocHJvbWlzZSkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhwcm9taXNlLCB7XG4gICAgICByZXNvbHZlOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRoaXMucmVzb2x2ZSB9LFxuICAgICAgcmVqZWN0OiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRoaXMucmVqZWN0IH1cbiAgICB9KTtcbiAgfVxufTtcbi8vIEFubm90YXRlIHRoZSBDb21tb25KUyBleHBvcnQgbmFtZXMgZm9yIEVTTSBpbXBvcnQgaW4gbm9kZTpcbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBEZWZlcnJlZFByb21pc2UsXG4gIGNyZWF0ZURlZmVycmVkRXhlY3V0b3Jcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../node_modules/.pnpm/@open-draft+deferred-promise@2.2.0/node_modules/@open-draft/deferred-promise/build/index.js\n");

/***/ })

};
;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection{\n\n    constructor(htmlEles) {\n        this.htmlEles = htmlEles;\n    }\n\n    html(str) {\n        if (str === undefined) {\n            return this.htmlEles[0].innerHTML;\n        } else {\n          this.htmlEles.forEach( ele => {\n            ele.innerHTML = str;\n          });\n        }\n    }\n\n    empty() {\n      this.htmlEles.forEach( ele => {\n        ele.innerHTML = \"\";\n      });\n    }\n\n    append(args) {\n      if (typeof args === \"string\") {\n        this.htmlEles.forEach( ele => {\n          ele.innerHTML += args;\n        });\n      } else if (args instanceof HTMLElement) {\n        this.htmlEles.forEach( ele => {\n          ele.innerHTML += args.outerHTML;\n        });\n      } else if (args instanceof DOMNodeCollection) {\n        this.htmlEles.forEach( ele => {\n          args.htmlEles.forEach(argsEle => {\n             ele.innerHTML += argsEle.outerHTML;\n          })\n        });\n      }\n    }\n\n    attr(key, val) {\n      if (!val) {\n        return this.htmlEles[0][key];\n      } else {\n        this.htmlEles.forEach( ele => {\n          ele[key] = val;\n        })\n      }\n    }\n    \n    addClass(className) {\n        this.attr(\"className\",className);\n    }\n    \n    removeClass(className) {\n        if (className === undefined) {\n            this.htmlEles.forEach( ele => {\n                ele.removeAttribute(\"class\");\n            });\n        } else if (typeof className === 'string' ) {\n            this.htmlEles.forEach( ele => {\n                if (ele.className === className) {\n                    ele.removeAttribute(\"class\");\n                }\n            });\n        }\n        \n    }\n\n    children() {\n      let childrenArr = [];\n\n      this.htmlEles.forEach( ele => {\n        const eleChildren = ele.children;\n        const eleChildrenArr = [];\n        for (let i = 0; i < eleChildren.length; i++) {\n          eleChildrenArr.push(eleChildren.item(i));\n        }\n        childrenArr = childrenArr.concat(eleChildrenArr);\n      })\n\n      return new DOMNodeCollection(childrenArr);\n    }\n\n    parent() {\n      let parentArr = [];\n\n      this.htmlEles.forEach( ele => {\n        const eleParent = ele.parentElement;\n        parentArr.push(eleParent)\n      })\n\n      return new DOMNodeCollection(parentArr);\n    }\n\n    find(selector) {\n        const selected = [];\n        this.htmlEles.forEach(ele => {\n          const selectedEle = ele.querySelectorAll(selector);\n          selectedEle.forEach(e => { \n                if (!selected.includes(e)) selected.push(e);\n            }); \n        });\n        return new DOMNodeCollection(selected);\n    }\n\n    remove() {\n        this.htmlEles.forEach(ele => {\n            ele.parentNode.removeChild(ele);  \n        });\n    }\n    \n    on(action, callback) {\n      this.htmlEles.forEach( ele => {\n        ele.addEventListener(action, callback);\n        ele.callback = callback;\n      })\n    }\n    \n    off(action) {\n      this.htmlEles.forEach( ele => {\n        ele.removeEventListener(action, ele.callback)\n        delete ele.callback;\n      })\n    }\n    \n  }\n  \n  \n  module.exports = DOMNodeCollection;\n  \n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\")\n\nfunction jQueryLite(arg) {\n  \n  if (typeof arg === \"string\") {\n    const nodeList = document.querySelectorAll(arg);\n    const nodeArr = [];\n    nodeList.forEach( node => {\n      nodeArr.push(node);\n    });\n    return new DOMNodeCollection(nodeArr);\n  } else if (arg instanceof HTMLElement) {\n     return new DOMNodeCollection([arg]);\n  } else if( arg instanceof Function){\n      const functions = []\n      functions.push(arg)\n      let stateCheck = setInterval(() => {\n        if (document.readyState === 'complete') {\n          clearInterval(stateCheck);\n          functions.forEach(f =>{ f()})\n        }\n      }, 100);\n  }\n\n}\n\nwindow.$l = jQueryLite;\n\nwindow.$l.extend = function(...args) {\n  const res = {};\n\n  args.forEach( arg => {\n    Object.keys(arg).forEach( key => {\n      res[key] = arg[key];\n    })\n  })\n\n  return res;\n}\n\nwindow.$l.ajax = function(options) {\n    const xhr = new XMLHttpRequest();\n    let defaults = {\n        contentType: options.contentType || 'application/x-www-form-urlencoded; charset=UTF-8',\n        type: options.type || 'GET',\n        success: options.success || function() {},\n        error: options.error || function() {},\n        url: options.url || document.URL,\n        data: options.data || {}\n    }\n\n    defaults = $l.extend(defaults, options);\n    xhr.open(defaults.type, defaults.url);\n    xhr.onload = function() {\n        if (xhr.status < 400) {\n          return defaults.success( JSON.parse(xhr.response) ) ;\n        } else {\n          return defaults.error( JSON.parse(xhr.response) );\n        }\n    };\n\n    xhr.send(options.data)\n}\n\n// $.ajax({\n//     type: 'GET',\n//     url: \"http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b\",\n//     success(data) {\n//       console.log(\"We have your weather!\")\n//       console.log(data);\n//     },\n//     error() {\n//       console.error(\"An error occurred.\");\n//     },\n//  });\n\n// //step 1 - create xhr object\n// const xhr = new XMLHttpRequest();\n\n// // step 2 - specify path and verb\n// xhr.open('POST', 'api/path/to/resource');\n\n// // step 3 - register a callback\n// xhr.onload = function () {\n//   console.log(xhr.status) // for status info\n//   console.log(xhr.responseType) //the type of data that was returned\n//   console.log(xhr.response) //the actual response. For JSON api calls, this will be a JSON string\n// }\n\n// // step 4 - send off the request with optional data\n// const optionalData = { name: \"User1\", password : \"123456\" };\n// xhr.send(optionalData);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\")\n\nUtil.inherits(Asteroid, MovingObject)\n\nfunction Asteroid(options) {\n  this.color = \"gray\";\n  this.radius = 25;\n  this.pos = options.pos;\n  this.vel = Util.randomVec(3);\n  this.game = options.game;\n  new MovingObject(this);\n}\n\nAsteroid.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  }\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\")\n\nfunction Game() {\n  this.dimX = 500;\n  this.dimY = 500;\n  this.numAsteroids = 7;\n  this.asteroids = [];\n  this.addAsteroids();\n  this.ship = new Ship( { game: this, pos: this.randomPosition() } );\n}\n\nGame.prototype.allObjects = function() {\n  const allObjs = this.asteroids.concat([this.ship]);\n  return allObjs;\n}\n\nGame.prototype.addAsteroids = function() {\n  for (let n = 0; n < this.numAsteroids; n++) {\n    this.asteroids.push( new Asteroid( { game: this, pos: this.randomPosition() } ) )\n  }\n}\n\nGame.prototype.randomPosition = function() {\n  const x = Math.random() * this.dimX;\n  const y = Math.random() * this.dimY;\n  return [x, y]\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.dimX, this.dimY);\n  this.allObjects().forEach( obj => {\n    obj.draw(ctx);\n  });\n}\n\nGame.prototype.moveObjects = function() {\n  this.allObjects().forEach( obj => {\n    obj.move();\n  });\n}\n\nGame.prototype.wrap = function(pos) {\n  const newPos = pos.map( (posEle, idx) => {\n    if (posEle < 0) {\n      return posEle = this.dimX; //idx === 0 ? this.dimX : this.dimY;\n    } else if (posEle > this.dimX) { //idx === 0 ? this.dimX: this.dimY) {\n      return posEle = 0;\n    } else {\n      return posEle;\n    }\n  })\n  return newPos;\n}\n\nGame.prototype.checkCollisions = function() {\n  const allObjs = this.allObjects()\n  for (let i = 0; i < allObjs.length - 1; i++) {\n    const ast1 = allObjs[i];\n    for (let j = i + 1; j < allObjs.length; j++) {\n      const ast2 = allObjs[j];\n      if ( ast1.isCollidedWith(ast2) ) {\n        ast1.collideWith(ast2);\n      };\n    }\n  }\n}\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n  console.log(this.asteroids)\n}\n\nGame.prototype.remove = function(obj) {\n  this.asteroids = this.asteroids.filter( asteroid => obj !== asteroid)\n}\n\n\n\nmodule.exports = Game\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView(game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  setInterval( () => {\n    this.game.step();\n    this.game.draw(this.ctx);\n  }, 20);\n}\n\nGameView.prototype.bindKeyHandlers = function() {\n\n}\n\nmodule.exports = GameView\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const game = new Game();\n  const gameView = new GameView(game, ctx);\n  gameView.start();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n  const newX = this.pos[0] + this.vel[0];\n  const newY = this.pos[1] + this.vel[1];\n  this.pos = this.game.wrap( [newX, newY] )\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  const distBtwn = Utils.distBtwn(this.pos, otherObject.pos);\n  if ( distBtwn < this.radius + otherObject.radius ) return true;\n  return false;\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n}\n\nmodule.exports = MovingObject\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\n\nUtil.inherits(Ship, MovingObject);\n\nfunction Ship(options) {\n  this.radius = 5;\n  this.color = \"purple\";\n  this.vel = [0, 0];\n  this.pos = options.pos;\n  this.game = options.game;\n  new MovingObject(this);\n}\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n}\n\nShip.prototype.power = function(impulse) {\n  // heres where i left off\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  distBtwn(pos1, pos2) {\n    const x1 = pos1[0];\n    const y1 = pos1[1];\n    const x2 = pos2[0];\n    const y2 = pos2[1];\n\n    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);\n  }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
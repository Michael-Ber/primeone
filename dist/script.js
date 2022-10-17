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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('DOMContentLoaded', () => {
  //BURGER MENU 
  function burger(trig, menu, trigActive, menuActive, closeTrig, overlaySelector, overlayActive) {
    const trigger = document.querySelector(trig);
    const popup = document.querySelector(menu);
    const close = document.querySelector(closeTrig);
    const overlay = document.querySelector(overlaySelector);
    const body = document.querySelector('body');
    trigger.addEventListener('click', function () {
      if (!this.classList.contains(trigActive)) {
        this.classList.add(trigActive);
        popup.classList.add(menuActive);
        overlay.classList.add(overlayActive);
        body.style.overflow = "hidden";
      } else {
        this.classList.remove(trigActive);
        popup.classList.remove(menuActive);
        overlay.classList.remove(overlayActive);
        body.style.overflow = 'unset';
      }
    });

    if (close) {
      close.addEventListener('click', () => {
        trigger.classList.remove(trigActive);
        popup.classList.remove(menuActive);
        overlay.classList.remove(overlayActive);
        body.style.overflow = 'unset';
      });
    }

    window.addEventListener('resize', () => {
      overlay.classList.remove(overlayActive);
    });
  }

  burger('.burger-btn', '.burger-menu', 'burger-btn_active', 'burger-menu_active', '.burger-close', '.overlay', 'overlay_active');

  const removeScrollTwitching = () => {
    const body = document.querySelector('body');
    let div = document.createElement('div');
    div.style.visibility = 'none';
    div.style.opacity = '0';
    div.style.width = '50px;';
    div.style.height = '50px;';
    div.style.overflow = 'scroll';
    body.appendChild(div);
    let offset = div.offsetWidth - div.clientWidth;
    div.remove();
    return offset;
  };

  removeScrollTwitching(); //END BURGER MENU
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
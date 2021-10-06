/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/CodeDisplay.js":
/*!************************************!*\
  !*** ./src/modules/CodeDisplay.js ***!
  \************************************/
/***/ (function() {

class Code {
  constructor() {
    this.codeFormat = document.querySelectorAll('.code_format');
    this.formatCode();
  }

  formatCode() {
    this.codeFormat.forEach(el => {
      el.textContent = el.textContent.replace(/^\s+/mg, "");
    });
  }

}

new Code();

/***/ }),

/***/ "./src/modules/MinMaxCode.js":
/*!***********************************!*\
  !*** ./src/modules/MinMaxCode.js ***!
  \***********************************/
/***/ (function() {

// Minimizes and opens code areas
class MinMaxCode {
  constructor() {
    this.sizeBtn = document.querySelectorAll('.code_type');
    this.changeDisplay();
  }

  changeDisplay() {
    this.sizeBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        let codeContainer = btn.nextSibling.nextSibling;
        codeContainer.classList.toggle('hide_code_container');
      });
    });
  }

}

new MinMaxCode();

/***/ }),

/***/ "./src/modules/Nav.js":
/*!****************************!*\
  !*** ./src/modules/Nav.js ***!
  \****************************/
/***/ (function() {

class MobileNav {
  constructor() {
    this.toggleNavBtn = document.querySelector('.toggle_nav');
    this.navList = document.querySelector('.nav_list');
    this.toggleNav();
  }

  toggleNav() {
    this.toggleNavBtn.addEventListener('click', () => {
      this.navList.classList.toggle('nav_list_open');
    });
  }

}

new MobileNav();

/***/ }),

/***/ "./src/modules/Prog_bar.js":
/*!*********************************!*\
  !*** ./src/modules/Prog_bar.js ***!
  \*********************************/
/***/ (function() {

class ProgressBar {
  constructor() {
    this.progression = document.querySelector('.progression');
    this.event();
  }

  event() {
    window.onscroll = () => this.changeProgression();
  }

  changeProgression() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = winScroll / height * 100;
    this.progression.style.width = scrolled + "%";
  }

}

new ProgressBar();

/***/ }),

/***/ "./src/modules/Theme.js":
/*!******************************!*\
  !*** ./src/modules/Theme.js ***!
  \******************************/
/***/ (function() {

class Theme {
  constructor() {
    this.lightThemeBtn = document.querySelector('.light_theme_btn');
    this.darkThemeBtn = document.querySelector('.dark_theme_btn');
    this.themeBtns = document.querySelector('.theme_btns');
    this.websiteBody = document.body;
    this.navbar = document.querySelector('.navbar');
    this.logo = document.querySelector('.light_nav_logo');
    this.toggleNavLines = document.querySelectorAll('.line');
    this.navLi = document.querySelectorAll('.nav_li');
    this.activeLi = document.querySelector('.light_active_li');
    this.mobileSearchDiv = document.querySelector('.mobile_search_div');
    this.openEntryBtn = document.querySelectorAll('.open_entry');
    this.entryDate = document.querySelectorAll('.entry_date');
    this.entryCode = document.querySelectorAll('.entry_code');
    this.singleEntryCode = document.querySelectorAll('.single_entry_code');
    this.events();
    this.getLclStrgTheme();
  }

  events() {
    this.lightThemeBtn.addEventListener('click', this.lightTheme.bind(this));
    this.darkThemeBtn.addEventListener('click', this.darkTheme.bind(this));
  }

  setLclStrgTheme(theme) {
    localStorage.setItem("theme", theme);
  }

  getLclStrgTheme() {
    let theme = localStorage.getItem("theme");
    theme == 'dark' ? this.darkTheme() : this.lightTheme();
  }

  changeOne(el, add, remove) {
    el.classList.add(add);
    el.classList.remove(remove);
  }

  changeAll(elements, add, remove) {
    elements.forEach(el => {
      el.classList.add(add);
      el.classList.remove(remove);
    });
  }

  darkTheme() {
    // Set local storage 
    this.setLclStrgTheme('dark'); //Change theme button style

    this.changeOne(this.themeBtns, 'dark_theme_btn_style', 'light_theme_btn_style'); // Make this btn the active btn 

    this.darkThemeBtn.classList.add('active_theme');
    this.lightThemeBtn.classList.remove('active_theme'); //Change body

    this.changeOne(this.websiteBody, 'dark_theme', 'light_theme'); //Change navbar

    this.changeOne(this.navbar, 'dark_navbar', 'light_navbar');
    this.changeOne(this.logo, 'dark_nav_logo', 'light_nav_logo');
    this.changeAll(this.toggleNavLines, 'dark_line', 'light_line');
    this.changeAll(this.navLi, 'dark_nav_li', 'light_nav_li');
    this.changeOne(this.activeLi, 'dark_active_li', 'light_active_li'); //Change mobile search bar

    this.mobileSearchDiv.classList.remove('light_search_div');
    this.changeAll(this.openEntryBtn, 'dark_open_entry', 'light_open_entry');
    this.changeAll(this.entryDate, 'dark_entry_date', 'light_entry_date');
    this.changeAll(this.entryCode, 'dark_entry_code', 'light_entry_code');
    this.changeAll(this.singleEntryCode, 'dark_single_entry_code', 'light_single_entry_code');
  }

  lightTheme() {
    // Set local storage 
    this.setLclStrgTheme('light'); // Change theme buttons style

    this.changeOne(this.themeBtns, 'light_theme_btn_style', 'dark_theme_btn_style'); // Make this btn the active btn 

    this.lightThemeBtn.classList.add('active_theme');
    this.darkThemeBtn.classList.remove('active_theme'); // Change body

    this.changeOne(this.websiteBody, 'light_theme', 'dark_theme'); // Change navbar

    this.changeOne(this.navbar, 'light_navbar', 'dark_navbar');
    this.changeOne(this.logo, 'light_nav_logo', 'dark_nav_logo');
    this.changeAll(this.toggleNavLines, 'light_line', 'dark_line');
    this.changeAll(this.navLi, 'light_nav_li', 'dark_nav_li');
    this.changeOne(this.activeLi, 'light_active_li', 'dark_active_li'); //Change mobile search bar

    this.mobileSearchDiv.classList.remove('light_search_div');
    this.changeAll(this.openEntryBtn, 'light_open_entry', 'dark_open_entry');
    this.changeAll(this.entryDate, 'light_entry_date', 'dark_entry_date');
    this.changeAll(this.entryCode, 'light_entry_code', 'dark_entry_code');
    this.changeAll(this.singleEntryCode, 'light_single_entry_code', 'dark_single_entry_code');
  }

}

new Theme();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Theme */ "./src/modules/Theme.js");
/* harmony import */ var _modules_Theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_Theme__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_Prog_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Prog_bar */ "./src/modules/Prog_bar.js");
/* harmony import */ var _modules_Prog_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_Prog_bar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Nav */ "./src/modules/Nav.js");
/* harmony import */ var _modules_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_MinMaxCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/MinMaxCode */ "./src/modules/MinMaxCode.js");
/* harmony import */ var _modules_MinMaxCode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_MinMaxCode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_CodeDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/CodeDisplay */ "./src/modules/CodeDisplay.js");
/* harmony import */ var _modules_CodeDisplay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_CodeDisplay__WEBPACK_IMPORTED_MODULE_4__);



 // Need to work on how code is displayed


const theme = new (_modules_Theme__WEBPACK_IMPORTED_MODULE_0___default())();
const progBar = new (_modules_Prog_bar__WEBPACK_IMPORTED_MODULE_1___default())();
const nav = new (_modules_Nav__WEBPACK_IMPORTED_MODULE_2___default())();
const minMax = new (_modules_MinMaxCode__WEBPACK_IMPORTED_MODULE_3___default())();
const codeFormat = new (_modules_CodeDisplay__WEBPACK_IMPORTED_MODULE_4___default())();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map
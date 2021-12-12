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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/addItem.js":
/*!**************************************!*\
  !*** ./src/js/components/addItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editItem */ "./src/js/components/editItem.js");
/* harmony import */ var _delItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delItem */ "./src/js/components/delItem.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./src/js/components/search.js");




const addItem = items => {
  const input = document.querySelector('.add-name input');
  const table = document.querySelector('.crud table tbody');
  const tr = document.createElement('tr');
  tr.classList.add('parent');
  const item = items[items.length - 1];
  tr.innerHTML = `
        <td>${item[0]}</td>
                <td data-editName>${item[1]}</td>
                <td class="d-flex">
                    <button type="button" class="btn btn-primary btn-edit me-2"><i class="fa fa-pencil"
                            aria-hidden="true"></i></button>
                            <input class="form-control me-2" type="text">
                            <button type="button" class="btn btn-primary btn-del"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                                        
                </td>
            `;
  table.append(tr);
  input.value = '';
  Object(_delItem__WEBPACK_IMPORTED_MODULE_1__["default"])(items);
  Object(_editItem__WEBPACK_IMPORTED_MODULE_0__["default"])(items);
  Object(_search__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/* harmony default export */ __webpack_exports__["default"] = (addItem);

/***/ }),

/***/ "./src/js/components/addLocalStorage.js":
/*!**********************************************!*\
  !*** ./src/js/components/addLocalStorage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const addLocalStorage = () => {
  const id = Date.now();
  const name = document.querySelector('.add-name input').value;
  return localStorage.setItem(id, name);
};

/* harmony default export */ __webpack_exports__["default"] = (addLocalStorage);

/***/ }),

/***/ "./src/js/components/addMemory.js":
/*!****************************************!*\
  !*** ./src/js/components/addMemory.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const addMemory = arr => {
  let item = [];
  item[0] = Date.now();
  item[1] = document.querySelector('.add-name input').value;
  arr.push(item);
  return arr;
};

/* harmony default export */ __webpack_exports__["default"] = (addMemory);

/***/ }),

/***/ "./src/js/components/addName.js":
/*!**************************************!*\
  !*** ./src/js/components/addName.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addLocalStorage */ "./src/js/components/addLocalStorage.js");
/* harmony import */ var _addItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addItem */ "./src/js/components/addItem.js");
/* harmony import */ var _addMemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addMemory */ "./src/js/components/addMemory.js");




const addName = selectorStorage => {
  let arrItems = [];
  const input = document.querySelector('.add-name input');
  const button = document.querySelector('.add-name button');
  button.addEventListener('click', () => {
    addItems();
  });
  input.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
      event.preventDefault();
      addItems();
    }
  });

  function addItems() {
    if (input.value == '') {
      input.classList.add("invalid");
    } else {
      if (input.classList.contains('invalid')) {
        input.classList.remove('invalid');
      }

      if (selectorStorage) {
        let item = Object(_addMemory__WEBPACK_IMPORTED_MODULE_2__["default"])(arrItems);
        Object(_addItem__WEBPACK_IMPORTED_MODULE_1__["default"])(item);
      } else {
        Object(_addLocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
        let item = Object.entries(localStorage).sort((a, b) => a[0] - b[0]);
        Object(_addItem__WEBPACK_IMPORTED_MODULE_1__["default"])(item);
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (addName);

/***/ }),

/***/ "./src/js/components/delItem.js":
/*!**************************************!*\
  !*** ./src/js/components/delItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const delItem = arrItems => {
  const btnDel = document.querySelectorAll('.btn-del');
  const btn = btnDel[btnDel.length - 1];
  const parent = btn.closest('.parent');
  btn.addEventListener('click', () => {
    const id = parent.querySelector('td').innerText;
    parent.remove();
    localStorage.removeItem(id);
    arrItems = arrItems.filter(item => {
      return item[0] != id;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (delItem);

/***/ }),

/***/ "./src/js/components/editItem.js":
/*!***************************************!*\
  !*** ./src/js/components/editItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const editItem = arrItems => {
  const btnEdit = document.querySelectorAll('.btn-edit');
  const btn = btnEdit[btnEdit.length - 1];
  const parent = btn.closest('.parent');
  const name = parent.querySelector('[data-editName]');
  btn.addEventListener('click', () => {
    const input = btn.nextElementSibling;
    const id = parent.querySelector('td').innerText;
    const objIndex = arrItems.findIndex(el => el[0] == id);
    input.classList.toggle('show');
    input.addEventListener('input', () => {
      name.innerText = input.value;
      localStorage.setItem(id, input.value);
      arrItems[objIndex][1] = input.value;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (editItem);

/***/ }),

/***/ "./src/js/components/initStorage.js":
/*!******************************************!*\
  !*** ./src/js/components/initStorage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showLocalStoage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showLocalStoage */ "./src/js/components/showLocalStoage.js");
/* harmony import */ var _addName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addName */ "./src/js/components/addName.js");



const initStorage = () => {
  let chois;
  const selection = document.querySelector('.storage-selection');
  const btnsStorageSelection = selection.querySelectorAll('button');
  const content = document.querySelector('.content');
  btnsStorageSelection.forEach(btn => {
    btn.addEventListener('click', function () {
      if (this.classList.contains('btn-memory')) {
        chois = true;
      } else {
        chois = false;
        Object(_showLocalStoage__WEBPACK_IMPORTED_MODULE_0__["default"])();
      }

      selection.classList.add('hidden');
      content.classList.add('show');
      Object(_addName__WEBPACK_IMPORTED_MODULE_1__["default"])(chois);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (initStorage);

/***/ }),

/***/ "./src/js/components/search.js":
/*!*************************************!*\
  !*** ./src/js/components/search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const search = () => {
  const searchInput = document.querySelector('.search-name input');
  const tableRows = document.querySelector('.table tbody').querySelectorAll('tr');
  searchInput.addEventListener('input', e => {
    const searchInputValue = e.target.value.toLowerCase();
    tableRows.forEach(row => {
      const doesRowMatch = row.textContent.toLowerCase().includes(searchInputValue);

      if (doesRowMatch) {
        row.style.display = 'table-row';
      } else {
        row.style.display = 'none';
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./src/js/components/showLocalStoage.js":
/*!**********************************************!*\
  !*** ./src/js/components/showLocalStoage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editItem */ "./src/js/components/editItem.js");
/* harmony import */ var _delItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delItem */ "./src/js/components/delItem.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./src/js/components/search.js");




const showLocalStoage = () => {
  let items = Object.entries(localStorage).sort((a, b) => a[0] - b[0]);
  items.forEach(item => {
    const table = document.querySelector('.crud table tbody');
    const tr = document.createElement('tr');
    tr.classList.add('parent');
    tr.innerHTML = `
        <td>${item[0]}</td>
                <td data-editName>${item[1]}</td>
                <td class="d-flex">
                    <button type="button" class="btn btn-primary btn-edit me-2"><i class="fa fa-pencil"
                            aria-hidden="true"></i></button>
                            <input class="form-control me-2" type="text">
                            <button type="button" class="btn btn-primary btn-del"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                                        
                </td>
            `;
    table.append(tr);
    Object(_delItem__WEBPACK_IMPORTED_MODULE_1__["default"])(items);
    Object(_editItem__WEBPACK_IMPORTED_MODULE_0__["default"])(items);
    Object(_search__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (showLocalStoage);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_initStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/initStorage */ "./src/js/components/initStorage.js");

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_components_initStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
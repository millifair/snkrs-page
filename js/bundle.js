/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/btn.js":
/*!*******************************!*\
  !*** ./src/js/modules/btn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btn": () => (/* binding */ btn)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/js/modules/form.js");

function btn(){
const btn=document.querySelectorAll('.btn');
const links=document.querySelector('.links');
links.addEventListener('mouseover',()=>{
  links.classList.add('color2');
});
links.addEventListener('mouseout',()=>{
links.classList.remove('color2');
});
    btn.forEach(btn=>{
        btn.addEventListener('mouseover',()=>{
        btn.classList.add('fire');
    });
    btn.addEventListener('mouseout',()=>{
      btn.classList.remove('fire');
  });
 btn.addEventListener('click',()=>{
  (0,_form__WEBPACK_IMPORTED_MODULE_0__.openModal)();
  });
});
const btn__down=document.querySelector('.btn__down');
const menu=document.querySelector('.menu');



btn__down.addEventListener('mouseover',()=>{
  btn__down.classList.add('fire');
});
btn__down.addEventListener('mouseout',()=>{
btn__down.classList.remove('fire');
});

btn__down.addEventListener('click',()=> {
menu.scrollIntoView({behavior: "smooth"});
});
}


/***/ }),

/***/ "./src/js/modules/card.js":
/*!********************************!*\
  !*** ./src/js/modules/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "card": () => (/* binding */ card)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/js/modules/form.js");

function card(){
   
document.querySelectorAll("fieldset.with-placeholder input").forEach(function(el) {
    el.addEventListener("focus", function() {
      this.parentNode.querySelector(".placeholder").classList.add("active");
    });
    el.addEventListener("blur", function() {
      if (this.value == "") {
        this.parentNode.querySelector(".placeholder").classList.remove("active");
      }
    })
  });
  
  function updateMouthEyes() {
     if (email.value.length > 0) {
      if (email.value.indexOf("@") > 0 && email.value.indexOf("@") < email.value.length - 1) {
      document.querySelector("#mouth").setAttribute("d", "M 75,115 C 79,110 92,117 102,117 111,117 123,111 127,114 131,117 123,136 102,136 81,137 73,121 75,115 Z");
      } else {
        document.querySelector("#mouth").setAttribute("d", "M 75,115 C 79,110 92,119 101,119 110,119 123,111 127,114 131,117 118,131 102,132 87,132 73,121 75,115 Z");
      }
    } else {
      document.querySelector("#mouth").setAttribute("d", "M 75,115 C 79,120 91,126 101,125 110,125 126,118 127,114 125,117 117,125 101,125 85,126 79,117 75,115 Z");
    }
    
    let pupilRight = document.querySelector("#pupil-right");
    let pupilLeft = document.querySelector("#pupil-left");
    let movePos = email.value.length > 30 ? 13.33 : email.value.length / 2.25 ;
    pupilRight.setAttribute("cy", 75);
    pupilLeft.setAttribute("cy", 76);
    pupilRight.setAttribute("cx", 78 + movePos)
    pupilLeft.setAttribute("cx", 113 + movePos);
  }
  
  let email = document.querySelector("#email");
  email.addEventListener("focus", updateMouthEyes);
  email.addEventListener("input", updateMouthEyes);
  email.addEventListener("blur", function() {
    let pupilRight = document.querySelector("#pupil-right");
    let pupilLeft = document.querySelector("#pupil-left");
    pupilRight.setAttribute("cx", 84);
    pupilRight.setAttribute("cy", 69);
    pupilLeft.setAttribute("cx", 120);
    pupilLeft.setAttribute("cy", 71);
  });
  

  let password = document.querySelector("#password");
  password.addEventListener("focus", function() {
    document.querySelector("#ghost-arm-left").setAttribute("d","M 155,88 C 145,68 105,51 103,62 102,74 123,117 155,116");
    document.querySelector("#ghost-arm-right").setAttribute("d", "M 45,89 C 54,64 103,48 106,64 108,80 65,121 48,119");
  });
  password.addEventListener("blur", function() {
    document.querySelector("#ghost-arm-left").setAttribute("d","M 155,88 C 191,90 194,114 192,125 191,137 172,109 155,116");
    document.querySelector("#ghost-arm-right").setAttribute("d", "M 45,89 C 25,92 9,108 11,124 13,141 27,115 48,119");
  })

//кнопки
const btn=document.querySelectorAll('.btn');
const links=document.querySelector('.links');
links.addEventListener('mouseover',()=>{
links.classList.add('color2');
});
links.addEventListener('mouseout',()=>{
links.classList.remove('color2');
});
btn.forEach(btn=>{
    btn.addEventListener('mouseover',()=>{
    btn.classList.add('fire');
});
btn.addEventListener('mouseout',()=>{
  btn.classList.remove('fire');
});
btn.addEventListener('click',()=>{
(0,_form__WEBPACK_IMPORTED_MODULE_0__.openModal)();
});
});
}


/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal)
/* harmony export */ });
function form(){
const forms = document.querySelectorAll('form');
  const message = {
      loading: 'img/690471.svg',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...'
  };
  forms.forEach(item => {
    bindPostData(item);
});

const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};
function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            color:black;
        `;
        form.insertAdjacentElement('afterend', statusMessage);
    
        const formData = new FormData(form);
  
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
  
        postData('http://localhost:3000/requests', json)
        .then(data => {
            console.log(data);
            showThanksModal(message.success);
            statusMessage.remove();
        }).catch(() => {
            showThanksModal(message.failure);
        }).finally(() => {
            form.reset();
        });
    });
  }
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__content');
    prevModalDialog.classList.add('hide');
    openModal();
  
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__content');
    thanksModal.innerHTML = `
        <div class="modal__input">
            <div class="modal__title">${message}</div>
        </div>
    `;
    modal.append(thanksModal);
   
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal();
    }, 2000);
  }
}
const modal=document.querySelector('.modal');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}
function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}






/***/ }),

/***/ "./src/js/modules/get.js":
/*!*******************************!*\
  !*** ./src/js/modules/get.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get)
/* harmony export */ });
function get(){
async function getResource(url) {
    let res = await fetch(url);
  
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
  
    return await res.json();
  }
  getResource('http://localhost:3000/menu')
          .then(data => createCard(data));
  
      function createCard(data) {
          data.forEach(({img, altimg, title, descr, price}) => {
              const element = document.createElement('div');
  
              element.classList.add("menu__item");
  
              element.innerHTML = `
                  <img src=${img} alt=${altimg}>
                  <h3 class="menu__item-subtitle">${title}</h3>
                  <div class="menu__item-descr">${descr}</div>
                  <div class="menu__item-divider"></div>
                  <div class="menu__item-price">
                      <div class="menu__item-cost">Цена:</div>
                      <div class="menu__item-total"><span>${price}</span> $</div>
                  </div>
              `;
              document.querySelector(".container__menu").append(element);
              element.addEventListener('mouseover',()=>{
                element.classList.add('item-lin')
              })
              element.addEventListener('mouseout',()=>{
                element.classList.remove('item-lin')
              })
          });
      }
    }
    

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/card */ "./src/js/modules/card.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/get */ "./src/js/modules/get.js");
/* harmony import */ var _modules_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/btn */ "./src/js/modules/btn.js");




window.addEventListener('DOMContentLoaded', function() {
    // const get = require('./modules/get'),
  
   
    // card = require('./modules/card'),
    // btn = require('./modules/btn'),
    // form = require('./modules/form');
   
        (0,_modules_btn__WEBPACK_IMPORTED_MODULE_3__.btn)();
(0,_modules_get__WEBPACK_IMPORTED_MODULE_2__.get)();
(0,_modules_form__WEBPACK_IMPORTED_MODULE_1__.form)();
(0,_modules_card__WEBPACK_IMPORTED_MODULE_0__.card)();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
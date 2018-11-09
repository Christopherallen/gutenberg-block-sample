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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function () {
	var __ = wp.i18n.__;
	var registerBlockType = wp.blocks.registerBlockType;
	var RichText = wp.editor.RichText;

	/**
  * Register block
  *
  * @param  {string}   name     Block name.
  * @param  {Object}   settings Block settings.
  * @return {?WPBlock}          Block itself, if registered successfully,
  *                             xotherwise "undefined".
  */

	registerBlockType('fresh/static-block-example', {
		title: __('Fresh Static Block'),
		icon: 'lock',
		category: 'common',
		attributes: {
			textString: {
				type: 'array',
				source: 'children',
				selector: 'h2'
			}
		},

		// Defines the block within the editor.
		edit: function edit(props) {
			var textString = props.attributes.textString,
			    className = props.className,
			    setAttributes = props.setAttributes;

			var onChangeContent = function onChangeContent(newContent) {
				setAttributes({ textString: newContent });
			};

			return wp.element.createElement(
				'div',
				{ className: className },
				wp.element.createElement(RichText, {
					tagName: 'h2',
					value: textString,
					onChange: onChangeContent,
					placeholder: 'Enter your text here!'
				})
			);
		},

		// Defines the saved block.
		save: function save(props) {
			return wp.element.createElement(RichText.Content, { tagName: 'h2', value: props.attributes.textString });
		}
	});
})();

/***/ })
/******/ ]);
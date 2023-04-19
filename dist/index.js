/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Parse = exports.parse = void 0;\nconst parse_1 = __webpack_require__(/*! ./parse */ \"./src/parse.ts\");\nexports.parse = parse_1.default;\nconst Parse = parse_1.default;\nexports.Parse = Parse;\nexports[\"default\"] = parse_1.default;\n\n\n//# sourceURL=webpack://rss-to-json/./src/index.ts?");

/***/ }),

/***/ "./src/parse.ts":
/*!**********************!*\
  !*** ./src/parse.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst fast_xml_parser_1 = __webpack_require__(/*! fast-xml-parser */ \"fast-xml-parser\");\nexports[\"default\"] = async (url, config) => {\n    var _a, _b;\n    if (!/(^http(s?):\\/\\/[^\\s$.?#].[^\\s]*)/i.test(url))\n        return null;\n    const res = await fetch(url, config);\n    const data = await res.text();\n    const xml = new fast_xml_parser_1.XMLParser({\n        attributeNamePrefix: '',\n        textNodeName: '$text',\n        ignoreAttributes: false,\n    });\n    const result = xml.parse(data);\n    let channel = result.rss && result.rss.channel ? result.rss.channel : result.feed;\n    if (Array.isArray(channel))\n        channel = channel[0];\n    const rss = {\n        title: (_a = channel.title) !== null && _a !== void 0 ? _a : '',\n        description: (_b = channel.description) !== null && _b !== void 0 ? _b : '',\n        link: channel.link && channel.link.href ? channel.link.href : channel.link,\n        image: channel.image ? channel.image.url : channel['itunes:image'] ? channel['itunes:image'].href : '',\n        category: channel.category || [],\n        items: [],\n    };\n    let items = channel.item || channel.entry || [];\n    if (items && !Array.isArray(items))\n        items = [items];\n    for (let i = 0; i < items.length; i++) {\n        const val = items[i];\n        const media = {};\n        const obj = {\n            id: val.guid && val.guid.$text ? val.guid.$text : val.id,\n            title: val.title && val.title.$text ? val.title.$text : val.title,\n            description: val.summary && val.summary.$text ? val.summary.$text : val.description,\n            link: val.link && val.link.href ? val.link.href : val.link,\n            author: val.author && val.author.name ? val.author.name : val['dc:creator'],\n            published: val.created ? Date.parse(val.created) : val.pubDate ? Date.parse(val.pubDate) : val.published ? Date.parse(val.published) : Date.now(),\n            created: val.published ? Date.parse(val.published) : val.updated ? Date.parse(val.updated) : val.pubDate ? Date.parse(val.pubDate) : val.created ? Date.parse(val.created) : Date.now(),\n            category: val.category || [],\n            content: val.content && val.content.$text ? val.content.$text : val['content:encoded'],\n            enclosures: val.enclosure ? (Array.isArray(val.enclosure) ? val.enclosure : [val.enclosure]) : [],\n        };\n        ['content:encoded', 'podcast:transcript', 'itunes:summary', 'itunes:author', 'itunes:explicit', 'itunes:duration', 'itunes:season', 'itunes:episode', 'itunes:episodeType', 'itunes:image'].forEach((s) => {\n            if (val[s])\n                obj[s.replace(':', '_')] = val[s];\n        });\n        if (val['media:thumbnail']) {\n            Object.assign(media, { thumbnail: val['media:thumbnail'] });\n            obj.enclosures.push(val['media:thumbnail']);\n        }\n        if (val['media:content']) {\n            Object.assign(media, { thumbnail: val['media:content'] });\n            obj.enclosures.push(val['media:content']);\n        }\n        if (val['media:group']) {\n            if (val['media:group']['media:title'])\n                obj.title = val['media:group']['media:title'];\n            if (val['media:group']['media:description'])\n                obj.description = val['media:group']['media:description'];\n            if (val['media:group']['media:thumbnail'])\n                obj.enclosures.push(val['media:group']['media:thumbnail'].url);\n        }\n        Object.assign(obj, { media });\n        rss.items.push(obj);\n    }\n    return rss;\n};\n\n\n//# sourceURL=webpack://rss-to-json/./src/parse.ts?");

/***/ }),

/***/ "fast-xml-parser":
/*!**********************************!*\
  !*** external "fast-xml-parser" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("fast-xml-parser");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
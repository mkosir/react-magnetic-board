(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{299:function(module,__webpack_exports__,__webpack_require__){"use strict";var _storybook_theming_create__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(300);__webpack_exports__.a=Object(_storybook_theming_create__WEBPACK_IMPORTED_MODULE_0__.create)({base:"light",brandTitle:"React Magnetic Board 🧲",brandUrl:"https://github.com/mkosir/react-magnetic-board"})},304:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),story_tab_template_react_es5=__webpack_require__(53),src=__webpack_require__(54),Default_storytab=function Default(){return react_default.a.createElement(src.a,{magnet:{path:"M 100, 100  m -75, 0  a 75,75 0 1,0 150,0  a 75,75 0 1,0 -150,0",scale:.2,offsetX:150,offsetY:120,fillStyle:"#c02323",shadowColor:"#bf2626",shadowBlur:5},width:500,height:400,style:{border:"10px solid #d8dce0",borderRadius:"10px"}})};__webpack_exports__.a=function _Default(){return react_default.a.createElement(story_tab_template_react_es5.a,{code:"import React from 'react';\n\nimport MagneticBoard from '../../src';\n\nconst circleMagnetSVG = 'M 100, 100  m -75, 0  a 75,75 0 1,0 150,0  a 75,75 0 1,0 -150,0';\n\nconst Default = () => (\n  <MagneticBoard\n    magnet={{\n      path: circleMagnetSVG,\n      scale: 0.2,\n      offsetX: 150,\n      offsetY: 120,\n      fillStyle: '#c02323',\n      shadowColor: '#bf2626',\n      shadowBlur: 5,\n    }}\n    width={500}\n    height={400}\n    style={{ border: '10px solid #d8dce0', borderRadius: '10px' }}\n  />\n);\n\nexport default Default;\n",codeExt:"tsx"},react_default.a.createElement(Default_storytab,null))}},305:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),story_tab_template_react_es5=__webpack_require__(53),slicedToArray=__webpack_require__(30),src=__webpack_require__(54);__webpack_require__(832);var LS_KEY="react-magnetic-board",PersistentMagnets_PersistentMagnets_storytab=function PersistentMagnets(){var _useLocalStorage=function useLocalStorage(key){var initialValue=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,_useState=Object(react.useState)(JSON.parse(localStorage.getItem(key))||initialValue),_useState2=Object(slicedToArray.a)(_useState,2),value=_useState2[0],setValue=_useState2[1];return Object(react.useEffect)((function(){localStorage.setItem(key,JSON.stringify(value))})),[value,setValue]}(LS_KEY,[]),_useLocalStorage2=Object(slicedToArray.a)(_useLocalStorage,2),magnets=_useLocalStorage2[0],setMagnets=_useLocalStorage2[1],_useState3=Object(react.useState)(!1),_useState4=Object(slicedToArray.a)(_useState3,2),clearTrigger=_useState4[0],setClear=_useState4[1];return react_default.a.createElement("div",{className:"persistent-magnets"},react_default.a.createElement("div",{className:"border"},react_default.a.createElement(src.a,{magnet:{path:"m294.18 450.89c112.45 0 198.11-95.137 206.99-223.43 5.0848-73.49-2.9544-149.56-34.967-214.24-8.4029-5.4128-32.662 0-42.198 0-8.8888 0-31.381-5.1679-36.572 6.6964-8.6217 19.677 0.40872 52.028 3.5208 72.143 5.0849 32.907 8.6314 64.46 6.2918 97.949-3.3953 48.552-18.968 91.019-63.567 102.07-38.014 9.4009-94.215 9.3342-123.11-25.828-32.212-39.177-29.045-108.23-19.857-156.75 4.821-25.476 17.884-60.509 11.937-86.812-3.5498-15.712-30.162-9.7756-40.193-9.9092-14.154-0.20404-41.915-8.1989-49.13 7.4161-17.591 38.019-27.996 78.75-31.6 121.62-6.6844 79.518 1.0588 161.26 47.312 224.34 40.721 55.534 102.63 84.738 165.15 84.738",scale:.15,offsetX:290,offsetY:160,fillStyle:"#c02323",shadowColor:"#bf2626",shadowBlur:35},initMagnets:magnets,onMagnetChange:setMagnets,onClear:clearTrigger})),react_default.a.createElement("div",{className:"buttons"},react_default.a.createElement("button",{onClick:function onClear(){localStorage.removeItem(LS_KEY),setClear((function(clearTrig){return!clearTrig}))}},"Clear Board and Local Storage")))};__webpack_exports__.a=function _PersistentMagnets(){return react_default.a.createElement(story_tab_template_react_es5.a,{code:"import React, { useState, useEffect } from 'react';\n\nimport MagneticBoard from '../../src';\nimport './PersistentMagnets.scss';\n\nconst magnetSVG =\n  'm294.18 450.89c112.45 0 198.11-95.137 206.99-223.43 5.0848-73.49-2.9544-149.56-34.967-214.24-8.4029-5.4128-32.662 0-42.198 0-8.8888 0-31.381-5.1679-36.572 6.6964-8.6217 19.677 0.40872 52.028 3.5208 72.143 5.0849 32.907 8.6314 64.46 6.2918 97.949-3.3953 48.552-18.968 91.019-63.567 102.07-38.014 9.4009-94.215 9.3342-123.11-25.828-32.212-39.177-29.045-108.23-19.857-156.75 4.821-25.476 17.884-60.509 11.937-86.812-3.5498-15.712-30.162-9.7756-40.193-9.9092-14.154-0.20404-41.915-8.1989-49.13 7.4161-17.591 38.019-27.996 78.75-31.6 121.62-6.6844 79.518 1.0588 161.26 47.312 224.34 40.721 55.534 102.63 84.738 165.15 84.738';\n\nfunction useLocalStorage<T>(\n  key: string,\n  initialValue: T = null,\n): [T, React.Dispatch<React.SetStateAction<T>>] {\n  const [value, setValue] = useState<T>(JSON.parse(localStorage.getItem(key)) || initialValue);\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  });\n  return [value, setValue];\n}\n\nconst LS_KEY = 'react-magnetic-board';\n\nconst PersistentMagnets = () => {\n  const [magnets, setMagnets] = useLocalStorage<any[]>(LS_KEY, []);\n  const [clearTrigger, setClear] = useState(false);\n\n  const onClear = () => {\n    localStorage.removeItem(LS_KEY);\n    setClear(clearTrig => !clearTrig);\n  };\n\n  return (\n    <div className=\"persistent-magnets\">\n      <div className=\"border\">\n        <MagneticBoard\n          magnet={{\n            path: magnetSVG,\n            scale: 0.15,\n            offsetX: 290,\n            offsetY: 160,\n            fillStyle: '#c02323',\n            shadowColor: '#bf2626',\n            shadowBlur: 35,\n          }}\n          initMagnets={magnets}\n          onMagnetChange={setMagnets}\n          onClear={clearTrigger}\n        />\n      </div>\n      <div className=\"buttons\">\n        <button onClick={onClear}>Clear Board and Local Storage</button>\n      </div>\n    </div>\n  );\n};\n\nexport default PersistentMagnets;\n",style:".persistent-magnets {\n  .border {\n    border: 10px solid #d8dce0;\n    border-radius: 10px;\n  }\n\n  .buttons {\n    margin-top: 10px;\n\n    button {\n      font-size: 16px;\n      margin: 5px;\n    }\n  }\n}\n",codeExt:"tsx",styleExt:"scss"},react_default.a.createElement(PersistentMagnets_PersistentMagnets_storytab,null))}},306:function(module,__webpack_exports__,__webpack_require__){"use strict";var MagnetColors,react=__webpack_require__(0),react_default=__webpack_require__.n(react),story_tab_template_react_es5=__webpack_require__(53),slicedToArray=__webpack_require__(30),src=__webpack_require__(54);__webpack_require__(834);!function(MagnetColors){MagnetColors.RED="#c02323",MagnetColors.BLUE="#200fb6",MagnetColors.YELLOW="#d1bf17"}(MagnetColors||(MagnetColors={}));var MagneticBoard_MagneticBoard_storytab=function Default(){var _useState=Object(react.useState)(MagnetColors.RED),_useState2=Object(slicedToArray.a)(_useState,2),magnetColor=_useState2[0],setMagnetColor=_useState2[1];return react_default.a.createElement("div",{className:"magnetic-board"},react_default.a.createElement("div",{className:"border"},react_default.a.createElement(src.a,{magnet:{path:"M 100, 100  m -75, 0  a 75,75 0 1,0 150,0  a 75,75 0 1,0 -150,0",scale:.15,offsetX:100,offsetY:90,fillStyle:magnetColor,shadowBlur:5},width:500,height:400})),react_default.a.createElement("div",{className:"magnet-selection"},react_default.a.createElement("button",{id:"red",style:{backgroundColor:MagnetColors.RED,padding:MagnetColors.RED===magnetColor?"16px":"13px"},onClick:function onClick(){return setMagnetColor(MagnetColors.RED)}}),react_default.a.createElement("button",{id:"blue",style:{backgroundColor:MagnetColors.BLUE,padding:MagnetColors.BLUE===magnetColor?"16px":"13px"},onClick:function onClick(){return setMagnetColor(MagnetColors.BLUE)}}),react_default.a.createElement("button",{id:"yellow",style:{backgroundColor:MagnetColors.YELLOW,padding:MagnetColors.YELLOW===magnetColor?"16px":"13px"},onClick:function onClick(){return setMagnetColor(MagnetColors.YELLOW)}})))};__webpack_exports__.a=function _MagneticBoard(){return react_default.a.createElement(story_tab_template_react_es5.a,{code:"import React, { useState } from 'react';\n\nimport MagneticBoard from '../../src';\nimport './MagneticBoard.scss';\n\nconst circleMagnetSVG = 'M 100, 100  m -75, 0  a 75,75 0 1,0 150,0  a 75,75 0 1,0 -150,0';\nenum MagnetColors {\n  RED = '#c02323',\n  BLUE = '#200fb6',\n  YELLOW = '#d1bf17',\n}\n\nconst Default = () => {\n  const [magnetColor, setMagnetColor] = useState(MagnetColors.RED);\n\n  return (\n    <div className=\"magnetic-board\">\n      <div className=\"border\">\n        <MagneticBoard\n          magnet={{\n            path: circleMagnetSVG,\n            scale: 0.15,\n            offsetX: 100,\n            offsetY: 90,\n            fillStyle: magnetColor,\n            shadowBlur: 5,\n          }}\n          width={500}\n          height={400}\n        />\n      </div>\n      <div className=\"magnet-selection\">\n        <button\n          id=\"red\"\n          style={{\n            backgroundColor: MagnetColors.RED,\n            padding: MagnetColors.RED === magnetColor ? '16px' : '13px',\n          }}\n          onClick={() => setMagnetColor(MagnetColors.RED)}\n        />\n        <button\n          id=\"blue\"\n          style={{\n            backgroundColor: MagnetColors.BLUE,\n            padding: MagnetColors.BLUE === magnetColor ? '16px' : '13px',\n          }}\n          onClick={() => setMagnetColor(MagnetColors.BLUE)}\n        />\n        <button\n          id=\"yellow\"\n          style={{\n            backgroundColor: MagnetColors.YELLOW,\n            padding: MagnetColors.YELLOW === magnetColor ? '16px' : '13px',\n          }}\n          onClick={() => setMagnetColor(MagnetColors.YELLOW)}\n        />\n      </div>\n    </div>\n  );\n};\n\nexport default Default;\n",style:".magnetic-board {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  .border {\n    border: 35px solid transparent;\n    border-image: url('./assets/border.png') 24 30 28 26 fill repeat;\n  }\n\n  .magnet-selection {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n\n    button {\n      border: none;\n      border-radius: 50%;\n      color: white;\n      text-align: center;\n      text-decoration: none;\n      display: inline-block;\n      font-size: 16px;\n      margin: 8px;\n      cursor: pointer;\n      transition: 0.2s;\n\n      &:hover {\n        transform: translateY(-5px);\n      }\n    }\n  }\n}\n",codeExt:"tsx",styleExt:"scss"},react_default.a.createElement(MagneticBoard_MagneticBoard_storytab,null))}},307:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),story_tab_template_react_es5=__webpack_require__(53),slicedToArray=__webpack_require__(30),src=__webpack_require__(54),UndoClear_UndoClear_storytab=(__webpack_require__(829),function UndoClear(){var _useState=Object(react.useState)(!1),_useState2=Object(slicedToArray.a)(_useState,2),undoTrigger=_useState2[0],setUndo=_useState2[1],_useState3=Object(react.useState)(!1),_useState4=Object(slicedToArray.a)(_useState3,2),clearTrigger=_useState4[0],setClear=_useState4[1];return react_default.a.createElement("div",{className:"undo-clear"},react_default.a.createElement("div",{className:"border"},react_default.a.createElement(src.a,{magnet:{path:"M 100, 100  m -75, 0  a 75,75 0 1,0 150,0  a 75,75 0 1,0 -150,0",scale:.25,offsetX:100,offsetY:90,fillStyle:"#c02323",shadowColor:"#bf2626",shadowBlur:5},onUndo:undoTrigger,onClear:clearTrigger})),react_default.a.createElement("div",{className:"buttons"},react_default.a.createElement("button",{onClick:function onUndo(){setUndo((function(undoTrig){return!undoTrig}))}},"Undo"),react_default.a.createElement("button",{onClick:function onClear(){setClear((function(clearTrig){return!clearTrig}))}},"Clear")))});__webpack_exports__.a=function _UndoClear(){return react_default.a.createElement(story_tab_template_react_es5.a,{code:"import React, { useState } from 'react';\n\nimport MagneticBoard from '../../src';\nimport './UndoClear.scss';\n\nconst circleMagnetSVG = 'M 100, 100  m -75, 0  a 75,75 0 1,0 150,0  a 75,75 0 1,0 -150,0';\n\nconst UndoClear = () => {\n  const [undoTrigger, setUndo] = useState(false);\n  const [clearTrigger, setClear] = useState(false);\n\n  const onUndo = () => {\n    // Invert value passed to 'onUndo' prop to trigger undo command.\n    setUndo(undoTrig => !undoTrig);\n  };\n\n  const onClear = () => {\n    // Invert value passed to 'onClear' prop to trigger clear command.\n    setClear(clearTrig => !clearTrig);\n  };\n\n  return (\n    <div className=\"undo-clear\">\n      <div className=\"border\">\n        <MagneticBoard\n          magnet={{\n            path: circleMagnetSVG,\n            scale: 0.25,\n            offsetX: 100,\n            offsetY: 90,\n            fillStyle: '#c02323',\n            shadowColor: '#bf2626',\n            shadowBlur: 5,\n          }}\n          onUndo={undoTrigger}\n          onClear={clearTrigger}\n        />\n      </div>\n      <div className=\"buttons\">\n        <button onClick={onUndo}>Undo</button>\n        <button onClick={onClear}>Clear</button>\n      </div>\n    </div>\n  );\n};\n\nexport default UndoClear;\n",style:".undo-clear {\n  .border {\n    border: 10px solid #d8dce0;\n    border-radius: 10px;\n  }\n\n  .buttons {\n    margin-top: 10px;\n\n    button {\n      font-size: 16px;\n      margin: 5px;\n    }\n  }\n}\n",codeExt:"tsx",styleExt:"scss"},react_default.a.createElement(UndoClear_UndoClear_storytab,null))}},308:function(module,exports,__webpack_require__){__webpack_require__(309),__webpack_require__(418),module.exports=__webpack_require__(419)},330:function(module,exports){},419:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(16),__webpack_require__(17),__webpack_require__(11),__webpack_require__(18),__webpack_require__(20);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(68),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(298),_config_theme__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(299);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{theme:_config_theme__WEBPACK_IMPORTED_MODULE_7__.a,showPanel:!1}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.withKnobs);var req=__webpack_require__(628);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(225)(module))},54:function(module,__webpack_exports__,__webpack_require__){"use strict";var toConsumableArray=__webpack_require__(303),defineProperty=__webpack_require__(139),slicedToArray=__webpack_require__(30),react=__webpack_require__(0),react_default=__webpack_require__.n(react);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function draw(ctx,canvasRect,magnets){ctx.clearRect(0,0,ctx.canvas.clientWidth,ctx.canvas.clientHeight),magnets.forEach((function(magnet){return function drawMagnet(ctx,canvasRect,magnet){var magnetCheck=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},magnet);magnetCheck.x=magnet.x-canvasRect.left,magnetCheck.y=magnet.y-canvasRect.top,magnetCheck.fillStyle=magnet.fillStyle?magnet.fillStyle:"",magnetCheck.shadowColor=magnet.shadowColor?magnet.shadowColor:"",magnetCheck.shadowBlur=magnet.shadowBlur?magnet.shadowBlur:0,magnetCheck.scale=magnet.scale?magnet.scale:1,magnetCheck.rotate=magnet.rotate?magnet.rotate:0,magnetCheck.offsetX=magnet.offsetX?magnet.offsetX:0,magnetCheck.offsetY=magnet.offsetY?magnet.offsetY:0,ctx.fillStyle=magnetCheck.fillStyle,ctx.shadowColor=magnetCheck.shadowColor,ctx.shadowBlur=magnetCheck.shadowBlur,ctx.save(),ctx.scale(magnetCheck.scale,magnetCheck.scale),ctx.translate(magnetCheck.x/magnetCheck.scale-magnetCheck.offsetX,magnetCheck.y/magnetCheck.scale-magnetCheck.offsetY),ctx.rotate(magnetCheck.rotate*Math.PI/180);var magnetPath=new Path2D(magnetCheck.path);ctx.fill(magnetPath),ctx.restore()}(ctx,canvasRect,magnet)}))}function ReactMagneticBoard_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var ReactMagneticBoard_ReactMagneticBoard=function ReactMagneticBoard(_ref){var magnet=_ref.magnet,width=_ref.width,height=_ref.height,className=_ref.className,style=_ref.style,initMagnets=_ref.initMagnets,onMagnetChange=_ref.onMagnetChange,onUndo=_ref.onUndo,onClear=_ref.onClear,_useState=Object(react.useState)(initMagnets),_useState2=Object(slicedToArray.a)(_useState,2),magnets=_useState2[0],setMagnets=_useState2[1],isInitialRender=Object(react.useRef)(!0),_useMagneticCanvas=function useMagneticCanvas(magnets){var canvasRef=Object(react.useRef)(null);return Object(react.useEffect)((function(){var canvas=canvasRef.current,ctx=canvas.getContext("2d");ctx&&draw(ctx,canvas.getBoundingClientRect(),magnets)}),[magnets]),[canvasRef]}(magnets),canvasRef=Object(slicedToArray.a)(_useMagneticCanvas,1)[0];return void 0!==onMagnetChange&&function useOnMagnetChange(isInitialRender,onMagnetChange,magnets){Object(react.useEffect)((function(){isInitialRender||onMagnetChange(magnets)}),[magnets])}(isInitialRender.current,onMagnetChange,magnets),void 0!==onUndo&&function useUndo(isInitialRender,onUndo,setMagnets,magnets){Object(react.useEffect)((function(){isInitialRender||setMagnets(magnets.slice(0,-1))}),[onUndo])}(isInitialRender.current,onUndo,setMagnets,magnets),void 0!==onClear&&function useClear(isInitialRender,onClear,setMagnets){Object(react.useEffect)((function(){isInitialRender||setMagnets([])}),[onClear])}(isInitialRender.current,onClear,setMagnets),Object(react.useEffect)((function(){isInitialRender.current=!1}),[]),react_default.a.createElement("canvas",{ref:canvasRef,className:className,style:style,width:width,height:height,onClick:function addMagnet(event){if(magnet&&magnet.path){var newMagnet=function ReactMagneticBoard_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ReactMagneticBoard_ownKeys(source,!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ReactMagneticBoard_ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},magnet);newMagnet.x=magnet.x?magnet.x:event.clientX,newMagnet.y=magnet.y?magnet.y:event.clientY,setMagnets((function(prevMagnets){return[].concat(Object(toConsumableArray.a)(prevMagnets),[newMagnet])}))}}})};ReactMagneticBoard_ReactMagneticBoard.defaultProps={magnet:void 0,width:500,height:400,initMagnets:[]};var react_magnetic_board_ReactMagneticBoard=ReactMagneticBoard_ReactMagneticBoard;__webpack_exports__.a=react_magnetic_board_ReactMagneticBoard},628:function(module,exports,__webpack_require__){var map={"./ReactMagneticBoard.story.tsx":629};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=628},629:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(68),_Default_Default__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(304),_UndoClear_UndoClear__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(307),_PersistentMagnets_PersistentMagnets__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(305),_MagneticBoard_MagneticBoard__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(306);__webpack_require__(838);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("React Magnetic Board",module).add("Default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Default_Default__WEBPACK_IMPORTED_MODULE_2__.a,null)})).add("Undo/Clear Board",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UndoClear_UndoClear__WEBPACK_IMPORTED_MODULE_3__.a,null)})).add("Persistent Magnets - Local Storage",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PersistentMagnets_PersistentMagnets__WEBPACK_IMPORTED_MODULE_4__.a,null)})).add("Magnetic Board",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MagneticBoard_MagneticBoard__WEBPACK_IMPORTED_MODULE_5__.a,null)}))}.call(this,__webpack_require__(225)(module))},829:function(module,exports,__webpack_require__){var content=__webpack_require__(830);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(136)(content,options);content.locals&&(module.exports=content.locals)},830:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(135)(!1)).push([module.i,".undo-clear .border{border:10px solid #d8dce0;border-radius:10px}.undo-clear .buttons{margin-top:10px}.undo-clear .buttons button{font-size:16px;margin:5px}\n",""])},832:function(module,exports,__webpack_require__){var content=__webpack_require__(833);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(136)(content,options);content.locals&&(module.exports=content.locals)},833:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(135)(!1)).push([module.i,".persistent-magnets .border{border:10px solid #d8dce0;border-radius:10px}.persistent-magnets .buttons{margin-top:10px}.persistent-magnets .buttons button{font-size:16px;margin:5px}\n",""])},834:function(module,exports,__webpack_require__){var content=__webpack_require__(835);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(136)(content,options);content.locals&&(module.exports=content.locals)},835:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(135)(!1);var ___CSS_LOADER_URL___0___=__webpack_require__(836)(__webpack_require__(837));exports.push([module.i,".magnetic-board{display:flex;flex-direction:column;justify-content:space-between;align-items:center}.magnetic-board .border{border:35px solid transparent;border-image:url("+___CSS_LOADER_URL___0___+") 24 30 28 26 fill repeat}.magnetic-board .magnet-selection{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px}.magnetic-board .magnet-selection button{border:none;border-radius:50%;color:white;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:8px;cursor:pointer;transition:0.2s}.magnetic-board .magnet-selection button:hover{transform:translateY(-5px)}\n",""])},837:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/border.169d5045.png"},838:function(module,exports,__webpack_require__){var content=__webpack_require__(839);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(136)(content,options);content.locals&&(module.exports=content.locals)},839:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(135)(!1)).push([module.i,"#root{font-family:Arial, sans-serif}#root .react-tabs .story-tab-demo.react-tabs__tab-panel--selected{margin-top:10vh;display:flex;flex-direction:column;justify-content:center;align-items:center}\n",""])}},[[308,1,2]]]);
//# sourceMappingURL=main.c55e9158e4c837025004.bundle.js.map
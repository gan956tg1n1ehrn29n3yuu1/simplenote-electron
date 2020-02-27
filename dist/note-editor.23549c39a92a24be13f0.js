(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1151:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(1),i=n.n(a),c=n(9),s=n(1145),u=n(87),l=n(135),f=n(19),p=n(80),d=n.n(p),h=function(e){var t=e.openShareDialog;return r.a.createElement("div",{className:"tag-email-tooltip"},r.a.createElement("div",{className:"tag-email-tooltip__arrow"}),r.a.createElement("div",{className:"tag-email-tooltip__inside"},"Collaboration has moved. Press the Share icon in the toolbar to access the ",r.a.createElement("a",{href:"#",onClick:t},"Collaborate screen"),"."))};h.propTypes={openShareDialog:i.a.func.isRequired};var g=Object(c.b)(null,(function(e){return{openShareDialog:function(){return e(f.a.actionCreators.showDialog({dialog:d.a.SHARE}))}}}))(h),m=n(8),v=n.n(m),y=n(3),b=function(e){var t=e.onSelect,n=void 0===t?y.noop:t,o=e.selected,a=e.tag;return r.a.createElement("div",{className:v()("tag-chip",{selected:o}),"data-tag-name":a,onClick:n},a)};b.displayName="TagChip",b.propTypes={onSelect:i.a.func,selected:i.a.bool,tag:i.a.string.isRequired};var S=b;function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?T(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){return function(t){return t.trim().toLowerCase().startsWith(e.trim().toLowerCase())}},N=function(e){function t(){for(var e,n,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return E(this,t),x(T(n=O(this,(e=k(t)).call.apply(e,[this].concat(r)))),"inputField",void 0),x(T(n),"inputObserver",void 0),x(T(n),"state",{isComposing:!1}),x(T(n),"completeSuggestion",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.identity,t=n.props,o=t.onChange,r=t.tagNames,a=t.value;if(a.length){var i=r.find(j(a));i&&o(i,(function(){e(i),n.focusInput()}))}})),x(T(n),"focusInput",(function(){if(n.inputField){var e=n.inputField;e.focus();var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var o=window.getSelection();o.removeAllRanges(),o.addRange(t)}})),x(T(n),"hasFocus",(function(){return document.activeElement===n.inputField})),x(T(n),"interceptKeys",(function(e){var t;return Object(y.invoke)((x(t={},13,n.submitTag),x(t,188,n.submitTag),x(t,9,n.interceptTabPress),x(t,39,n.interceptRightArrow),t),e.keyCode,e)})),x(T(n),"interceptRightArrow",(function(e){var t=n.props.value;window.getSelection().getRangeAt(0).endOffset===t.length&&(n.completeSuggestion(),e.preventDefault(),e.stopPropagation())})),x(T(n),"interceptTabPress",(function(e){n.completeSuggestion(n.submitTag),e.preventDefault(),e.stopPropagation()})),x(T(n),"onInputMutation",(function(e){e.forEach((function(e){var t=Object(y.get)(e,"target.data","");"childList"===e.type&&e.addedNodes.length&&(t=Object(y.get)(e,"target.innerText","")),n.onInput(t)}))})),x(T(n),"onInput",(function(e){n.state.isComposing||n.props.onChange(e.trim(),n.focusInput)})),x(T(n),"onCompositionEnd",(function(e){var t=e.target.textContent;n.setState({isComposing:!1},(function(){return n.onInput(t)}))})),x(T(n),"removePastedFormatting",(function(e){var t;Object(y.get)(e,"clipboardData.getData")?t=e.clipboardData.getData("text/plain"):Object(y.get)(window,"clipboardData.getData")&&(t=window.clipboardData.getData("Text")),n.onInput(t),e.preventDefault(),e.stopPropagation()})),x(T(n),"storeInput",(function(e){n.inputField=e,n.props.inputRef(e),Object(y.invoke)(T(n),"inputField.addEventListener","paste",n.removePastedFormatting,!1)})),x(T(n),"submitTag",(function(e){var t=n.props,o=t.onSelect,r=t.value;r.trim().length&&o(r.trim()),Object(y.invoke)(e,"preventDefault"),Object(y.invoke)(e,"stopPropagation")})),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.props.storeFocusInput(this.focusInput),this.props.storeHasFocus(this.hasFocus),this.inputObserver=new MutationObserver(this.onInputMutation),this.inputObserver.observe(this.inputField,{characterData:!0,childList:!0,subtree:!0})}},{key:"componentWillUnmount",value:function(){Object(y.invoke)(this,"inputField.removeEventListener","paste",this.removePastedFormatting,!1),this.inputObserver.disconnect()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,o=t.tagNames,a=n.length&&o.find(j(n)),i=""===n&&!this.state.isComposing;return r.a.createElement("div",{className:"tag-input",onClick:this.focusInput},i&&r.a.createElement("span",{"aria-hidden":!0,className:"tag-input__placeholder"},"Add a tag…"),r.a.createElement("div",{"aria-label":"Add a tag…",ref:this.storeInput,className:"tag-input__entry",contentEditable:"true",onCompositionStart:function(){return e.setState({isComposing:!0})},onCompositionEnd:this.onCompositionEnd,onKeyDown:this.interceptKeys,spellCheck:!1,suppressContentEditableWarning:!0},n),r.a.createElement("div",{className:"tag-input__suggestion",disabled:!0,type:"text"},a?a.substring(n.length):""))}}])&&C(n.prototype,o),a&&C(n,a),t}(o.Component);x(N,"displayName","TagInput"),x(N,"defaultProps",{inputRef:y.identity,onChange:y.identity,onSelect:y.identity,storeFocusInput:y.noop,storeHasFocus:y.noop});var P=N,_=n(14);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function H(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?A(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e){function t(){for(var e,n,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return I(this,t),K(A(n=H(this,(e=M(t)).call.apply(e,[this].concat(r)))),"focusInput",void 0),K(A(n),"hiddenTag",void 0),K(A(n),"inputHasFocus",void 0),K(A(n),"tagInput",void 0),K(A(n),"state",{selectedTag:"",tagInput:""}),K(A(n),"addTag",(function(e){var t=n.props,o=t.allTags,r=t.tags,a=e.trim().replace(/\s+/g,",").split(",");a.some(u.a)&&n.showEmailTooltip();var i=Object(y.union)(r,Object(y.intersectionBy)(o,a,(function(e){return e.toLocaleLowerCase()})),Object(y.differenceBy)(a,o,(function(e){return e.toLocaleLowerCase()})));n.updateTags(i),n.storeTagInput(""),Object(y.invoke)(A(n),"tagInput.focus"),_.a.tracks.recordEvent("editor_tag_added")})),K(A(n),"hasSelection",(function(){return n.state.selectedTag&&!!n.state.selectedTag.length})),K(A(n),"deleteTag",(function(e){var t=n.props.tags,o=n.state.selectedTag;n.updateTags(Object(y.differenceBy)(t,[e],(function(e){return e.toLocaleLowerCase()}))),o===e&&n.setState({selectedTag:""},(function(){Object(y.invoke)(A(n),"tagInput.focus")})),_.a.tracks.recordEvent("editor_tag_removed")})),K(A(n),"deleteSelection",(function(){n.hasSelection()&&n.deleteTag(n.state.selectedTag)})),K(A(n),"hideEmailTooltip",(function(){return n.setState({showEmailTooltip:!1})})),K(A(n),"hasFocus",(function(){return n.inputHasFocus&&n.inputHasFocus()})),K(A(n),"focusTagField",(function(){return n.focusInput&&n.focusInput()})),K(A(n),"interceptKeys",(function(e){if(8===e.which){if(n.hasSelection()&&n.deleteSelection(),""!==n.state.tagInput)return;return n.selectLastTag(),void e.preventDefault()}if(39===e.which&&n.hasSelection())return n.unselect(e),void n.focusTagField();9===e.which&&n.hasSelection()&&n.unselect(e)})),K(A(n),"updateTags",(function(e){return n.props.updateNoteTags({note:n.props.note,tags:e})})),K(A(n),"selectLastTag",(function(){return n.setState({selectedTag:n.props.tags.slice(-1).shift()})})),K(A(n),"selectTag",(function(e){var t=e.target.dataset.tagName;e.preventDefault(),e.stopPropagation(),n.deleteTag(t)})),K(A(n),"showEmailTooltip",(function(){n.setState({showEmailTooltip:!0}),setTimeout((function(){return n.setState({showEmailTooltip:!1})}),5e3)})),K(A(n),"onKeyDown",(function(e){return n.state.showEmailTooltip&&n.hideEmailTooltip(),n.interceptKeys(e)})),K(A(n),"storeFocusInput",(function(e){return n.focusInput=e})),K(A(n),"storeHasFocus",(function(e){return n.inputHasFocus=e})),K(A(n),"storeHiddenTag",(function(e){return n.hiddenTag=e})),K(A(n),"storeInputRef",(function(e){return n.tagInput=e})),K(A(n),"storeTagInput",(function(e,t){return n.setState({tagInput:e},t)})),K(A(n),"unselect",(function(e){n.state.selectedTag&&n.hiddenTag!==e.relatedTarget&&n.setState({selectedTag:""})})),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.props.storeFocusTagField(this.focusTagField),this.props.storeHasFocus(this.hasFocus),document.addEventListener("click",this.unselect,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.unselect,!0)}},{key:"componentDidUpdate",value:function(){this.hasSelection()&&this.hiddenTag.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.allTags,o=t.tags,a=this.state,i=a.selectedTag,c=a.showEmailTooltip,l=a.tagInput;return r.a.createElement("div",{className:"tag-field"},r.a.createElement("div",{className:v()("tag-editor",{"has-selection":this.hasSelection()}),tabIndex:"-1",onKeyDown:this.onKeyDown},r.a.createElement("input",{className:"hidden-tag",tabIndex:"-1",ref:this.storeHiddenTag}),o.filter(Object(y.negate)(u.a)).map((function(t){return r.a.createElement(S,{key:t,tag:t,selected:t===i,onSelect:e.selectTag})})),r.a.createElement(P,{allTags:n,inputRef:this.storeInputRef,value:l,onChange:this.storeTagInput,onSelect:this.addTag,storeFocusInput:this.storeFocusInput,storeHasFocus:this.storeHasFocus,tagNames:Object(y.differenceBy)(n,o,(function(e){return e.toLocaleLowerCase()}))}),r.a.createElement(s.a,{container:this,onHide:this.hideEmailTooltip,placement:"top",rootClose:!0,shouldUpdatePosition:!0,show:c,target:this.tagInput},(function(){return r.a.createElement(g,{note:e.props.note})}))))}}])&&D(n.prototype,o),a&&D(n,a),t}(o.Component);K(q,"displayName","TagField"),K(q,"defaultProps",{storeFocusTagField:y.noop,storeHasFocus:y.noop,tags:[]});var B=Object(c.b)(null,{updateNoteTags:l.a})(q),W=n(56),U=n(618),z=n(912),Q=n.n(z);function X(e){return e.getCurrentContent().getPlainText("\n")}function $(e){var t=e.getSelection().focusKey;return e.getCurrentContent().getBlockForKey(t)}function V(e){var t=e.getCurrentContent(),n=e.getSelection(),o=n.getStartKey(),r=e.getCurrentContent().getBlockForKey(o),a=n.getStartOffset(),i=n.getEndKey(),c=n.getEndOffset();if(o===i)return r.getText().slice(a,c);var s="";s+=r.getText().slice(a)+"\n";for(var u=e.getCurrentContent().getBlockForKey(i),l=r;(l=t.getBlockAfter(l.key))&&l.key!==i;)s+=l.getText()+"\n";return s+=u.getText().slice(0,c)}function J(e,t){for(var n,o,r=e.getSelection().anchorKey,a=e.getSelection().focusKey,i=e.getCurrentContent().getBlocksAsArray(),c=0;c<i.length;c++)i[c].getKey()===r&&(n=c),i[c].getKey()===a&&(o=c);var s=t.getCurrentContent().getBlocksAsArray(),u=e.getSelection(),l=s.length-1,f=Math.min(n,l),p=Math.min(o,l),d=Math.min(u.getAnchorOffset(),s[f].getLength()),h=Math.min(u.getFocusOffset(),s[p].getLength());return t.getSelection().merge({anchorKey:s[f].getKey(),anchorOffset:d,focusKey:s[p].getKey(),focusOffset:h,isBackward:u.getIsBackward(),hasFocus:u.getHasFocus()})}var G=function(e){return Object(y.includes)(["-","*","+","- [ ]","- [x]","•"],e.trim())};function Y(e){var t=e.getSelection(),n=t.getStartOffset(),o=$(e).getText(),r=G(o)?0:n,a=U.EditorState.push(e,U.Modifier.replaceText(e.getCurrentContent(),t.isCollapsed()?t.merge({anchorOffset:r,focusOffset:r}):t,"\t"),"insert-characters");return U.EditorState.forceSelection(a,a.getSelection().merge({anchorOffset:n+1,focusOffset:n+1}))}function Z(e){var t=e.getSelection(),n=t.getStartOffset(),o=$(e).getText(),r=G(o),a=r?0:n-1,i=r?1:n;if("\t"!==o.slice(a,i))return e;var c=U.EditorState.push(e,U.Modifier.removeRange(e.getCurrentContent(),t.merge({anchorOffset:a,focusOffset:i})),"remove-range");return U.EditorState.forceSelection(c,t.merge({anchorOffset:n-1,focusOffset:n-1}))}function ee(e){var t=U.EditorState.push(e,U.Modifier.removeRange(e.getCurrentContent(),e.getSelection().merge({anchorOffset:0,focusOffset:$(e).getLength()})),"remove-range");return U.EditorState.forceSelection(t,t.getCurrentContent().getSelectionAfter())}function te(e,t){var n=U.EditorState.push(e,U.Modifier.splitBlock(e.getCurrentContent(),e.getSelection()),"split-block"),o=U.EditorState.push(n,U.Modifier.insertText(n.getCurrentContent(),n.getCurrentContent().getSelectionAfter(),t),"insert-characters");return U.EditorState.forceSelection(o,o.getCurrentContent().getSelectionAfter())}var ne=n(130),oe=n(734),re=n.n(oe),ae=function(e){var t=e.children,n=e.className;return r.a.createElement("span",{className:n},t)};ae.propTypes={children:i.a.node.isRequired,className:i.a.string.isRequired};var ie=ae;function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var se=function(e){return function(t,n){var o=t.getText();e&&o&&function(e,t){for(var n,o=[];null!==(n=t.exec(e));)o.push([n.index,t.lastIndex]);return o}(o,e).forEach(function(e){return function(t){var n=ce(t,2),o=n[0],r=n[1];return e(o,r,{className:"search-match"})}}(n))}},ue=function(e){return e?new re.a(se(e),ie):null},le=n(676),fe=n(242),pe=n(913),de=n.n(pe),he=n(914),ge=n.n(he),me={type:"output",regex:'<input type="checkbox" disabled',replace:'<input type="checkbox" '},ve=function(e){return n.e(8).then(n.t.bind(null,1149,7)).then((function(t){var n=t.default;n.extension("enableCheckboxes",me);var o=new n.Converter({extensions:["enableCheckboxes"]});o.setFlavor("github"),o.setOption("simpleLineBreaks",!1),o.setOption("ghMentions",!1),o.setOption("smoothLivePreview",!0);var r=e.replace(/([ \t\u2000-\u200a]*)\u2022(\s)/gm,"$1-$2");return function(e){for(var t=(new DOMParser).parseFromString(e,"text/html"),n=t.createTreeWalker(t.body,NodeFilter.SHOW_ALL,null,!1),o=[],r=[],a=function(){var e=n.currentNode;if(function(e){switch(e.nodeName.toLowerCase()){case"head":case"html":case"iframe":case"link":case"meta":case"object":case"script":case"style":return!0;default:return!1}}(e))return r.push(e),"continue";if(!function(e){var t=e.nodeName.toLowerCase();if("input"===t)return"checkbox"===e.getAttribute("type");switch(t){case"#text":case"a":case"article":case"b":case"br":case"blockquote":case"cite":case"code":case"dd":case"del":case"div":case"dt":case"em":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"hr":case"i":case"img":case"ins":case"kbd":case"li":case"ol":case"p":case"pre":case"s":case"span":case"strong":case"sub":case"sup":case"table":case"tbody":case"td":case"th":case"thead":case"tr":case"tt":case"ul":return!0;default:return!1}}(e))return o.push(e),"continue";var t=e.nodeName.toLowerCase();Object(y.filter)(e.attributes,(function(e){var n=e.name,o=e.value;return!function(e,t,n){switch(e){case"a":switch(t){case"href":return!n.toLowerCase().trim().startsWith("javascript");case"alt":case"rel":case"title":return!0;default:return!1}case"img":switch(t){case"alt":case"src":case"title":case"width":return!0;default:return!1}case"input":switch(t){case"disabled":case"checked":case"type":return!0;default:return!1}case"li":switch(t){case"class":switch(n){case"task-list-item":return!0;default:return!1}default:return!1}case"ol":switch(t){case"start":return!0;default:return!1}default:return!1}}(t,n,o)&&(("href"!==n&&"src"!==n||!ge.a.isWebUri(o))&&("href"!==n||!o.startsWith("mailto:")||!de.a.validate(o.slice(7))))})).forEach((function(t){var n=t.name;return e.removeAttribute(n)}));var a="a"===t&&e.getAttribute("href");"a"!==t||"string"!=typeof a||a.startsWith("mailto:")||(e.setAttribute("target","_blank"),e.setAttribute("rel","external noopener noreferrer")),"li"===t&&"task-list-item"===e.getAttribute("class")&&e.setAttribute("style","list-style: none;")};n.nextNode();)a();return r.forEach((function(e){try{var t;null==e||null===(t=e.parentNode)||void 0===t||t.removeChild(e)}catch(e){}})),o.forEach((function(e){var t,n=e.parentNode;try{for(;t=e.firstChild;)null==n||n.insertBefore(t,e);null==n||n.removeChild(e)}catch(e){}})),t.body.innerHTML}(o.makeHtml(r))}))},ye=n(594),be=function(e){var t=e.text,n=e.taskNodeIndex,o=function(e){var t={text:"",ids:[]};return t.text=e.replace(ye.c,(function(e){var n=Object(fe.a)(8);return t.ids.push(n),e.replace(ye.c,"$1"+"- [ ] ".concat(n))})),t}(t),r=o.text,a=o.ids;return ve(r).then((function(e){var t=function(e){var t=e.html,n=e.taskNodeIndex,o=(new DOMParser).parseFromString(t,"text/html").querySelectorAll(ye.a.taskNode);return Array.from(o)[n].textContent.trim()}({html:e,taskNodeIndex:n});return a.indexOf(t)}))},Se=function(e){var t=/- \[[xX]\]/;return t.test(e)?e.replace(t,"- [ ]"):e.replace(/- \[\s?\]/,"- [x]")},we=function(e){var t=e.text,n=e.index,o=0;return t.replace(ye.c,(function(e){return o++===n?Se(e):e}))},Ee=function(e){var t=e.taskNode,n=e.text,o=t.ownerDocument.querySelectorAll("".concat(ye.a.markdownRoot," ").concat(ye.a.taskNode)),r=n.match(ye.c).length!==o.length,a=Array.from(o).indexOf(t);return r?be({text:n,taskNodeIndex:a}).then((function(e){return we({text:n,index:e})})):Promise.resolve(we({text:n,index:a}))},Ce=function(e){return new re.a((function(t,n){for(var o,r=t.getText(),a=function(){var r=o[1],a=o[2],i=o.index+Object(y.get)(r,"length",0),c=i+a.length,s=/[xX]/.test(a),u=U.SelectionState.createEmpty(t.getKey()).merge({anchorOffset:i,focusOffset:c}),l=Se(a);n(i,c,{checked:s,onChange:function(){return e(u,l)}})};null!==(o=ye.c.exec(r));)a()}),le.a)},Oe=function(e,t){return Object(y.get)(e.getCurrentContent().getBlockForKey(t),"text",null)},ke=function(e,t){var n=$(e),o=n.text,r=Oe(t,n.getKey());if(!(o!==r)||""===o)return!1;var a=Object(y.includes)(["backspace-character","remove-range"],e.getLastChangeType()),i=ye.c.test(r)&&!o.match(ye.c);return a&&i},Te=function(e,t){var n=$(e),o=n.text,r=Oe(t,n.getKey())[e.getSelection().focusOffset];if(!/[ \]]/.test(r))return U.Modifier.insertText(e.getCurrentContent(),e.getSelection()," ");var a=Object(y.get)(o.match("-"),"index",0);return U.Modifier.removeRange(e.getCurrentContent(),e.getSelection().merge({anchorOffset:a}),"backward")};function Fe(e){for(var t=e.getCurrentContent(),n=e.getSelection(),o=n.getStartKey(),r=n.getEndKey(),a=t;o&&(a=xe(o,a),o!==r);)o=t.getKeyAfter(o);var i=U.EditorState.push(e,a,"insert-characters"),c=function(e,t,n){var o=Object(y.get)(e.focusKey,"key",e.focusKey),r=function(e){return e.getBlockForKey(o).getText().length},a=r(n)-r(t),i=e.focusOffset+a;return U.SelectionState.createEmpty(o).merge({anchorOffset:i,focusOffset:i})}(n,t,a);return U.EditorState.forceSelection(i,c)}function xe(e,t){var n=t.getBlockForKey(e).getText();ye.c.lastIndex=0;var o,r=ye.c.exec(n);if(r){var a=r[1],i=r[2],c=r[3].match(/^\s*/)[0].length,s=a.length,u=U.SelectionState.createEmpty(e).merge({anchorOffset:s,focusOffset:s+i.length+c});o=U.Modifier.removeRange(t,u,"backward")}else{var l=n.match(/^\s*/)[0].length,f=U.SelectionState.createEmpty(e).merge({anchorOffset:l,focusOffset:l});o=U.Modifier.insertText(t,f,"- [ ] ")}return o}var je=n(131);function Ne(e){return(Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Re(e,t){return!t||"object"!==Ne(t)&&"function"!=typeof t?De(e):t}function Ie(e){return(Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function De(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function He(e,t){return(He=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ae=function(e){function t(){var e,n;Pe(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return Me(De(n=Re(this,(e=Ie(t)).call.apply(e,[this].concat(r)))),"ipc",Object(je.a)()),Me(De(n),"replaceRangeWithText",(function(e,t){var o=n.state.editorState,r=U.Modifier.replaceText(o.getCurrentContent(),e,t);n.handleEditorStateChange(U.EditorState.push(o,r,"replace-text"))})),Me(De(n),"generateDecorators",(function(e){return new Q.a(Object(y.compact)([Object(ne.b)(e)&&ue(Object(ne.c)(e)),Ce(n.replaceRangeWithText)]))})),Me(De(n),"createNewEditorState",(function(e,t){var o=U.EditorState.createWithContent(U.ContentState.createFromText(e,"\n"),n.generateDecorators(t));return""===e&&""===t?U.EditorState.moveFocusToEnd(o):o})),Me(De(n),"state",{editorState:n.createNewEditorState(n.props.content.text,n.props.searchQuery)}),Me(De(n),"editorKey",0),Me(De(n),"handleEditorStateChange",(function(e){var t=n.state.editorState;if(e!==t){var o=e;if(ke(e,t)){var r=Te(e,t);o=U.EditorState.push(e,r,"remove-range")}var a=X(o),i=X(t),c=a!==i?function(){return n.props.onChangeContent(a)}:y.noop;n.setState({editorState:o},c)}})),Me(De(n),"reflectChangesFromReceivedContent",(function(e,t){var o=U.EditorState.push(e,U.ContentState.createFromText(t,"\n"),"replace-text");if(e.getSelection().getHasFocus()){var r=J(e,o);o=U.EditorState.forceSelection(o,r)}n.setState({editorState:o})})),Me(De(n),"saveEditorRef",(function(e){n.editor=e})),Me(De(n),"focus",(function(){Object(y.invoke)(De(n),"editor.focus")})),Me(De(n),"hasFocus",(function(){return document.activeElement===Object(y.get)(n.editor,"editor")})),Me(De(n),"onTab",(function(e){var t=n.state.editorState;e.preventDefault(),!t.getSelection().isCollapsed()&&e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||n.handleEditorStateChange(e.shiftKey?Z(t):Y(t))})),Me(De(n),"handleReturn",(function(){var e=n.state.editorState,t=$(e).getText(),o=t.search(/\S/),r=function(t){var n=e.getSelection(),o=n.anchorOffset,r=n.focusOffset;return o===t&&r===t};if(r(0)||r(o))return"not-handled";if(G(t))return n.handleEditorStateChange(ee(e)),"handled";var a=t.match(/^[ \t\u2000-\u200a]*[-*+\u2022]\s/);if(t.match(ye.c)){var i=t.replace(ye.c,"$1- [ ] ");return n.handleEditorStateChange(te(e,i)),"handled"}return a?(n.handleEditorStateChange(te(e,a[0])),"handled"):"not-handled"})),Me(De(n),"onAppCommand",(function(e,t){"insertChecklist"===Object(y.get)(t,"action")&&(n.handleEditorStateChange(Fe(n.state.editorState)),_.a.tracks.recordEvent("editor_checklist_inserted"))})),Me(De(n),"copyPlainText",(function(e){var t=V(n.state.editorState);t&&(e.clipboardData.setData("text/plain",t),e.preventDefault())})),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&He(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.props.storeFocusEditor(this.focus),this.props.storeHasFocus(this.hasFocus),this.ipc.on("appCommand",this.onAppCommand),this.editor.blur()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.content,o=t.searchQuery,r=t.noteId,a=t.spellCheckEnabled,i=this.state.editorState;a!==e.spellCheckEnabled&&(this.editorKey+=1,this.forceUpdate()),r===e.noteId&&n.version===e.content.version?(o!==e.searchQuery&&this.setState({editorState:U.EditorState.set(i,{decorator:this.generateDecorators(o)})}),n.text!==e.content.text&&n.hasRemoteUpdate&&this.reflectChangesFromReceivedContent(i,n.text)):this.setState({editorState:this.createNewEditorState(n.text,o)},(function(){return!1}))}},{key:"componentWillUnmount",value:function(){this.ipc.removeListener("appCommand",this.onAppCommand)}},{key:"render",value:function(){return r.a.createElement("div",{onCopy:this.copyPlainText,onCut:this.copyPlainText,style:{height:"100%"}},r.a.createElement(U.Editor,{key:this.editorKey,ref:this.saveEditorRef,spellCheck:this.props.spellCheckEnabled,stripPastedStyles:!0,onChange:this.handleEditorStateChange,editorState:this.state.editorState,onTab:this.onTab,handleReturn:this.handleReturn}))}}])&&_e(n.prototype,o),a&&_e(n,a),t}(o.Component);Me(Ae,"propTypes",{content:i.a.shape({text:i.a.string.isRequired,hasRemoteUpdate:i.a.bool.isRequired,version:i.a.number}),noteId:i.a.string,onChangeContent:i.a.func.isRequired,spellCheckEnabled:i.a.bool.isRequired,storeFocusEditor:i.a.func,storeHasFocus:i.a.func}),Me(Ae,"defaultProps",{storeFocusEditor:y.noop,storeHasFocus:y.noop});var Le=Object(c.b)((function(e){return{searchQuery:e.ui.searchQuery}}))(Ae),Ke=n(240),qe=function(e,t){ve(t).then((function(t){return e.innerHTML=t,e.querySelectorAll("pre code")})).then((function(e){if(e.length)return n.e(4).then(n.t.bind(null,1150,7)).then((function(t){var n=t.default;e.forEach(n.highlightBlock)})).catch()}))};function Be(e){return(Be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function We(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ue(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ze(e,t){return!t||"object"!==Be(t)&&"function"!=typeof t?Xe(e):t}function Qe(e){return(Qe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Xe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $e(e,t){return($e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Je=function(e){function t(){var e,n;We(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return Ve(Xe(n=ze(this,(e=Qe(t)).call.apply(e,[this].concat(r)))),"focusEditor",(function(){return n.focusContentEditor&&n.focusContentEditor()})),Ve(Xe(n),"isValidNote",(function(e){return e&&e.id})),Ve(Xe(n),"copyRenderedNote",(function(e){var t=n.props,o=t.previewingMarkdown,r=t.showNoteInfo,a=t.dialogs;if(!o)return!0;if(r||a.length>0)return!0;if(!document.getSelection().isCollapsed)return!0;var i=document.createDocumentFragment(),c=document.createElement("div");qe(c,n.props.note.data.content),i.appendChild(c),e.clipboardData.setData("text/plain",c.innerHTML),e.preventDefault()})),Ve(Xe(n),"hasFocus",(function(){return n.editorHasFocus&&n.editorHasFocus()})),Ve(Xe(n),"onPreviewClick",(function(e){for(var t=n.props,o=t.note,r=t.onChangeContent,a=t.syncNote,i=e.target;null!==i;i=i.parentNode){if("A"===i.tagName){e.preventDefault(),Object(W.a)(i.href);break}if("task-list-item"===i.className){e.preventDefault(),Ee({taskNode:i,text:o.data.content}).then((function(e){r(o,e),a(o.id)}));break}}})),Ve(Xe(n),"saveNote",(function(e){var t=n.props.note;n.isValidNote(t)&&(n.props.onChangeContent(t,e),n.queueNoteSync(),_.a.tracks.recordEvent("editor_note_edited"))})),Ve(Xe(n),"syncNote",(function(){var e=n.props.note;n.isValidNote(e)&&n.props.syncNote(e.id)})),Ve(Xe(n),"storeEditorHasFocus",(function(e){return n.editorHasFocus=e})),Ve(Xe(n),"storeFocusContentEditor",(function(e){return n.focusContentEditor=e})),Ve(Xe(n),"storePreview",(function(e){return n.previewNode=e})),Ve(Xe(n),"updateMarkdown",(function(){n.previewNode&&qe(n.previewNode,n.props.note.data.content)})),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$e(e,t)}(t,e),n=t,(o=[{key:"componentWillMount",value:function(){this.queueNoteSync=Object(y.debounce)(this.syncNote,2e3),document.addEventListener("copy",this.copyRenderedNote,!1)}},{key:"componentDidMount",value:function(){var e=this.props.previewingMarkdown;this.props.storeFocusEditor(this.focusEditor),this.props.storeHasFocus(this.hasFocus),window.addEventListener("beforeunload",this.queueNoteSync.flush),e&&this.updateMarkdown()}},{key:"componentWillReceiveProps",value:function(e){var t=Object(y.get)(this.props,["note","id"],!1);!1!==t&&Object(y.get)(e,["note","id"])!==t&&this.queueNoteSync.flush()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.note,o=t.previewingMarkdown,r=Object(y.get)(e,"note.data.content",""),a=Object(y.get)(this.props,"note.data.content","");(o&&(e.note!==n||r!==a)||!e.previewingMarkdown&&this.props.previewingMarkdown)&&this.updateMarkdown()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.queueNoteSync.flush),document.removeEventListener("copy",this.copyRenderedNote,!1)}},{key:"render",value:function(){var e=this.props,t=e.note,n=e.fontSize,o=e.previewingMarkdown,a=e.spellCheckEnabled,i={text:Object(y.get)(t,"data.content",""),hasRemoteUpdate:Object(y.get)(t,"hasRemoteUpdate",!1),version:Object(y.get)(t,"version",void 0)},c={fontSize:"".concat(n,"px")};return r.a.createElement("div",{className:"note-detail-wrapper"},t?r.a.createElement("div",{className:"note-detail"},o&&r.a.createElement("div",{ref:this.storePreview,className:"note-detail-markdown theme-color-bg theme-color-fg","data-markdown-root":!0,onClick:this.onPreviewClick,style:c}),!o&&r.a.createElement("div",{className:"note-detail-textarea theme-color-bg theme-color-fg",style:c},r.a.createElement(Le,{spellCheckEnabled:a,storeFocusEditor:this.storeFocusContentEditor,storeHasFocus:this.storeEditorHasFocus,noteId:Object(y.get)(t,"id",null),content:i,onChangeContent:this.saveNote}))):r.a.createElement("div",{className:"note-detail-placeholder"},r.a.createElement(Ke.a,null)))}}])&&Ue(n.prototype,o),a&&Ue(n,a),t}(o.Component);Ve(Je,"displayName","NoteDetail"),Ve(Je,"propTypes",{dialogs:i.a.array.isRequired,fontSize:i.a.number,onChangeContent:i.a.func.isRequired,syncNote:i.a.func.isRequired,note:i.a.object,noteBucket:i.a.object.isRequired,previewingMarkdown:i.a.bool,spellCheckEnabled:i.a.bool.isRequired,storeFocusEditor:i.a.func,storeHasFocus:i.a.func}),Ve(Je,"defaultProps",{storeFocusEditor:y.noop,storeHasFocus:y.noop});var Ge=Object(c.b)((function(e){var t=e.appState,n=e.ui,o=e.settings;return{dialogs:t.dialogs,note:n.selectedRevision||n.note,showNoteInfo:n.showNoteInfo,spellCheckEnabled:o.spellCheckEnabled}}))(Je),Ye=n(15);function Ze(e){return(Ze="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function et(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tt(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function nt(e,t){return!t||"object"!==Ze(t)&&"function"!=typeof t?rt(e):t}function ot(e){return(ot=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function rt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function at(e,t){return(at=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function it(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"NoteEditor",(function(){return ct}));var ct=function(e){function t(){var e,n;et(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return it(rt(n=nt(this,(e=ot(t)).call.apply(e,[this].concat(r)))),"markdownEnabled",(function(){var e=n.props.revision||n.props.note;return e&&e.data&&e.data.systemTags&&-1!==e.data.systemTags.indexOf("markdown")})),it(rt(n),"handleShortcut",(function(e){var t=e.ctrlKey,o=e.key,r=e.metaKey,a=e.shiftKey,i=t||r;if(i&&a&&"p"===o.toLowerCase()&&n.markdownEnabled)return n.props.toggleEditMode(),e.stopPropagation(),e.preventDefault(),!1;if(n.props.isSmallScreen&&i&&a&&"n"===o.toLowerCase())return n.props.closeNote(),e.stopPropagation(),e.preventDefault(),!1;if(i&&"t"===o.toLowerCase()&&n.props.isEditorActive){if(!n.editFieldHasFocus())return n.focusNoteEditor&&n.focusNoteEditor(),e.stopPropagation(),e.preventDefault(),!1;if(!n.tagFieldHasFocus())return n.focusTagField&&n.focusTagField(),e.stopPropagation(),e.preventDefault(),!1}return!0})),it(rt(n),"editFieldHasFocus",(function(){return n.editorHasFocus&&n.editorHasFocus()})),it(rt(n),"storeEditorHasFocus",(function(e){return n.editorHasFocus=e})),it(rt(n),"storeFocusEditor",(function(e){return n.focusNoteEditor=e})),it(rt(n),"storeFocusTagField",(function(e){return n.focusTagField=e})),it(rt(n),"storeTagFieldHasFocus",(function(e){return n.tagFieldHasFocus=e})),it(rt(n),"tagFieldHasFocus",(function(){return n.tagFieldHasFocus&&n.tagFieldHasFocus()})),it(rt(n),"toggleShortcuts",(function(e){e?window.addEventListener("keydown",n.handleShortcut,!0):window.removeEventListener("keydown",n.handleShortcut,!0)})),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&at(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.toggleShortcuts(!0)}},{key:"componentWillUnmount",value:function(){this.toggleShortcuts(!1)}},{key:"render",value:function(){var e=this.props,t=e.editMode,n=e.note,o=e.noteBucket,a=e.fontSize,i=this.props.revision||n,c=i&&i.data&&i.data.tags||[],s=!(!n||!n.data.deleted);return r.a.createElement("div",{className:"note-editor theme-color-bg theme-color-fg"},r.a.createElement(Ge,{storeFocusEditor:this.storeFocusEditor,storeHasFocus:this.storeEditorHasFocus,noteBucket:o,previewingMarkdown:this.markdownEnabled()&&!t,onChangeContent:this.props.onUpdateContent,syncNote:this.props.syncNote,fontSize:a}),n&&!s&&r.a.createElement(B,{storeFocusTagField:this.storeFocusTagField,storeHasFocus:this.storeTagFieldHasFocus,allTags:this.props.allTags.map(Object(y.property)("data.name")),note:this.props.note,tags:c}))}}])&&tt(n.prototype,o),a&&tt(n,a),t}(o.Component);it(ct,"displayName","NoteEditor"),it(ct,"propTypes",{allTags:i.a.array.isRequired,isEditorActive:i.a.bool.isRequired,isSmallScreen:i.a.bool.isRequired,noteBucket:i.a.object.isRequired,fontSize:i.a.number,onUpdateContent:i.a.func.isRequired,revision:i.a.object,syncNote:i.a.func.isRequired}),it(ct,"defaultProps",{note:{data:{tags:[]}}});t.default=Object(c.b)((function(e){var t=e.appState,n=e.settings,o=e.ui,r=o.note,a=o.editMode,i=o.selectedRevision;return{allTags:t.tags,fontSize:n.fontSize,editMode:a,isEditorActive:!t.showNavigation,note:r,revision:i}}),(function(e){return{closeNote:function(){return e(Object(Ye.closeNote)())},toggleEditMode:function(){return e(Object(Ye.toggleEditMode)())}}}))(ct)},594:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a}));var o={taskNode:".task-list-item",markdownRoot:"[data-markdown-root]"},r=/^(\s*)(-[ \t]+\[[xX\s]?\])/gm,a=/^(\s*)(-[ \t]+\[[xX\s]?\])(.+)/gm},676:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(1),i=n.n(a);function c(){return r.a.createElement("svg",{className:"icon-checkmark",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M11,17.768l-4.884-4.884l1.768-1.768L11,14.232l8.658-8.658C17.823,3.391,15.075,2,12,2C6.477,2,2,6.477,2,12 s4.477,10,10,10s10-4.477,10-10c0-1.528-0.353-2.971-0.966-4.266L11,17.768z"}))}function s(){return r.a.createElement("svg",{className:"icon-circle",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("g",{transform:"translate(2 2)"},r.a.createElement("path",{d:"m10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.5c-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5 8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5z"})))}var u=function(e){var t=e.checked,n=void 0!==t&&t,o=e.onChange;return r.a.createElement("span",{className:"checkbox",role:"checkbox","aria-checked":n,onClick:o,tabIndex:"0"},r.a.createElement("span",{className:"checkbox__icon","aria-hidden":"true"},n?r.a.createElement(c,null):r.a.createElement(s,null)))};u.propTypes={checked:i.a.bool,onChange:i.a.func};t.a=u}}]);
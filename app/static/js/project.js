(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @template F
 */
var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new _foundation2.default());
    }

    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{}
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.


    /**
     * @return {!F} foundation
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

exports.default = MDCComponent;

},{"./foundation":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

exports.default = MDCFoundation;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  LIST_ITEM_CLASS: 'mdc-list-item'
};

/** @enum {string} */
var strings = {
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_VERTICAL: 'vertical',
  FOCUSABLE_CHILD_ELEMENTS: 'button:not(:disabled), a',
  ITEMS_SELECTOR: '.mdc-list-item'
};

exports.strings = strings;
exports.cssClasses = cssClasses;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCListFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = require('@material/base/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

var MDCListFoundation = function (_MDCFoundation) {
  _inherits(MDCListFoundation, _MDCFoundation);

  _createClass(MDCListFoundation, null, [{
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** {MDCListAdapter */{
          getListItemCount: function getListItemCount() {},
          getFocusedElementIndex: function getFocusedElementIndex() {},
          getListItemIndex: function getListItemIndex() {},
          focusItemAtIndex: function focusItemAtIndex() {},
          setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {}
        }
      );
    }
  }]);

  function MDCListFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /** @type {!MDCListFoundation} */{};

    _classCallCheck(this, MDCListFoundation);

    /** {boolean} */
    var _this = _possibleConstructorReturn(this, (MDCListFoundation.__proto__ || Object.getPrototypeOf(MDCListFoundation)).call(this, Object.assign(MDCListFoundation.defaultAdapter, adapter)));

    _this.wrapFocus_ = false;
    /** {boolean} */
    _this.isVertical_ = true;
    return _this;
  }

  /**
   * Sets the private wrapFocus_ variable.
   * @param {boolean} value
   */


  _createClass(MDCListFoundation, [{
    key: 'setWrapFocus',
    value: function setWrapFocus(value) {
      this.wrapFocus_ = value;
    }

    /**
     * Sets the isVertical_ private variable.
     * @param {boolean} value
     */

  }, {
    key: 'setVerticalOrientation',
    value: function setVerticalOrientation(value) {
      this.isVertical_ = value;
    }

    /**
     * Focus in handler for the list items.
     * @param evt
     */

  }, {
    key: 'handleFocusIn',
    value: function handleFocusIn(evt) {
      var listItem = this.getListItem_(evt.target);
      if (!listItem) return;

      this.adapter_.setTabIndexForListItemChildren(this.adapter_.getListItemIndex(listItem), 0);
    }

    /**
     * Focus out handler for the list items.
     * @param {Event} evt
     */

  }, {
    key: 'handleFocusOut',
    value: function handleFocusOut(evt) {
      var listItem = this.getListItem_(evt.target);
      if (!listItem) return;

      this.adapter_.setTabIndexForListItemChildren(this.adapter_.getListItemIndex(listItem), -1);
    }

    /**
     * Key handler for the list.
     * @param {Event} evt
     */

  }, {
    key: 'handleKeydown',
    value: function handleKeydown(evt) {
      var arrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
      var arrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
      var arrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
      var arrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
      var isHome = evt.key === 'Home' || evt.keyCode === 36;
      var isEnd = evt.key === 'End' || evt.keyCode === 35;
      var currentIndex = this.adapter_.getFocusedElementIndex();

      if (currentIndex === -1) {
        currentIndex = this.adapter_.getListItemIndex(this.getListItem_(evt.target));

        if (currentIndex < 0) {
          // If this event doesn't have a mdc-list-item ancestor from the
          // current list (not from a sublist), return early.
          return;
        }
      }

      if (this.isVertical_ && arrowDown || !this.isVertical_ && arrowRight) {
        this.preventDefaultEvent_(evt);
        this.focusNextElement(currentIndex);
      } else if (this.isVertical_ && arrowUp || !this.isVertical_ && arrowLeft) {
        this.preventDefaultEvent_(evt);
        this.focusPrevElement(currentIndex);
      } else if (isHome) {
        this.preventDefaultEvent_(evt);
        this.focusFirstElement();
      } else if (isEnd) {
        this.preventDefaultEvent_(evt);
        this.focusLastElement();
      }
    }

    /**
     * Ensures that preventDefault is only called if the containing element doesn't
     * consume the event, and it will cause an unintended scroll.
     * @param {Event} evt
     * @private
     */

  }, {
    key: 'preventDefaultEvent_',
    value: function preventDefaultEvent_(evt) {
      var tagName = ('' + evt.target.tagName).toLowerCase();
      if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
        evt.preventDefault();
      }
    }

    /**
     * Focuses the next element on the list.
     * @param {Number} index
     */

  }, {
    key: 'focusNextElement',
    value: function focusNextElement(index) {
      var count = this.adapter_.getListItemCount();
      var nextIndex = index + 1;
      if (nextIndex >= count) {
        if (this.wrapFocus_) {
          nextIndex = 0;
        } else {
          // Return early because last item is already focused.
          return;
        }
      }
      this.adapter_.focusItemAtIndex(nextIndex);
    }

    /**
     * Focuses the previous element on the list.
     * @param {Number} index
     */

  }, {
    key: 'focusPrevElement',
    value: function focusPrevElement(index) {
      var prevIndex = index - 1;
      if (prevIndex < 0) {
        if (this.wrapFocus_) {
          prevIndex = this.adapter_.getListItemCount() - 1;
        } else {
          // Return early because first item is already focused.
          return;
        }
      }
      this.adapter_.focusItemAtIndex(prevIndex);
    }
  }, {
    key: 'focusFirstElement',
    value: function focusFirstElement() {
      if (this.adapter_.getListItemCount() > 0) {
        this.adapter_.focusItemAtIndex(0);
      }
    }
  }, {
    key: 'focusLastElement',
    value: function focusLastElement() {
      var lastIndex = this.adapter_.getListItemCount() - 1;
      if (lastIndex >= 0) {
        this.adapter_.focusItemAtIndex(lastIndex);
      }
    }

    /**
     * Utility method to find the first ancestor with the mdc-list-item class.
     * @param {EventTarget} target
     * @return {?Element}
     * @private
     */

  }, {
    key: 'getListItem_',
    value: function getListItem_(target) {
      while (!target.classList.contains(_constants.cssClasses.LIST_ITEM_CLASS)) {
        if (!target.parentElement) return null;
        target = target.parentElement;
      }
      return target;
    }
  }]);

  return MDCListFoundation;
}(_foundation2.default);

exports.MDCListFoundation = MDCListFoundation;

},{"./constants":3,"@material/base/foundation":2}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('@material/base/component');

var _component2 = _interopRequireDefault(_component);

var _foundation = require('./foundation');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCListFoundation>
 */
var MDCList = exports.MDCList = function (_MDCComponent) {
  _inherits(MDCList, _MDCComponent);

  /** @param {...?} args */
  function MDCList() {
    var _ref;

    _classCallCheck(this, MDCList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Function} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCList.__proto__ || Object.getPrototypeOf(MDCList)).call.apply(_ref, [this].concat(args)));

    _this.handleKeydown_;
    /** @private {!Function} */
    _this.focusInEventListener_;
    /** @private {!Function} */
    _this.focusOutEventListener_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCList}
   */


  _createClass(MDCList, [{
    key: 'destroy',
    value: function destroy() {
      this.root_.removeEventListener('keydown', this.handleKeydown_);
      this.root_.removeEventListener('focusin', this.focusInEventListener_);
      this.root_.removeEventListener('focusout', this.focusOutEventListener_);
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.handleKeydown_ = this.foundation_.handleKeydown.bind(this.foundation_);
      this.focusInEventListener_ = this.foundation_.handleFocusIn.bind(this.foundation_);
      this.focusOutEventListener_ = this.foundation_.handleFocusOut.bind(this.foundation_);
      this.root_.addEventListener('keydown', this.handleKeydown_);
      this.root_.addEventListener('focusin', this.focusInEventListener_);
      this.root_.addEventListener('focusout', this.focusOutEventListener_);
      this.layout();
    }
  }, {
    key: 'layout',
    value: function layout() {
      var direction = this.root_.getAttribute(_constants.strings.ARIA_ORIENTATION);
      this.vertical = direction === _constants.strings.ARIA_ORIENTATION_VERTICAL;

      // List items need to have at least tabindex=-1 to be focusable.
      [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
        ele.setAttribute('tabindex', -1);
      });

      // Child button/a elements are not tabbable until the list item is focused.
      [].slice.call(this.root_.querySelectorAll(_constants.strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
        return ele.setAttribute('tabindex', -1);
      });
    }

    /** @param {boolean} value */

  }, {
    key: 'getDefaultFoundation',


    /** @return {!MDCListFoundation} */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation.MDCListFoundation( /** @type {!MDCListAdapter} */{
        getListItemCount: function getListItemCount() {
          return _this2.listElements_.length;
        },
        getFocusedElementIndex: function getFocusedElementIndex() {
          return _this2.listElements_.indexOf(document.activeElement);
        },
        getListItemIndex: function getListItemIndex(node) {
          return _this2.listElements_.indexOf(node);
        },
        focusItemAtIndex: function focusItemAtIndex(ndx) {
          return _this2.listElements_[ndx].focus();
        },
        setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
          var listItemChildren = [].slice.call(_this2.listElements_[listItemIndex].querySelectorAll(_constants.strings.FOCUSABLE_CHILD_ELEMENTS));
          listItemChildren.forEach(function (ele) {
            return ele.setAttribute('tabindex', tabIndexValue);
          });
        }
      });
    }
  }, {
    key: 'vertical',
    set: function set(value) {
      this.foundation_.setVerticalOrientation(value);
    }

    /** @return Array<!Element>*/

  }, {
    key: 'listElements_',
    get: function get() {
      var _this3 = this;

      return [].slice.call(this.root_.querySelectorAll(_constants.strings.ITEMS_SELECTOR)).filter(function (ele) {
        return ele.parentElement === _this3.root_;
      });
    }

    /** @param {boolean} value */

  }, {
    key: 'wrapFocus',
    set: function set(value) {
      this.foundation_.setWrapFocus(value);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCList(root);
    }
  }]);

  return MDCList;
}(_component2.default);

},{"./constants":3,"./foundation":4,"@material/base/component":1}],6:[function(require,module,exports){
'use strict';

var _list = require('@material/list');

var articles = new MDCRipple(document.querySelector('.article-list'));

articles.singleSelection = true;

},{"@material/list":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvY29uc3RhbnRzLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2ZvdW5kYXRpb24uanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvaW5kZXguanMiLCJwcm9qZWN0L2Fzc2V0cy9qYXZhc2NyaXB0cy9wcm9qZWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7O0FBRUE7OztJQUdNLFk7Ozs7QUFDSjs7Ozs2QkFJZ0IsSSxFQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBTyxJQUFJLFlBQUosQ0FBaUIsSUFBakIsRUFBdUIsSUFBSSxvQkFBSixFQUF2QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O0FBS0Esd0JBQVksSUFBWixFQUFtRDtBQUFBLFFBQWpDLFVBQWlDLHVFQUFwQixTQUFvQjs7QUFBQTs7QUFDakQ7QUFDQSxTQUFLLEtBQUwsR0FBYSxJQUFiOztBQUZpRCxzQ0FBTixJQUFNO0FBQU4sVUFBTTtBQUFBOztBQUdqRCxTQUFLLFVBQUwsYUFBbUIsSUFBbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFLLFdBQUwsR0FBbUIsZUFBZSxTQUFmLEdBQTJCLEtBQUssb0JBQUwsRUFBM0IsR0FBeUQsVUFBNUU7QUFDQSxTQUFLLFdBQUwsQ0FBaUIsSUFBakI7QUFDQSxTQUFLLGtCQUFMO0FBQ0Q7Ozs7aUNBRVUsYUFBZSxDQUl6QjtBQUhDO0FBQ0E7QUFDQTs7O0FBR0Y7Ozs7OzsyQ0FHdUI7QUFDckI7QUFDQTtBQUNBLFlBQU0sSUFBSSxLQUFKLENB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LDJCQUFpQixPQUFqQixDQUF5QixVQUFDLEdBQUQ7QUFBQSxtQkFBUyxJQUFJLFlBQUosQ0FBaUIsVUFBakIsRUFBNkIsYUFBN0IsQ0FBVDtBQUFBLFdBQXpCO0FBQ0Q7QUFUd0QsT0FBcEQsQ0FBUDtBQVdEOzs7c0JBNUJZLEssRUFBTztBQUNsQixXQUFLLFdBQUwsQ0FBaUIsc0JBQWpCLENBQXdDLEtBQXhDO0FBQ0Q7O0FBRUQ7Ozs7d0JBQ29CO0FBQUE7O0FBQ2xCLGFBQU8sR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLEtBQUssS0FBTCxDQUFXLGdCQUFYLENBQTRCLG1CQUFRLGNBQXBDLENBQWQsRUFDSixNQURJLENBQ0csVUFBQyxHQUFEO0FBQUEsZUFBUyxJQUFJLGFBQUosS0FBc0IsT0FBSyxLQUFwQztBQUFBLE9BREgsQ0FBUDtBQUVEOztBQUVEOzs7O3NCQUNjLEssRUFBTztBQUNuQixXQUFLLFdBQUwsQ0FBaUIsWUFBakIsQ0FBOEIsS0FBOUI7QUFDRDs7OzZCQWpEZSxJLEVBQU07QUFDcEIsYUFBTyxJQUFJLE9BQUosQ0FBWSxJQUFaLENBQVA7QUFDRDs7OztFQWxCMEIsbUI7Ozs7O0FDeEI3Qjs7QUFDQSxJQUFNLFdBQVcsSUFBSSxTQUFKLENBQWMsU0FBUyxhQUFULENBQXVCLGVBQXZCLENBQWQsQ0FBakI7O0FBRUEsU0FBUyxlQUFULEdBQTJCLElBQTNCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQHRlbXBsYXRlIEZcbiAqL1xuY2xhc3MgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0NvbXBvbmVudH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHtGPX0gZm91bmRhdGlvblxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3QsIGZvdW5kYXRpb24gPSB1bmRlZmluZWQsIC4uLmFyZ3MpIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG4gICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgdGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAvKiogQHByb3RlY3RlZCB7IUZ9ICovXG4gICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoLyogLi4uYXJncyAqLykge1xuICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFGfSBmb3VuZGF0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAvLyBjb21wb25lbnQuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiBsaXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBsaXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byByZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIHVubGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsXG4gICAqIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gZXZ0RGF0YVxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG91bGRCdWJibGVcbiAgICovXG4gIGVtaXQoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgICBsZXQgZXZ0O1xuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgTElTVF9JVEVNX0NMQVNTOiAnbWRjLWxpc3QtaXRlbScsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFSSUFfT1JJRU5UQVRJT046ICdhcmlhLW9yaWVudGF0aW9uJyxcbiAgQVJJQV9PUklFTlRBVElPTl9WRVJUSUNBTDogJ3ZlcnRpY2FsJyxcbiAgRk9DVVNBQkxFX0NISUxEX0VMRU1FTlRTOiAnYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLCBhJyxcbiAgSVRFTVNfU0VMRUNUT1I6ICcubWRjLWxpc3QtaXRlbScsXG59O1xuXG5leHBvcnQge3N0cmluZ3MsIGNzc0NsYXNzZXN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHtzdHJpbmdzLCBjc3NDbGFzc2VzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOID0gWydpbnB1dCcsICdidXR0b24nLCAndGV4dGFyZWEnLCAnc2VsZWN0J107XG5cbmNsYXNzIE1EQ0xpc3RGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiB7TURDTGlzdEFkYXB0ZXIgKi8gKHtcbiAgICAgIGdldExpc3RJdGVtQ291bnQ6ICgpID0+IHt9LFxuICAgICAgZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRMaXN0SXRlbUluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGZvY3VzSXRlbUF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIgPSAvKiogQHR5cGUgeyFNRENMaXN0Rm91bmRhdGlvbn0gKi8gKHt9KSkge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDTGlzdEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcbiAgICAvKioge2Jvb2xlYW59ICovXG4gICAgdGhpcy53cmFwRm9jdXNfID0gZmFsc2U7XG4gICAgLyoqIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNWZXJ0aWNhbF8gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByaXZhdGUgd3JhcEZvY3VzXyB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgc2V0V3JhcEZvY3VzKHZhbHVlKSB7XG4gICAgdGhpcy53cmFwRm9jdXNfID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaXNWZXJ0aWNhbF8gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgc2V0VmVydGljYWxPcmllbnRhdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuaXNWZXJ0aWNhbF8gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1cyBpbiBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICogQHBhcmFtIGV2dFxuICAgKi9cbiAgaGFuZGxlRm9jdXNJbihldnQpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMuZ2V0TGlzdEl0ZW1fKGV2dC50YXJnZXQpO1xuICAgIGlmICghbGlzdEl0ZW0pIHJldHVybjtcblxuICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1JbmRleChsaXN0SXRlbSksIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzIG91dCBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVGb2N1c091dChldnQpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMuZ2V0TGlzdEl0ZW1fKGV2dC50YXJnZXQpO1xuICAgIGlmICghbGlzdEl0ZW0pIHJldHVybjtcblxuICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1JbmRleChsaXN0SXRlbSksIC0xKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBLZXkgaGFuZGxlciBmb3IgdGhlIGxpc3QuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlS2V5ZG93bihldnQpIHtcbiAgICBjb25zdCBhcnJvd0xlZnQgPSBldnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldnQua2V5Q29kZSA9PT0gMzc7XG4gICAgY29uc3QgYXJyb3dVcCA9IGV2dC5rZXkgPT09ICdBcnJvd1VwJyB8fCBldnQua2V5Q29kZSA9PT0gMzg7XG4gICAgY29uc3QgYXJyb3dSaWdodCA9IGV2dC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBldnQua2V5Q29kZSA9PT0gMzk7XG4gICAgY29uc3QgYXJyb3dEb3duID0gZXZ0LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZ0LmtleUNvZGUgPT09IDQwO1xuICAgIGNvbnN0IGlzSG9tZSA9IGV2dC5rZXkgPT09ICdIb21lJyB8fCBldnQua2V5Q29kZSA9PT0gMzY7XG4gICAgY29uc3QgaXNFbmQgPSBldnQua2V5ID09PSAnRW5kJyB8fCBldnQua2V5Q29kZSA9PT0gMzU7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleCgpO1xuXG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcbiAgICAgIGN1cnJlbnRJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1JbmRleCh0aGlzLmdldExpc3RJdGVtXyhldnQudGFyZ2V0KSk7XG5cbiAgICAgIGlmIChjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgIC8vIElmIHRoaXMgZXZlbnQgZG9lc24ndCBoYXZlIGEgbWRjLWxpc3QtaXRlbSBhbmNlc3RvciBmcm9tIHRoZVxuICAgICAgICAvLyBjdXJyZW50IGxpc3QgKG5vdCBmcm9tIGEgc3VibGlzdCksIHJldHVybiBlYXJseS5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd0Rvd24pIHx8ICghdGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd1JpZ2h0KSkge1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgdGhpcy5mb2N1c05leHRFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd1VwKSB8fCAoIXRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dMZWZ0KSkge1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgdGhpcy5mb2N1c1ByZXZFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIGlmIChpc0hvbWUpIHtcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgIHRoaXMuZm9jdXNGaXJzdEVsZW1lbnQoKTtcbiAgICB9IGVsc2UgaWYgKGlzRW5kKSB7XG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICB0aGlzLmZvY3VzTGFzdEVsZW1lbnQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyB0aGF0IHByZXZlbnREZWZhdWx0IGlzIG9ubHkgY2FsbGVkIGlmIHRoZSBjb250YWluaW5nIGVsZW1lbnQgZG9lc24ndFxuICAgKiBjb25zdW1lIHRoZSBldmVudCwgYW5kIGl0IHdpbGwgY2F1c2UgYW4gdW5pbnRlbmRlZCBzY3JvbGwuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJldmVudERlZmF1bHRFdmVudF8oZXZ0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IGAke2V2dC50YXJnZXQudGFnTmFtZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOLmluZGV4T2YodGFnTmFtZSkgPT09IC0xKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgbmV4dCBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICovXG4gIGZvY3VzTmV4dEVsZW1lbnQoaW5kZXgpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpO1xuICAgIGxldCBuZXh0SW5kZXggPSBpbmRleCArIDE7XG4gICAgaWYgKG5leHRJbmRleCA+PSBjb3VudCkge1xuICAgICAgaWYgKHRoaXMud3JhcEZvY3VzXykge1xuICAgICAgICBuZXh0SW5kZXggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGJlY2F1c2UgbGFzdCBpdGVtIGlzIGFscmVhZHkgZm9jdXNlZC5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgobmV4dEluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBwcmV2aW91cyBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICovXG4gIGZvY3VzUHJldkVsZW1lbnQoaW5kZXgpIHtcbiAgICBsZXQgcHJldkluZGV4ID0gaW5kZXggLSAxO1xuICAgIGlmIChwcmV2SW5kZXggPCAwKSB7XG4gICAgICBpZiAodGhpcy53cmFwRm9jdXNfKSB7XG4gICAgICAgIHByZXZJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBlYXJseSBiZWNhdXNlIGZpcnN0IGl0ZW0gaXMgYWxyZWFkeSBmb2N1c2VkLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChwcmV2SW5kZXgpO1xuICB9XG5cbiAgZm9jdXNGaXJzdEVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpID4gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KDApO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzTGFzdEVsZW1lbnQoKSB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgLSAxO1xuICAgIGlmIChsYXN0SW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KGxhc3RJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIGZpbmQgdGhlIGZpcnN0IGFuY2VzdG9yIHdpdGggdGhlIG1kYy1saXN0LWl0ZW0gY2xhc3MuXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IHRhcmdldFxuICAgKiBAcmV0dXJuIHs/RWxlbWVudH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldExpc3RJdGVtXyh0YXJnZXQpIHtcbiAgICB3aGlsZSAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MpKSB7XG4gICAgICBpZiAoIXRhcmdldC5wYXJlbnRFbGVtZW50KSByZXR1cm4gbnVsbDtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG59XG5cbmV4cG9ydCB7TURDTGlzdEZvdW5kYXRpb259O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7TURDTGlzdEZvdW5kYXRpb259IGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQge3N0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBNRENDb21wb25lbnQ8IU1EQ0xpc3RGb3VuZGF0aW9uPlxuICovXG5leHBvcnQgY2xhc3MgTURDTGlzdCBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKiBAcGFyYW0gey4uLj99IGFyZ3MgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuaGFuZGxlS2V5ZG93bl87XG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5mb2N1c0luRXZlbnRMaXN0ZW5lcl87XG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5mb2N1c091dEV2ZW50TGlzdGVuZXJfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0xpc3R9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDTGlzdChyb290KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duXyk7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5mb2N1c0luRXZlbnRMaXN0ZW5lcl8pO1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLmZvY3VzT3V0RXZlbnRMaXN0ZW5lcl8pO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMuaGFuZGxlS2V5ZG93bl8gPSB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUtleWRvd24uYmluZCh0aGlzLmZvdW5kYXRpb25fKTtcbiAgICB0aGlzLmZvY3VzSW5FdmVudExpc3RlbmVyXyA9IHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlRm9jdXNJbi5iaW5kKHRoaXMuZm91bmRhdGlvbl8pO1xuICAgIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXyA9IHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlRm9jdXNPdXQuYmluZCh0aGlzLmZvdW5kYXRpb25fKTtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmZvY3VzSW5FdmVudExpc3RlbmVyXyk7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXyk7XG4gICAgdGhpcy5sYXlvdXQoKTtcbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnJvb3RfLmdldEF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfT1JJRU5UQVRJT04pO1xuICAgIHRoaXMudmVydGljYWwgPSBkaXJlY3Rpb24gPT09IHN0cmluZ3MuQVJJQV9PUklFTlRBVElPTl9WRVJUSUNBTDtcblxuICAgIC8vIExpc3QgaXRlbXMgbmVlZCB0byBoYXZlIGF0IGxlYXN0IHRhYmluZGV4PS0xIHRvIGJlIGZvY3VzYWJsZS5cbiAgICBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbCgnLm1kYy1saXN0LWl0ZW06bm90KFt0YWJpbmRleF0pJykpXG4gICAgICAuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpO1xuICAgICAgfSk7XG5cbiAgICAvLyBDaGlsZCBidXR0b24vYSBlbGVtZW50cyBhcmUgbm90IHRhYmJhYmxlIHVudGlsIHRoZSBsaXN0IGl0ZW0gaXMgZm9jdXNlZC5cbiAgICBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUykpXG4gICAgICAuZm9yRWFjaCgoZWxlKSA9PiBlbGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB2YWx1ZSAqL1xuICBzZXQgdmVydGljYWwodmFsdWUpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFZlcnRpY2FsT3JpZW50YXRpb24odmFsdWUpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gQXJyYXk8IUVsZW1lbnQ+Ki9cbiAgZ2V0IGxpc3RFbGVtZW50c18oKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuSVRFTVNfU0VMRUNUT1IpKVxuICAgICAgLmZpbHRlcigoZWxlKSA9PiBlbGUucGFyZW50RWxlbWVudCA9PT0gdGhpcy5yb290Xyk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB2YWx1ZSAqL1xuICBzZXQgd3JhcEZvY3VzKHZhbHVlKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRXcmFwRm9jdXModmFsdWUpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFNRENMaXN0Rm91bmRhdGlvbn0gKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENMaXN0Rm91bmRhdGlvbigvKiogQHR5cGUgeyFNRENMaXN0QWRhcHRlcn0gKi97XG4gICAgICBnZXRMaXN0SXRlbUNvdW50OiAoKSA9PiB0aGlzLmxpc3RFbGVtZW50c18ubGVuZ3RoLFxuICAgICAgZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleDogKCkgPT4gdGhpcy5saXN0RWxlbWVudHNfLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCksXG4gICAgICBnZXRMaXN0SXRlbUluZGV4OiAobm9kZSkgPT4gdGhpcy5saXN0RWxlbWVudHNfLmluZGV4T2Yobm9kZSksXG4gICAgICBmb2N1c0l0ZW1BdEluZGV4OiAobmR4KSA9PiB0aGlzLmxpc3RFbGVtZW50c19bbmR4XS5mb2N1cygpLFxuICAgICAgc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuOiAobGlzdEl0ZW1JbmRleCwgdGFiSW5kZXhWYWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbUNoaWxkcmVuID0gW10uc2xpY2UuY2FsbCh0aGlzLmxpc3RFbGVtZW50c19bbGlzdEl0ZW1JbmRleF1cbiAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUykpO1xuICAgICAgICBsaXN0SXRlbUNoaWxkcmVuLmZvckVhY2goKGVsZSkgPT4gZWxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0YWJJbmRleFZhbHVlKSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge01EQ0xpc3R9IGZyb20gJ0BtYXRlcmlhbC9saXN0JztcbmNvbnN0IGFydGljbGVzID0gbmV3IE1EQ1JpcHBsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZS1saXN0JykpO1xuXG5hcnRpY2xlcy5zaW5nbGVTZWxlY3Rpb24gPSB0cnVlO1xuIl19

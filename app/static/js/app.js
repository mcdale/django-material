(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _drawer = require('@material/drawer');

var drawer = new _drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.mdc-top-app-bar__navigation-icon').addEventListener('click', function () {
  return drawer.open = true;
});

},{"@material/drawer":5}],2:[function(require,module,exports){
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

},{"./foundation":3}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCComponent = exports.MDCFoundation = undefined;

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.MDCFoundation = _foundation2.default;
exports.MDCComponent = _component2.default;

},{"./component":2,"./foundation":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.MDCPersistentDrawerFoundation = exports.MDCPersistentDrawer = exports.MDCTemporaryDrawerFoundation = exports.MDCTemporaryDrawer = undefined;

var _temporary = require('./temporary');

Object.defineProperty(exports, 'MDCTemporaryDrawer', {
  enumerable: true,
  get: function get() {
    return _temporary.MDCTemporaryDrawer;
  }
});
Object.defineProperty(exports, 'MDCTemporaryDrawerFoundation', {
  enumerable: true,
  get: function get() {
    return _temporary.MDCTemporaryDrawerFoundation;
  }
});

var _persistent = require('./persistent');

Object.defineProperty(exports, 'MDCPersistentDrawer', {
  enumerable: true,
  get: function get() {
    return _persistent.MDCPersistentDrawer;
  }
});
Object.defineProperty(exports, 'MDCPersistentDrawerFoundation', {
  enumerable: true,
  get: function get() {
    return _persistent.MDCPersistentDrawerFoundation;
  }
});

var _util = require('./util');

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.util = util;

},{"./persistent":8,"./temporary":14,"./util":15}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.cssClasses = undefined;

var _index = require('../slidable/index');

var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-drawer--persistent',
  OPEN: 'mdc-drawer--open',
  ANIMATING: 'mdc-drawer--animating'
}; /**
    * Copyright 2016 Google Inc. All Rights Reserved.
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

var strings = exports.strings = {
  DRAWER_SELECTOR: '.mdc-drawer--persistent .mdc-drawer__drawer',
  FOCUSABLE_ELEMENTS: _index.FOCUSABLE_ELEMENTS,
  OPEN_EVENT: 'MDCPersistentDrawer:open',
  CLOSE_EVENT: 'MDCPersistentDrawer:close'
};

},{"../slidable/index":11}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../slidable/index');

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
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

var MDCPersistentDrawerFoundation = function (_MDCSlidableDrawerFou) {
  _inherits(MDCPersistentDrawerFoundation, _MDCSlidableDrawerFou);

  _createClass(MDCPersistentDrawerFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return Object.assign(_index.MDCSlidableDrawerFoundation.defaultAdapter, {
        isDrawer: function isDrawer() {
          return false;
        }
      });
    }
  }]);

  function MDCPersistentDrawerFoundation(adapter) {
    _classCallCheck(this, MDCPersistentDrawerFoundation);

    return _possibleConstructorReturn(this, (MDCPersistentDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCPersistentDrawerFoundation)).call(this, Object.assign(MDCPersistentDrawerFoundation.defaultAdapter, adapter), MDCPersistentDrawerFoundation.cssClasses.ROOT, MDCPersistentDrawerFoundation.cssClasses.ANIMATING, MDCPersistentDrawerFoundation.cssClasses.OPEN));
  }

  _createClass(MDCPersistentDrawerFoundation, [{
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_(el) {
      return this.adapter_.isDrawer(el);
    }
  }]);

  return MDCPersistentDrawerFoundation;
}(_index.MDCSlidableDrawerFoundation);

exports.default = MDCPersistentDrawerFoundation;

},{"../slidable/index":11,"./constants":6}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCPersistentDrawer = exports.util = exports.MDCPersistentDrawerFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('@material/base/index');

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _util = require('../util');

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
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

exports.MDCPersistentDrawerFoundation = _foundation2.default;
exports.util = util;

var MDCPersistentDrawer = exports.MDCPersistentDrawer = function (_MDCComponent) {
  _inherits(MDCPersistentDrawer, _MDCComponent);

  function MDCPersistentDrawer() {
    _classCallCheck(this, MDCPersistentDrawer);

    return _possibleConstructorReturn(this, (MDCPersistentDrawer.__proto__ || Object.getPrototypeOf(MDCPersistentDrawer)).apply(this, arguments));
  }

  _createClass(MDCPersistentDrawer, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var FOCUSABLE_ELEMENTS = _foundation2.default.strings.FOCUSABLE_ELEMENTS;


      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.drawer);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(util.remapEvent(evt), handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(util.remapEvent(evt), handler, util.applyPassive());
        },
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.addEventListener(util.remapEvent(evt), handler);
        },
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.removeEventListener(util.remapEvent(evt), handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.root_.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.root_.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: function getDrawerWidth() {
          return _this2.drawer.offsetWidth;
        },
        setTranslateX: function setTranslateX(value) {
          return _this2.drawer.style.setProperty(util.getTransformPropertyName(), value === null ? null : 'translateX(' + value + 'px)');
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return util.saveElementTabState(el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return util.restoreElementTabState(el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
        },
        notifyOpen: function notifyOpen() {
          return _this2.emit(_foundation2.default.strings.OPEN_EVENT);
        },
        notifyClose: function notifyClose() {
          return _this2.emit(_foundation2.default.strings.CLOSE_EVENT);
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        isDrawer: function isDrawer(el) {
          return el === _this2.drawer;
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }

    // Return the drawer element inside the component.

  }, {
    key: 'drawer',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.DRAWER_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCPersistentDrawer(root);
    }
  }]);

  return MDCPersistentDrawer;
}(_index.MDCComponent);

},{"../util":15,"./foundation":7,"@material/base/index":4}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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

var FOCUSABLE_ELEMENTS = exports.FOCUSABLE_ELEMENTS = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' + 'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSlidableDrawerFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('@material/base/index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
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

var MDCSlidableDrawerFoundation = exports.MDCSlidableDrawerFoundation = function (_MDCFoundation) {
  _inherits(MDCSlidableDrawerFoundation, _MDCFoundation);

  _createClass(MDCSlidableDrawerFoundation, null, [{
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        hasClass: function hasClass() /* className: string */{},
        hasNecessaryDom: function hasNecessaryDom() {
          return (/* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        setTranslateX: function setTranslateX() /* value: number | null */{},
        getFocusableElements: function getFocusableElements() /* NodeList */{},
        saveElementTabState: function saveElementTabState() /* el: Element */{},
        restoreElementTabState: function restoreElementTabState() /* el: Element */{},
        makeElementUntabbable: function makeElementUntabbable() /* el: Element */{},
        notifyOpen: function notifyOpen() {},
        notifyClose: function notifyClose() {},
        isRtl: function isRtl() {
          return (/* boolean */false
          );
        },
        getDrawerWidth: function getDrawerWidth() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSlidableDrawerFoundation(adapter, rootCssClass, animatingCssClass, openCssClass) {
    _classCallCheck(this, MDCSlidableDrawerFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSlidableDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCSlidableDrawerFoundation)).call(this, Object.assign(MDCSlidableDrawerFoundation.defaultAdapter, adapter)));

    _this.rootCssClass_ = rootCssClass;
    _this.animatingCssClass_ = animatingCssClass;
    _this.openCssClass_ = openCssClass;

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd_(evt);
    };

    _this.inert_ = false;

    _this.componentTouchStartHandler_ = function (evt) {
      return _this.handleTouchStart_(evt);
    };
    _this.componentTouchMoveHandler_ = function (evt) {
      return _this.handleTouchMove_(evt);
    };
    _this.componentTouchEndHandler_ = function (evt) {
      return _this.handleTouchEnd_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.close();
      }
    };
    return _this;
  }

  _createClass(MDCSlidableDrawerFoundation, [{
    key: 'init',
    value: function init() {
      var ROOT = this.rootCssClass_;
      var OPEN = this.openCssClass_;

      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (!this.adapter_.hasNecessaryDom()) {
        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      } else {
        this.detabinate_();
        this.isOpen_ = false;
      }

      this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
      // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    }
  }, {
    key: 'open',
    value: function open() {
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.addClass(this.animatingCssClass_);
      this.adapter_.addClass(this.openCssClass_);
      this.retabinate_();
      // Debounce multiple calls
      if (!this.isOpen_) {
        this.adapter_.notifyOpen();
      }
      this.isOpen_ = true;
    }
  }, {
    key: 'close',
    value: function close() {
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.addClass(this.animatingCssClass_);
      this.adapter_.removeClass(this.openCssClass_);
      this.detabinate_();
      // Debounce multiple calls
      if (this.isOpen_) {
        this.adapter_.notifyClose();
      }
      this.isOpen_ = false;
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }

    /**
     *  Render all children of the drawer inert when it's closed.
     */

  }, {
    key: 'detabinate_',
    value: function detabinate_() {
      if (this.inert_) {
        return;
      }

      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.saveElementTabState(elements[i]);
          this.adapter_.makeElementUntabbable(elements[i]);
        }
      }

      this.inert_ = true;
    }

    /**
     *  Make all children of the drawer tabbable again when it's open.
     */

  }, {
    key: 'retabinate_',
    value: function retabinate_() {
      if (!this.inert_) {
        return;
      }

      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.restoreElementTabState(elements[i]);
        }
      }

      this.inert_ = false;
    }
  }, {
    key: 'handleTouchStart_',
    value: function handleTouchStart_(evt) {
      if (!this.adapter_.hasClass(this.openCssClass_)) {
        return;
      }
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.direction_ = this.adapter_.isRtl() ? -1 : 1;
      this.drawerWidth_ = this.adapter_.getDrawerWidth();
      this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
      this.currentX_ = this.startX_;

      this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
    }
  }, {
    key: 'handleTouchMove_',
    value: function handleTouchMove_(evt) {
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
    }
  }, {
    key: 'handleTouchEnd_',
    value: function handleTouchEnd_(evt) {
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.prepareForTouchEnd_();

      // Did the user close the drawer by more than 50%?
      if (Math.abs(this.newPosition_ / this.drawerWidth_) >= 0.5) {
        this.close();
      } else {
        // Triggering an open here means we'll get a nice animation back to the fully open state.
        this.open();
      }
    }
  }, {
    key: 'prepareForTouchEnd_',
    value: function prepareForTouchEnd_() {
      cancelAnimationFrame(this.updateRaf_);
      this.adapter_.setTranslateX(null);
    }
  }, {
    key: 'updateDrawer_',
    value: function updateDrawer_() {
      this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
      this.adapter_.setTranslateX(this.newPosition_);
    }
  }, {
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_() {
      // Classes extending MDCSlidableDrawerFoundation should implement this method to return true or false
      // if the event target is the root event target currently transitioning.
      return false;
    }
  }, {
    key: 'handleTransitionEnd_',
    value: function handleTransitionEnd_(evt) {
      if (this.isRootTransitioningEventTarget_(evt.target)) {
        this.adapter_.removeClass(this.animatingCssClass_);
        this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      }
    }
  }, {
    key: 'newPosition_',
    get: function get() {
      var newPos = null;

      if (this.direction_ === 1) {
        newPos = Math.min(0, this.currentX_ - this.startX_);
      } else {
        newPos = Math.max(0, this.currentX_ - this.startX_);
      }

      return newPos;
    }
  }]);

  return MDCSlidableDrawerFoundation;
}(_index.MDCFoundation);

},{"@material/base/index":4}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

Object.defineProperty(exports, 'FOCUSABLE_ELEMENTS', {
  enumerable: true,
  get: function get() {
    return _constants.FOCUSABLE_ELEMENTS;
  }
});

var _foundation = require('./foundation');

Object.defineProperty(exports, 'MDCSlidableDrawerFoundation', {
  enumerable: true,
  get: function get() {
    return _foundation.MDCSlidableDrawerFoundation;
  }
});

},{"./constants":9,"./foundation":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.cssClasses = undefined;

var _index = require('../slidable/index');

var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-drawer--temporary',
  OPEN: 'mdc-drawer--open',
  ANIMATING: 'mdc-drawer--animating',
  SCROLL_LOCK: 'mdc-drawer-scroll-lock'
}; /**
    * Copyright 2016 Google Inc. All Rights Reserved.
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

var strings = exports.strings = {
  DRAWER_SELECTOR: '.mdc-drawer--temporary .mdc-drawer__drawer',
  OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
  FOCUSABLE_ELEMENTS: _index.FOCUSABLE_ELEMENTS,
  OPEN_EVENT: 'MDCTemporaryDrawer:open',
  CLOSE_EVENT: 'MDCTemporaryDrawer:close'
};

},{"../slidable/index":11}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../slidable/index');

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
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

var MDCTemporaryDrawerFoundation = function (_MDCSlidableDrawerFou) {
  _inherits(MDCTemporaryDrawerFoundation, _MDCSlidableDrawerFou);

  _createClass(MDCTemporaryDrawerFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return Object.assign(_index.MDCSlidableDrawerFoundation.defaultAdapter, {
        addBodyClass: function addBodyClass() /* className: string */{},
        removeBodyClass: function removeBodyClass() /* className: string */{},
        isDrawer: function isDrawer() {
          return false;
        },
        updateCssVariable: function updateCssVariable() /* value: string */{},
        eventTargetHasClass: function eventTargetHasClass() {
          return (/* target: EventTarget, className: string */ /* boolean */false
          );
        }
      });
    }
  }]);

  function MDCTemporaryDrawerFoundation(adapter) {
    _classCallCheck(this, MDCTemporaryDrawerFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTemporaryDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation)).call(this, Object.assign(MDCTemporaryDrawerFoundation.defaultAdapter, adapter), MDCTemporaryDrawerFoundation.cssClasses.ROOT, MDCTemporaryDrawerFoundation.cssClasses.ANIMATING, MDCTemporaryDrawerFoundation.cssClasses.OPEN));

    _this.componentClickHandler_ = function (evt) {
      if (_this.adapter_.eventTargetHasClass(evt.target, _constants.cssClasses.ROOT)) {
        _this.close(true);
      }
    };
    return _this;
  }

  _createClass(MDCTemporaryDrawerFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'init', this).call(this);

      // Make browser aware of custom property being used in this element.
      // Workaround for certain types of hard-to-reproduce heisenbugs.
      this.adapter_.updateCssVariable(0);
      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'destroy', this).call(this);

      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
      this.enableScroll_();
    }
  }, {
    key: 'open',
    value: function open() {
      this.disableScroll_();
      // Make sure custom property values are cleared before starting.
      this.adapter_.updateCssVariable('');

      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'open', this).call(this);
    }
  }, {
    key: 'close',
    value: function close() {
      // Make sure custom property values are cleared before making any changes.
      this.adapter_.updateCssVariable('');

      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'close', this).call(this);
    }
  }, {
    key: 'prepareForTouchEnd_',
    value: function prepareForTouchEnd_() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'prepareForTouchEnd_', this).call(this);

      this.adapter_.updateCssVariable('');
    }
  }, {
    key: 'updateDrawer_',
    value: function updateDrawer_() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'updateDrawer_', this).call(this);

      var newOpacity = Math.max(0, 1 + this.direction_ * (this.newPosition_ / this.drawerWidth_));
      this.adapter_.updateCssVariable(newOpacity);
    }
  }, {
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_(el) {
      return this.adapter_.isDrawer(el);
    }
  }, {
    key: 'handleTransitionEnd_',
    value: function handleTransitionEnd_(evt) {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'handleTransitionEnd_', this).call(this, evt);
      if (!this.isOpen_) {
        this.enableScroll_();
      }
    }
  }, {
    key: 'disableScroll_',
    value: function disableScroll_() {
      this.adapter_.addBodyClass(_constants.cssClasses.SCROLL_LOCK);
    }
  }, {
    key: 'enableScroll_',
    value: function enableScroll_() {
      this.adapter_.removeBodyClass(_constants.cssClasses.SCROLL_LOCK);
    }
  }]);

  return MDCTemporaryDrawerFoundation;
}(_index.MDCSlidableDrawerFoundation);

exports.default = MDCTemporaryDrawerFoundation;

},{"../slidable/index":11,"./constants":12}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTemporaryDrawer = exports.util = exports.MDCTemporaryDrawerFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('@material/base/index');

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _util = require('../util');

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
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

exports.MDCTemporaryDrawerFoundation = _foundation2.default;
exports.util = util;

var MDCTemporaryDrawer = exports.MDCTemporaryDrawer = function (_MDCComponent) {
  _inherits(MDCTemporaryDrawer, _MDCComponent);

  function MDCTemporaryDrawer() {
    _classCallCheck(this, MDCTemporaryDrawer);

    return _possibleConstructorReturn(this, (MDCTemporaryDrawer.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawer)).apply(this, arguments));
  }

  _createClass(MDCTemporaryDrawer, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var _MDCTemporaryDrawerFo = _foundation2.default.strings,
          FOCUSABLE_ELEMENTS = _MDCTemporaryDrawerFo.FOCUSABLE_ELEMENTS,
          OPACITY_VAR_NAME = _MDCTemporaryDrawerFo.OPACITY_VAR_NAME;


      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        addBodyClass: function addBodyClass(className) {
          return document.body.classList.add(className);
        },
        removeBodyClass: function removeBodyClass(className) {
          return document.body.classList.remove(className);
        },
        eventTargetHasClass: function eventTargetHasClass(target, className) {
          return target.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.drawer);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(util.remapEvent(evt), handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(util.remapEvent(evt), handler, util.applyPassive());
        },
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.addEventListener(util.remapEvent(evt), handler);
        },
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.removeEventListener(util.remapEvent(evt), handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.drawer.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.drawer.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: function getDrawerWidth() {
          return _this2.drawer.offsetWidth;
        },
        setTranslateX: function setTranslateX(value) {
          return _this2.drawer.style.setProperty(util.getTransformPropertyName(), value === null ? null : 'translateX(' + value + 'px)');
        },
        updateCssVariable: function updateCssVariable(value) {
          if (util.supportsCssCustomProperties()) {
            _this2.root_.style.setProperty(OPACITY_VAR_NAME, value);
          }
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return util.saveElementTabState(el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return util.restoreElementTabState(el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
        },
        notifyOpen: function notifyOpen() {
          return _this2.emit(_foundation2.default.strings.OPEN_EVENT);
        },
        notifyClose: function notifyClose() {
          return _this2.emit(_foundation2.default.strings.CLOSE_EVENT);
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        isDrawer: function isDrawer(el) {
          return el === _this2.drawer;
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }

    /* Return the drawer element inside the component. */

  }, {
    key: 'drawer',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.DRAWER_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTemporaryDrawer(root);
    }
  }]);

  return MDCTemporaryDrawer;
}(_index.MDCComponent);

},{"../util":15,"./foundation":13,"@material/base/index":4}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remapEvent = remapEvent;
exports.getTransformPropertyName = getTransformPropertyName;
exports.supportsCssCustomProperties = supportsCssCustomProperties;
exports.applyPassive = applyPassive;
exports.saveElementTabState = saveElementTabState;
exports.restoreElementTabState = restoreElementTabState;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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

var TAB_DATA = 'data-mdc-tabindex';
var TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

var storedTransformPropertyName_ = void 0;
var supportsPassive_ = void 0;

// Remap touch events to pointer events, if the browser doesn't support touch events.
function remapEvent(eventName) {
  var globalObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (!('ontouchstart' in globalObj.document)) {
    switch (eventName) {
      case 'touchstart':
        return 'pointerdown';
      case 'touchmove':
        return 'pointermove';
      case 'touchend':
        return 'pointerup';
      default:
        return eventName;
    }
  }

  return eventName;
}

// Choose the correct transform property to use on the current browser.
function getTransformPropertyName() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : '-webkit-transform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Determine whether the current browser supports CSS properties.
function supportsCssCustomProperties() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  if ('CSS' in globalObj) {
    return globalObj.CSS.supports('(--color: red)');
  }
  return false;
}

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

// Save the tab state for an element.
function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

// Restore the tab state for an element, if it was saved.
function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9wZXJzaXN0ZW50L2NvbnN0YW50cy5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL3BlcnNpc3RlbnQvZm91bmRhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL3BlcnNpc3RlbnQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9zbGlkYWJsZS9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9zbGlkYWJsZS9mb3VuZGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvc2xpZGFibGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci90ZW1wb3JhcnkvY29uc3RhbnRzLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvdGVtcG9yYXJ5L2ZvdW5kYXRpb24uanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci90ZW1wb3JhcnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQSxJQUFNLFNBQVMsSUFBSSwwQkFBSixDQUF1QixTQUFTLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXZCLENBQWY7QUFDQSxT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Z0IsUUFBaEIsQ0FBSixFQUErQjtBQUM3QixTQUFHLFlBQUgsQ0FBZ0IsVUFBaEIsRUFBNEIsR0FBRyxZQUFILENBQWdCLFFBQWhCLENBQTVCO0FBQ0EsU0FBRyxlQUFILENBQW1CLFFBQW5CO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsU0FBRyxlQUFILENBQW1CLFVBQW5CO0FBQ0Q7QUFDRCxPQUFHLGVBQUgsQ0FBbUIsZ0JBQW5CO0FBQ0Q7QUFDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7TURDVGVtcG9yYXJ5RHJhd2VyfSBmcm9tICdAbWF0ZXJpYWwvZHJhd2VyJztcbmNvbnN0IGRyYXdlciA9IG5ldyBNRENUZW1wb3JhcnlEcmF3ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy1kcmF3ZXItLXRlbXBvcmFyeScpKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtdG9wLWFwcC1iYXJfX25hdmlnYXRpb24taWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZHJhd2VyLm9wZW4gPSB0cnVlKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEFcbiAqL1xuY2xhc3MgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW17Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte251bWJlcnN9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFPYmplY3R9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgIC8vIHZhbGlkYXRpb24uXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QT19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIgPSB7fSkge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshQX0gKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmV4cG9ydCB7TURDRm91bmRhdGlvbiwgTURDQ29tcG9uZW50fTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbmV4cG9ydCB7TURDVGVtcG9yYXJ5RHJhd2VyLCBNRENUZW1wb3JhcnlEcmF3ZXJGb3VuZGF0aW9ufSBmcm9tICcuL3RlbXBvcmFyeSc7XG5leHBvcnQge01EQ1BlcnNpc3RlbnREcmF3ZXIsIE1EQ1BlcnNpc3RlbnREcmF3ZXJGb3VuZGF0aW9ufSBmcm9tICcuL3BlcnNpc3RlbnQnO1xuZXhwb3J0IHt1dGlsfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7Rk9DVVNBQkxFX0VMRU1FTlRTfSBmcm9tICcuLi9zbGlkYWJsZS9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBjc3NDbGFzc2VzID0ge1xuICBST09UOiAnbWRjLWRyYXdlci0tcGVyc2lzdGVudCcsXG4gIE9QRU46ICdtZGMtZHJhd2VyLS1vcGVuJyxcbiAgQU5JTUFUSU5HOiAnbWRjLWRyYXdlci0tYW5pbWF0aW5nJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xuICBEUkFXRVJfU0VMRUNUT1I6ICcubWRjLWRyYXdlci0tcGVyc2lzdGVudCAubWRjLWRyYXdlcl9fZHJhd2VyJyxcbiAgRk9DVVNBQkxFX0VMRU1FTlRTLFxuICBPUEVOX0VWRU5UOiAnTURDUGVyc2lzdGVudERyYXdlcjpvcGVuJyxcbiAgQ0xPU0VfRVZFTlQ6ICdNRENQZXJzaXN0ZW50RHJhd2VyOmNsb3NlJyxcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge01EQ1NsaWRhYmxlRHJhd2VyRm91bmRhdGlvbn0gZnJvbSAnLi4vc2xpZGFibGUvaW5kZXgnO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1EQ1BlcnNpc3RlbnREcmF3ZXJGb3VuZGF0aW9uIGV4dGVuZHMgTURDU2xpZGFibGVEcmF3ZXJGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihNRENTbGlkYWJsZURyYXdlckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIHtcbiAgICAgIGlzRHJhd2VyOiAoKSA9PiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihcbiAgICAgIE9iamVjdC5hc3NpZ24oTURDUGVyc2lzdGVudERyYXdlckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpLFxuICAgICAgTURDUGVyc2lzdGVudERyYXdlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5ST09ULFxuICAgICAgTURDUGVyc2lzdGVudERyYXdlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkcsXG4gICAgICBNRENQZXJzaXN0ZW50RHJhd2VyRm91bmRhdGlvbi5jc3NDbGFzc2VzLk9QRU4pO1xuICB9XG5cbiAgaXNSb290VHJhbnNpdGlvbmluZ0V2ZW50VGFyZ2V0XyhlbCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmlzRHJhd2VyKGVsKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtNRENDb21wb25lbnR9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2luZGV4JztcbmltcG9ydCBNRENQZXJzaXN0ZW50RHJhd2VyRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsJztcblxuZXhwb3J0IHtNRENQZXJzaXN0ZW50RHJhd2VyRm91bmRhdGlvbn07XG5leHBvcnQge3V0aWx9O1xuXG5leHBvcnQgY2xhc3MgTURDUGVyc2lzdGVudERyYXdlciBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENQZXJzaXN0ZW50RHJhd2VyKHJvb3QpO1xuICB9XG5cbiAgZ2V0IG9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uaXNPcGVuKCk7XG4gIH1cblxuICBzZXQgb3Blbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uXy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbl8uY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIGRyYXdlciBlbGVtZW50IGluc2lkZSB0aGUgY29tcG9uZW50LlxuICBnZXQgZHJhd2VyKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoTURDUGVyc2lzdGVudERyYXdlckZvdW5kYXRpb24uc3RyaW5ncy5EUkFXRVJfU0VMRUNUT1IpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgY29uc3Qge0ZPQ1VTQUJMRV9FTEVNRU5UU30gPSBNRENQZXJzaXN0ZW50RHJhd2VyRm91bmRhdGlvbi5zdHJpbmdzO1xuXG4gICAgcmV0dXJuIG5ldyBNRENQZXJzaXN0ZW50RHJhd2VyRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBoYXNDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIGhhc05lY2Vzc2FyeURvbTogKCkgPT4gQm9vbGVhbih0aGlzLmRyYXdlciksXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT5cbiAgICAgICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKHV0aWwucmVtYXBFdmVudChldnQpLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+XG4gICAgICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcih1dGlsLnJlbWFwRXZlbnQoZXZ0KSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRyYXdlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT5cbiAgICAgICAgdGhpcy5kcmF3ZXIuYWRkRXZlbnRMaXN0ZW5lcih1dGlsLnJlbWFwRXZlbnQoZXZ0KSwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyRHJhd2VySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PlxuICAgICAgICB0aGlzLmRyYXdlci5yZW1vdmVFdmVudExpc3RlbmVyKHV0aWwucmVtYXBFdmVudChldnQpLCBoYW5kbGVyKSxcbiAgICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkVuZEhhbmRsZXI6IChoYW5kbGVyKSA9PlxuICAgICAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJUcmFuc2l0aW9uRW5kSGFuZGxlcjogKGhhbmRsZXIpID0+XG4gICAgICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZXIpLFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEtleWRvd25IYW5kbGVyOiAoaGFuZGxlcikgPT4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50S2V5ZG93bkhhbmRsZXI6IChoYW5kbGVyKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlciksXG4gICAgICBnZXREcmF3ZXJXaWR0aDogKCkgPT4gdGhpcy5kcmF3ZXIub2Zmc2V0V2lkdGgsXG4gICAgICBzZXRUcmFuc2xhdGVYOiAodmFsdWUpID0+IHRoaXMuZHJhd2VyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICB1dGlsLmdldFRyYW5zZm9ybVByb3BlcnR5TmFtZSgpLCB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBgdHJhbnNsYXRlWCgke3ZhbHVlfXB4KWApLFxuICAgICAgZ2V0Rm9jdXNhYmxlRWxlbWVudHM6ICgpID0+IHRoaXMuZHJhd2VyLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMRU1FTlRTKSxcbiAgICAgIHNhdmVFbGVtZW50VGFiU3RhdGU6IChlbCkgPT4gdXRpbC5zYXZlRWxlbWVudFRhYlN0YXRlKGVsKSxcbiAgICAgIHJlc3RvcmVFbGVtZW50VGFiU3RhdGU6IChlbCkgPT4gdXRpbC5yZXN0b3JlRWxlbWVudFRhYlN0YXRlKGVsKSxcbiAgICAgIG1ha2VFbGVtZW50VW50YWJiYWJsZTogKGVsKSA9PiBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpLFxuICAgICAgbm90aWZ5T3BlbjogKCkgPT4gdGhpcy5lbWl0KE1EQ1BlcnNpc3RlbnREcmF3ZXJGb3VuZGF0aW9uLnN0cmluZ3MuT1BFTl9FVkVOVCksXG4gICAgICBub3RpZnlDbG9zZTogKCkgPT4gdGhpcy5lbWl0KE1EQ1BlcnNpc3RlbnREcmF3ZXJGb3VuZGF0aW9uLnN0cmluZ3MuQ0xPU0VfRVZFTlQpLFxuICAgICAgaXNSdGw6ICgpID0+IGdldENvbXB1dGVkU3R5bGUodGhpcy5yb290XykuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgaXNEcmF3ZXI6IChlbCkgPT4gZWwgPT09IHRoaXMuZHJhd2VyLFxuICAgIH0pO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgY29uc3QgRk9DVVNBQkxFX0VMRU1FTlRTID1cbiAgJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCAnICtcbiAgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgW3RhYmluZGV4XSwgW2NvbnRlbnRlZGl0YWJsZV0nO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtNRENGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9pbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBNRENTbGlkYWJsZURyYXdlckZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgaGFzTmVjZXNzYXJ5RG9tOiAoKSA9PiAvKiBib29sZWFuICovIGZhbHNlLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJEcmF3ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyRHJhd2VySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJUcmFuc2l0aW9uRW5kSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckRvY3VtZW50S2V5ZG93bkhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEtleWRvd25IYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBzZXRUcmFuc2xhdGVYOiAoLyogdmFsdWU6IG51bWJlciB8IG51bGwgKi8pID0+IHt9LFxuICAgICAgZ2V0Rm9jdXNhYmxlRWxlbWVudHM6ICgpID0+IC8qIE5vZGVMaXN0ICovIHt9LFxuICAgICAgc2F2ZUVsZW1lbnRUYWJTdGF0ZTogKC8qIGVsOiBFbGVtZW50ICovKSA9PiB7fSxcbiAgICAgIHJlc3RvcmVFbGVtZW50VGFiU3RhdGU6ICgvKiBlbDogRWxlbWVudCAqLykgPT4ge30sXG4gICAgICBtYWtlRWxlbWVudFVudGFiYmFibGU6ICgvKiBlbDogRWxlbWVudCAqLykgPT4ge30sXG4gICAgICBub3RpZnlPcGVuOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUNsb3NlOiAoKSA9PiB7fSxcbiAgICAgIGlzUnRsOiAoKSA9PiAvKiBib29sZWFuICovIGZhbHNlLFxuICAgICAgZ2V0RHJhd2VyV2lkdGg6ICgpID0+IC8qIG51bWJlciAqLyAwLFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyLCByb290Q3NzQ2xhc3MsIGFuaW1hdGluZ0Nzc0NsYXNzLCBvcGVuQ3NzQ2xhc3MpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1NsaWRhYmxlRHJhd2VyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgdGhpcy5yb290Q3NzQ2xhc3NfID0gcm9vdENzc0NsYXNzO1xuICAgIHRoaXMuYW5pbWF0aW5nQ3NzQ2xhc3NfID0gYW5pbWF0aW5nQ3NzQ2xhc3M7XG4gICAgdGhpcy5vcGVuQ3NzQ2xhc3NfID0gb3BlbkNzc0NsYXNzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8gPSAoZXZ0KSA9PiB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfKGV2dCk7XG5cbiAgICB0aGlzLmluZXJ0XyA9IGZhbHNlO1xuXG4gICAgdGhpcy5jb21wb25lbnRUb3VjaFN0YXJ0SGFuZGxlcl8gPSAoZXZ0KSA9PiB0aGlzLmhhbmRsZVRvdWNoU3RhcnRfKGV2dCk7XG4gICAgdGhpcy5jb21wb25lbnRUb3VjaE1vdmVIYW5kbGVyXyA9IChldnQpID0+IHRoaXMuaGFuZGxlVG91Y2hNb3ZlXyhldnQpO1xuICAgIHRoaXMuY29tcG9uZW50VG91Y2hFbmRIYW5kbGVyXyA9IChldnQpID0+IHRoaXMuaGFuZGxlVG91Y2hFbmRfKGV2dCk7XG4gICAgdGhpcy5kb2N1bWVudEtleWRvd25IYW5kbGVyXyA9IChldnQpID0+IHtcbiAgICAgIGlmIChldnQua2V5ICYmIGV2dC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2dC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgUk9PVCA9IHRoaXMucm9vdENzc0NsYXNzXztcbiAgICBjb25zdCBPUEVOID0gdGhpcy5vcGVuQ3NzQ2xhc3NfO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKFJPT1QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Uk9PVH0gY2xhc3MgcmVxdWlyZWQgaW4gcm9vdCBlbGVtZW50LmApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNOZWNlc3NhcnlEb20oKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1aXJlZCBET00gbm9kZXMgbWlzc2luZyBpbiAke1JPT1R9IGNvbXBvbmVudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhPUEVOKSkge1xuICAgICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXRhYmluYXRlXygpO1xuICAgICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRyYXdlckludGVyYWN0aW9uSGFuZGxlcigndG91Y2hzdGFydCcsIHRoaXMuY29tcG9uZW50VG91Y2hTdGFydEhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCd0b3VjaG1vdmUnLCB0aGlzLmNvbXBvbmVudFRvdWNoTW92ZUhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCd0b3VjaGVuZCcsIHRoaXMuY29tcG9uZW50VG91Y2hFbmRIYW5kbGVyXyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRyYXdlckludGVyYWN0aW9uSGFuZGxlcigndG91Y2hzdGFydCcsIHRoaXMuY29tcG9uZW50VG91Y2hTdGFydEhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ3RvdWNobW92ZScsIHRoaXMuY29tcG9uZW50VG91Y2hNb3ZlSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigndG91Y2hlbmQnLCB0aGlzLmNvbXBvbmVudFRvdWNoRW5kSGFuZGxlcl8pO1xuICAgIC8vIERlcmVnaXN0ZXIgdGhlIGRvY3VtZW50IGtleWRvd24gaGFuZGxlciBqdXN0IGluIGNhc2UgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgd2hpbGUgdGhlIG1lbnUgaXMgb3Blbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEtleWRvd25IYW5kbGVyKHRoaXMuZG9jdW1lbnRLZXlkb3duSGFuZGxlcl8pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyVHJhbnNpdGlvbkVuZEhhbmRsZXIodGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEtleWRvd25IYW5kbGVyKHRoaXMuZG9jdW1lbnRLZXlkb3duSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3ModGhpcy5hbmltYXRpbmdDc3NDbGFzc18pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3ModGhpcy5vcGVuQ3NzQ2xhc3NfKTtcbiAgICB0aGlzLnJldGFiaW5hdGVfKCk7XG4gICAgLy8gRGVib3VuY2UgbXVsdGlwbGUgY2FsbHNcbiAgICBpZiAoIXRoaXMuaXNPcGVuXykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuKCk7XG4gICAgfVxuICAgIHRoaXMuaXNPcGVuXyA9IHRydWU7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEtleWRvd25IYW5kbGVyKHRoaXMuZG9jdW1lbnRLZXlkb3duSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJUcmFuc2l0aW9uRW5kSGFuZGxlcih0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyh0aGlzLmFuaW1hdGluZ0Nzc0NsYXNzXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyh0aGlzLm9wZW5Dc3NDbGFzc18pO1xuICAgIHRoaXMuZGV0YWJpbmF0ZV8oKTtcbiAgICAvLyBEZWJvdW5jZSBtdWx0aXBsZSBjYWxsc1xuICAgIGlmICh0aGlzLmlzT3Blbl8pIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuXztcbiAgfVxuXG4gIC8qKlxuICAgKiAgUmVuZGVyIGFsbCBjaGlsZHJlbiBvZiB0aGUgZHJhd2VyIGluZXJ0IHdoZW4gaXQncyBjbG9zZWQuXG4gICAqL1xuICBkZXRhYmluYXRlXygpIHtcbiAgICBpZiAodGhpcy5pbmVydF8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuYWRhcHRlcl8uZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcbiAgICBpZiAoZWxlbWVudHMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zYXZlRWxlbWVudFRhYlN0YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5tYWtlRWxlbWVudFVudGFiYmFibGUoZWxlbWVudHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaW5lcnRfID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBhbGwgY2hpbGRyZW4gb2YgdGhlIGRyYXdlciB0YWJiYWJsZSBhZ2FpbiB3aGVuIGl0J3Mgb3Blbi5cbiAgICovXG4gIHJldGFiaW5hdGVfKCkge1xuICAgIGlmICghdGhpcy5pbmVydF8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuYWRhcHRlcl8uZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcbiAgICBpZiAoZWxlbWVudHMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZXN0b3JlRWxlbWVudFRhYlN0YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmluZXJ0XyA9IGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlVG91Y2hTdGFydF8oZXZ0KSB7XG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKHRoaXMub3BlbkNzc0NsYXNzXykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2dC5wb2ludGVyVHlwZSAmJiBldnQucG9pbnRlclR5cGUgIT09ICd0b3VjaCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRpcmVjdGlvbl8gPSB0aGlzLmFkYXB0ZXJfLmlzUnRsKCkgPyAtMSA6IDE7XG4gICAgdGhpcy5kcmF3ZXJXaWR0aF8gPSB0aGlzLmFkYXB0ZXJfLmdldERyYXdlcldpZHRoKCk7XG4gICAgdGhpcy5zdGFydFhfID0gZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXS5wYWdlWCA6IGV2dC5wYWdlWDtcbiAgICB0aGlzLmN1cnJlbnRYXyA9IHRoaXMuc3RhcnRYXztcblxuICAgIHRoaXMudXBkYXRlUmFmXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZURyYXdlcl8uYmluZCh0aGlzKSk7XG4gIH1cblxuICBoYW5kbGVUb3VjaE1vdmVfKGV2dCkge1xuICAgIGlmIChldnQucG9pbnRlclR5cGUgJiYgZXZ0LnBvaW50ZXJUeXBlICE9PSAndG91Y2gnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50WF8gPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdLnBhZ2VYIDogZXZ0LnBhZ2VYO1xuICB9XG5cbiAgaGFuZGxlVG91Y2hFbmRfKGV2dCkge1xuICAgIGlmIChldnQucG9pbnRlclR5cGUgJiYgZXZ0LnBvaW50ZXJUeXBlICE9PSAndG91Y2gnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmVwYXJlRm9yVG91Y2hFbmRfKCk7XG5cbiAgICAvLyBEaWQgdGhlIHVzZXIgY2xvc2UgdGhlIGRyYXdlciBieSBtb3JlIHRoYW4gNTAlP1xuICAgIGlmIChNYXRoLmFicyh0aGlzLm5ld1Bvc2l0aW9uXyAvIHRoaXMuZHJhd2VyV2lkdGhfKSA+PSAwLjUpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJpZ2dlcmluZyBhbiBvcGVuIGhlcmUgbWVhbnMgd2UnbGwgZ2V0IGEgbmljZSBhbmltYXRpb24gYmFjayB0byB0aGUgZnVsbHkgb3BlbiBzdGF0ZS5cbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIHByZXBhcmVGb3JUb3VjaEVuZF8oKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVSYWZfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFRyYW5zbGF0ZVgobnVsbCk7XG4gIH1cblxuICB1cGRhdGVEcmF3ZXJfKCkge1xuICAgIHRoaXMudXBkYXRlUmFmXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZURyYXdlcl8uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRUcmFuc2xhdGVYKHRoaXMubmV3UG9zaXRpb25fKTtcbiAgfVxuXG4gIGdldCBuZXdQb3NpdGlvbl8oKSB7XG4gICAgbGV0IG5ld1BvcyA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25fID09PSAxKSB7XG4gICAgICBuZXdQb3MgPSBNYXRoLm1pbigwLCB0aGlzLmN1cnJlbnRYXyAtIHRoaXMuc3RhcnRYXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1BvcyA9IE1hdGgubWF4KDAsIHRoaXMuY3VycmVudFhfIC0gdGhpcy5zdGFydFhfKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UG9zO1xuICB9XG5cbiAgaXNSb290VHJhbnNpdGlvbmluZ0V2ZW50VGFyZ2V0XygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENTbGlkYWJsZURyYXdlckZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gdHJ1ZSBvciBmYWxzZVxuICAgIC8vIGlmIHRoZSBldmVudCB0YXJnZXQgaXMgdGhlIHJvb3QgZXZlbnQgdGFyZ2V0IGN1cnJlbnRseSB0cmFuc2l0aW9uaW5nLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZVRyYW5zaXRpb25FbmRfKGV2dCkge1xuICAgIGlmICh0aGlzLmlzUm9vdFRyYW5zaXRpb25pbmdFdmVudFRhcmdldF8oZXZ0LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3ModGhpcy5hbmltYXRpbmdDc3NDbGFzc18pO1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyVHJhbnNpdGlvbkVuZEhhbmRsZXIodGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8pO1xuICAgIH1cbiAgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCB7Rk9DVVNBQkxFX0VMRU1FTlRTfSBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQge01EQ1NsaWRhYmxlRHJhd2VyRm91bmRhdGlvbn0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7Rk9DVVNBQkxFX0VMRU1FTlRTfSBmcm9tICcuLi9zbGlkYWJsZS9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBjc3NDbGFzc2VzID0ge1xuICBST09UOiAnbWRjLWRyYXdlci0tdGVtcG9yYXJ5JyxcbiAgT1BFTjogJ21kYy1kcmF3ZXItLW9wZW4nLFxuICBBTklNQVRJTkc6ICdtZGMtZHJhd2VyLS1hbmltYXRpbmcnLFxuICBTQ1JPTExfTE9DSzogJ21kYy1kcmF3ZXItc2Nyb2xsLWxvY2snLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gIERSQVdFUl9TRUxFQ1RPUjogJy5tZGMtZHJhd2VyLS10ZW1wb3JhcnkgLm1kYy1kcmF3ZXJfX2RyYXdlcicsXG4gIE9QQUNJVFlfVkFSX05BTUU6ICctLW1kYy10ZW1wb3JhcnktZHJhd2VyLW9wYWNpdHknLFxuICBGT0NVU0FCTEVfRUxFTUVOVFMsXG4gIE9QRU5fRVZFTlQ6ICdNRENUZW1wb3JhcnlEcmF3ZXI6b3BlbicsXG4gIENMT1NFX0VWRU5UOiAnTURDVGVtcG9yYXJ5RHJhd2VyOmNsb3NlJyxcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge01EQ1NsaWRhYmxlRHJhd2VyRm91bmRhdGlvbn0gZnJvbSAnLi4vc2xpZGFibGUvaW5kZXgnO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1EQ1RlbXBvcmFyeURyYXdlckZvdW5kYXRpb24gZXh0ZW5kcyBNRENTbGlkYWJsZURyYXdlckZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE1EQ1NsaWRhYmxlRHJhd2VyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwge1xuICAgICAgYWRkQm9keUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQm9keUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgaXNEcmF3ZXI6ICgpID0+IGZhbHNlLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICgvKiB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGV2ZW50VGFyZ2V0SGFzQ2xhc3M6ICgvKiB0YXJnZXQ6IEV2ZW50VGFyZ2V0LCBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4gLyogYm9vbGVhbiAqLyBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihcbiAgICAgIE9iamVjdC5hc3NpZ24oTURDVGVtcG9yYXJ5RHJhd2VyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlciksXG4gICAgICBNRENUZW1wb3JhcnlEcmF3ZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuUk9PVCxcbiAgICAgIE1EQ1RlbXBvcmFyeURyYXdlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkcsXG4gICAgICBNRENUZW1wb3JhcnlEcmF3ZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1BFTik7XG5cbiAgICB0aGlzLmNvbXBvbmVudENsaWNrSGFuZGxlcl8gPSAoZXZ0KSA9PiB7XG4gICAgICBpZiAodGhpcy5hZGFwdGVyXy5ldmVudFRhcmdldEhhc0NsYXNzKGV2dC50YXJnZXQsIGNzc0NsYXNzZXMuUk9PVCkpIHtcbiAgICAgICAgdGhpcy5jbG9zZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBzdXBlci5pbml0KCk7XG5cbiAgICAvLyBNYWtlIGJyb3dzZXIgYXdhcmUgb2YgY3VzdG9tIHByb3BlcnR5IGJlaW5nIHVzZWQgaW4gdGhpcyBlbGVtZW50LlxuICAgIC8vIFdvcmthcm91bmQgZm9yIGNlcnRhaW4gdHlwZXMgb2YgaGFyZC10by1yZXByb2R1Y2UgaGVpc2VuYnVncy5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKDApO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2NsaWNrJywgdGhpcy5jb21wb25lbnRDbGlja0hhbmRsZXJfKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdjbGljaycsIHRoaXMuY29tcG9uZW50Q2xpY2tIYW5kbGVyXyk7XG4gICAgdGhpcy5lbmFibGVTY3JvbGxfKCk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuZGlzYWJsZVNjcm9sbF8oKTtcbiAgICAvLyBNYWtlIHN1cmUgY3VzdG9tIHByb3BlcnR5IHZhbHVlcyBhcmUgY2xlYXJlZCBiZWZvcmUgc3RhcnRpbmcuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZSgnJyk7XG5cbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICAvLyBNYWtlIHN1cmUgY3VzdG9tIHByb3BlcnR5IHZhbHVlcyBhcmUgY2xlYXJlZCBiZWZvcmUgbWFraW5nIGFueSBjaGFuZ2VzLlxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoJycpO1xuXG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgfVxuXG4gIHByZXBhcmVGb3JUb3VjaEVuZF8oKSB7XG4gICAgc3VwZXIucHJlcGFyZUZvclRvdWNoRW5kXygpO1xuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZSgnJyk7XG4gIH1cblxuICB1cGRhdGVEcmF3ZXJfKCkge1xuICAgIHN1cGVyLnVwZGF0ZURyYXdlcl8oKTtcblxuICAgIGNvbnN0IG5ld09wYWNpdHkgPSBNYXRoLm1heCgwLCAxICsgdGhpcy5kaXJlY3Rpb25fICogKHRoaXMubmV3UG9zaXRpb25fIC8gdGhpcy5kcmF3ZXJXaWR0aF8pKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKG5ld09wYWNpdHkpO1xuICB9XG5cbiAgaXNSb290VHJhbnNpdGlvbmluZ0V2ZW50VGFyZ2V0XyhlbCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmlzRHJhd2VyKGVsKTtcbiAgfVxuXG4gIGhhbmRsZVRyYW5zaXRpb25FbmRfKGV2dCkge1xuICAgIHN1cGVyLmhhbmRsZVRyYW5zaXRpb25FbmRfKGV2dCk7XG4gICAgaWYgKCF0aGlzLmlzT3Blbl8pIHtcbiAgICAgIHRoaXMuZW5hYmxlU2Nyb2xsXygpO1xuICAgIH1cbiAgfTtcblxuICBkaXNhYmxlU2Nyb2xsXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZEJvZHlDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTF9MT0NLKTtcbiAgfVxuXG4gIGVuYWJsZVNjcm9sbF8oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVCb2R5Q2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExfTE9DSyk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7TURDQ29tcG9uZW50fSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9pbmRleCc7XG5pbXBvcnQgTURDVGVtcG9yYXJ5RHJhd2VyRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsJztcblxuZXhwb3J0IHtNRENUZW1wb3JhcnlEcmF3ZXJGb3VuZGF0aW9ufTtcbmV4cG9ydCB7dXRpbH07XG5cbmV4cG9ydCBjbGFzcyBNRENUZW1wb3JhcnlEcmF3ZXIgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDVGVtcG9yYXJ5RHJhd2VyKHJvb3QpO1xuICB9XG5cbiAgZ2V0IG9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uaXNPcGVuKCk7XG4gIH1cblxuICBzZXQgb3Blbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uXy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbl8uY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKiBSZXR1cm4gdGhlIGRyYXdlciBlbGVtZW50IGluc2lkZSB0aGUgY29tcG9uZW50LiAqL1xuICBnZXQgZHJhd2VyKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoTURDVGVtcG9yYXJ5RHJhd2VyRm91bmRhdGlvbi5zdHJpbmdzLkRSQVdFUl9TRUxFQ1RPUik7XG4gIH1cblxuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICBjb25zdCB7Rk9DVVNBQkxFX0VMRU1FTlRTLCBPUEFDSVRZX1ZBUl9OQU1FfSA9IE1EQ1RlbXBvcmFyeURyYXdlckZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHJldHVybiBuZXcgTURDVGVtcG9yYXJ5RHJhd2VyRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBoYXNDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIGFkZEJvZHlDbGFzczogKGNsYXNzTmFtZSkgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVCb2R5Q2xhc3M6IChjbGFzc05hbWUpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgZXZlbnRUYXJnZXRIYXNDbGFzczogKHRhcmdldCwgY2xhc3NOYW1lKSA9PiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBoYXNOZWNlc3NhcnlEb206ICgpID0+IEJvb2xlYW4odGhpcy5kcmF3ZXIpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+XG4gICAgICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcih1dGlsLnJlbWFwRXZlbnQoZXZ0KSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PlxuICAgICAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIodXRpbC5yZW1hcEV2ZW50KGV2dCksIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJEcmF3ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+XG4gICAgICAgIHRoaXMuZHJhd2VyLmFkZEV2ZW50TGlzdGVuZXIodXRpbC5yZW1hcEV2ZW50KGV2dCksIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckRyYXdlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT5cbiAgICAgICAgdGhpcy5kcmF3ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih1dGlsLnJlbWFwRXZlbnQoZXZ0KSwgaGFuZGxlciksXG4gICAgICByZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyOiAoaGFuZGxlcikgPT4gdGhpcy5kcmF3ZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyOiAoaGFuZGxlcikgPT4gdGhpcy5kcmF3ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZXIpLFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEtleWRvd25IYW5kbGVyOiAoaGFuZGxlcikgPT4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50S2V5ZG93bkhhbmRsZXI6IChoYW5kbGVyKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlciksXG4gICAgICBnZXREcmF3ZXJXaWR0aDogKCkgPT4gdGhpcy5kcmF3ZXIub2Zmc2V0V2lkdGgsXG4gICAgICBzZXRUcmFuc2xhdGVYOiAodmFsdWUpID0+IHRoaXMuZHJhd2VyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICB1dGlsLmdldFRyYW5zZm9ybVByb3BlcnR5TmFtZSgpLCB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBgdHJhbnNsYXRlWCgke3ZhbHVlfXB4KWApLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodXRpbC5zdXBwb3J0c0Nzc0N1c3RvbVByb3BlcnRpZXMoKSkge1xuICAgICAgICAgIHRoaXMucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkoT1BBQ0lUWV9WQVJfTkFNRSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0Rm9jdXNhYmxlRWxlbWVudHM6ICgpID0+IHRoaXMuZHJhd2VyLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMRU1FTlRTKSxcbiAgICAgIHNhdmVFbGVtZW50VGFiU3RhdGU6IChlbCkgPT4gdXRpbC5zYXZlRWxlbWVudFRhYlN0YXRlKGVsKSxcbiAgICAgIHJlc3RvcmVFbGVtZW50VGFiU3RhdGU6IChlbCkgPT4gdXRpbC5yZXN0b3JlRWxlbWVudFRhYlN0YXRlKGVsKSxcbiAgICAgIG1ha2VFbGVtZW50VW50YWJiYWJsZTogKGVsKSA9PiBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpLFxuICAgICAgbm90aWZ5T3BlbjogKCkgPT4gdGhpcy5lbWl0KE1EQ1RlbXBvcmFyeURyYXdlckZvdW5kYXRpb24uc3RyaW5ncy5PUEVOX0VWRU5UKSxcbiAgICAgIG5vdGlmeUNsb3NlOiAoKSA9PiB0aGlzLmVtaXQoTURDVGVtcG9yYXJ5RHJhd2VyRm91bmRhdGlvbi5zdHJpbmdzLkNMT1NFX0VWRU5UKSxcbiAgICAgIGlzUnRsOiAoKSA9PiBnZXRDb21wdXRlZFN0eWxlKHRoaXMucm9vdF8pLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJyxcbiAgICAgIGlzRHJhd2VyOiAoZWwpID0+IGVsID09PSB0aGlzLmRyYXdlcixcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuY29uc3QgVEFCX0RBVEEgPSAnZGF0YS1tZGMtdGFiaW5kZXgnO1xuY29uc3QgVEFCX0RBVEFfSEFORExFRCA9ICdkYXRhLW1kYy10YWJpbmRleC1oYW5kbGVkJztcblxubGV0IHN0b3JlZFRyYW5zZm9ybVByb3BlcnR5TmFtZV87XG5sZXQgc3VwcG9ydHNQYXNzaXZlXztcblxuLy8gUmVtYXAgdG91Y2ggZXZlbnRzIHRvIHBvaW50ZXIgZXZlbnRzLCBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgdG91Y2ggZXZlbnRzLlxuZXhwb3J0IGZ1bmN0aW9uIHJlbWFwRXZlbnQoZXZlbnROYW1lLCBnbG9iYWxPYmogPSB3aW5kb3cpIHtcbiAgaWYgKCEoJ29udG91Y2hzdGFydCcgaW4gZ2xvYmFsT2JqLmRvY3VtZW50KSkge1xuICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgY2FzZSAndG91Y2hzdGFydCc6XG4gICAgICByZXR1cm4gJ3BvaW50ZXJkb3duJztcbiAgICBjYXNlICd0b3VjaG1vdmUnOlxuICAgICAgcmV0dXJuICdwb2ludGVybW92ZSc7XG4gICAgY2FzZSAndG91Y2hlbmQnOlxuICAgICAgcmV0dXJuICdwb2ludGVydXAnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZXZlbnROYW1lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudE5hbWU7XG59XG5cbi8vIENob29zZSB0aGUgY29ycmVjdCB0cmFuc2Zvcm0gcHJvcGVydHkgdG8gdXNlIG9uIHRoZSBjdXJyZW50IGJyb3dzZXIuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtUHJvcGVydHlOYW1lKGdsb2JhbE9iaiA9IHdpbmRvdywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgaWYgKHN0b3JlZFRyYW5zZm9ybVByb3BlcnR5TmFtZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICBjb25zdCBlbCA9IGdsb2JhbE9iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eU5hbWUgPSAoJ3RyYW5zZm9ybScgaW4gZWwuc3R5bGUgPyAndHJhbnNmb3JtJyA6ICctd2Via2l0LXRyYW5zZm9ybScpO1xuICAgIHN0b3JlZFRyYW5zZm9ybVByb3BlcnR5TmFtZV8gPSB0cmFuc2Zvcm1Qcm9wZXJ0eU5hbWU7XG4gIH1cblxuICByZXR1cm4gc3RvcmVkVHJhbnNmb3JtUHJvcGVydHlOYW1lXztcbn1cblxuLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBDU1MgcHJvcGVydGllcy5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c0Nzc0N1c3RvbVByb3BlcnRpZXMoZ2xvYmFsT2JqID0gd2luZG93KSB7XG4gIGlmICgnQ1NTJyBpbiBnbG9iYWxPYmopIHtcbiAgICByZXR1cm4gZ2xvYmFsT2JqLkNTUy5zdXBwb3J0cygnKC0tY29sb3I6IHJlZCknKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiA9IHdpbmRvdywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCB7Z2V0IHBhc3NpdmUoKSB7XG4gICAgICAgIGlzU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfID8ge3Bhc3NpdmU6IHRydWV9IDogZmFsc2U7XG59XG5cbi8vIFNhdmUgdGhlIHRhYiBzdGF0ZSBmb3IgYW4gZWxlbWVudC5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRWxlbWVudFRhYlN0YXRlKGVsKSB7XG4gIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoVEFCX0RBVEEsIGVsLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG4gIH1cbiAgZWwuc2V0QXR0cmlidXRlKFRBQl9EQVRBX0hBTkRMRUQsIHRydWUpO1xufVxuXG4vLyBSZXN0b3JlIHRoZSB0YWIgc3RhdGUgZm9yIGFuIGVsZW1lbnQsIGlmIGl0IHdhcyBzYXZlZC5cbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlRWxlbWVudFRhYlN0YXRlKGVsKSB7XG4gIC8vIE9ubHkgbW9kaWZ5IGVsZW1lbnRzIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCwgaW4gY2FzZSBhbnl0aGluZyB3YXMgZHluYW1pY2FsbHkgYWRkZWQgc2luY2Ugd2Ugc2F2ZWQgc3RhdGUuXG4gIGlmIChlbC5oYXNBdHRyaWJ1dGUoVEFCX0RBVEFfSEFORExFRCkpIHtcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKFRBQl9EQVRBKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIGVsLmdldEF0dHJpYnV0ZShUQUJfREFUQSkpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFRBQl9EQVRBKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoVEFCX0RBVEFfSEFORExFRCk7XG4gIH1cbn1cbiJdfQ==

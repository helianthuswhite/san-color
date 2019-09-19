(function (san, sanColor) {
  'use strict';

  

  function __$styleInject(css) {
      if (!css) return;

      if (typeof window == 'undefined') return;
      var style = document.createElement('style');
      style.setAttribute('media', 'screen');

      style.innerHTML = css;
      document.head.appendChild(style);
      return css;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  __$styleInject("* {\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.top {\n  position: relative;\n  height: 580px;\n}\n.top .container {\n  padding-top: 40px;\n}\n.top .intro {\n  width: 380px;\n}\n.top .intro h1 {\n  font-size: 50px;\n  font-weight: 100;\n  margin: 30px 0 10px;\n  color: #fff;\n}\n.top .intro p {\n  font-size: 20px;\n  color: #e2e5e5;\n  margin-bottom: 20px;\n}\n.top .sketch {\n  position: absolute;\n  bottom: -100px;\n}\n.top .sketch .component-title {\n  margin-top: 20px;\n  text-align: center;\n  color: #666;\n}\n.container {\n  width: 780px;\n  margin: 0 auto;\n}\n");

  var _class, _temp;
  var MainComponent = (_temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(MainComponent, _Component);

    function MainComponent() {
      _classCallCheck(this, MainComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(MainComponent).apply(this, arguments));
    }

    _createClass(MainComponent, [{
      key: "initData",
      value: function initData() {
        return {
          color: {}
        };
      }
    }]);

    return MainComponent;
  }(san.Component), _defineProperty(_class, "template",
  /* html */
  "\n        <template>\n            <div class=\"top\" style=\"{{topStyle}}\">\n                <a class=\"github-fork-ribbon\" href=\"https://github.com/helianthuswhite/san-color\"\n                    title=\"Fork me on GitHub\">Fork me on GitHub</a>\n                <div class=\"container\">\n                    <div class=\"intro\">\n                        <h1>San Color</h1>\n                        <p>A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter, Material Design & more</p>\n                    </div>\n                    <div class=\"star-button\">\n                        <iframe src=\"https://ghbtns.com/github-btn.html?user=helianthuswhite&repo=san-color&type=star&count=true&size=large\"\n                            scrolling=\"0\" width=\"160px\" height=\"30px\" frameborder=\"0\"></iframe>\n                    </div>\n                    <div class=\"sketch\">\n                        <x-sketch color=\"{=color=}\" default-color=\"#108cee\" />\n                        <p class=\"component-title\">Sketch</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bottom\"></div>\n        </template>\n    "), _defineProperty(_class, "components", {
    'x-sketch': sanColor.Sketch
  }), _defineProperty(_class, "computed", {
    topStyle: function topStyle() {
      var rgba = this.data.get('color.rgba') || {};
      var rgbStr = [rgba.r, rgba.g, rgba.b].join(',');
      return {
        background: "rgba(".concat(rgbStr, ")")
      };
    }
  }), _temp);
  new MainComponent().attach(document.getElementById('main'));

}(san, SanColor));

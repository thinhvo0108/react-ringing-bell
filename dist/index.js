(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.index = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var elementName = '__react-ringing-bell__';
    var componentOK = true;

    var RingingBell = function (_React$Component) {
        _inherits(RingingBell, _React$Component);

        function RingingBell(props) {
            _classCallCheck(this, RingingBell);

            var _this = _possibleConstructorReturn(this, (RingingBell.__proto__ || Object.getPrototypeOf(RingingBell)).call(this, props));

            _this.triggerRing = _this.triggerRing.bind(_this);
            return _this;
        }

        _createClass(RingingBell, [{
            key: 'componentDidMount',
            value: function componentDidMount() {}
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {}
        }, {
            key: 'triggerRing',
            value: function triggerRing() {
                var _this2 = this;

                this.refs[elementName].className = elementName + 'self-animated';
                setTimeout(function () {
                    _this2.refs[elementName].className = '';
                }, this.props.effectDuration);
            }
        }, {
            key: 'render',
            value: function render() {
                var styleEle = _react2.default.createElement(
                    'style',
                    null,
                    '\
              @-webkit-keyframes ' + elementName + 'ring {\
                0% { -webkit-transform: rotateZ(0); }\
                1% { -webkit-transform: rotateZ(30deg); }\
                3% { -webkit-transform: rotateZ(-28deg); }\
                5% { -webkit-transform: rotateZ(34deg); }\
                7% { -webkit-transform: rotateZ(-32deg); }\
                9% { -webkit-transform: rotateZ(30deg); }\
                11% { -webkit-transform: rotateZ(-28deg); }\
                13% { -webkit-transform: rotateZ(26deg); }\
                15% { -webkit-transform: rotateZ(-24deg); }\
                17% { -webkit-transform: rotateZ(22deg); }\
                19% { -webkit-transform: rotateZ(-20deg); }\
                21% { -webkit-transform: rotateZ(18deg); }\
                23% { -webkit-transform: rotateZ(-16deg); }\
                25% { -webkit-transform: rotateZ(14deg); }\
                27% { -webkit-transform: rotateZ(-12deg); }\
                29% { -webkit-transform: rotateZ(10deg); }\
                31% { -webkit-transform: rotateZ(-8deg); }\
                33% { -webkit-transform: rotateZ(6deg); }\
                35% { -webkit-transform: rotateZ(-4deg); }\
                37% { -webkit-transform: rotateZ(2deg); }\
                39% { -webkit-transform: rotateZ(-1deg); }\
                41% { -webkit-transform: rotateZ(1deg); }\
                43% { -webkit-transform: rotateZ(0); }\
                100% { -webkit-transform: rotateZ(0); }\
              }\
              @-moz-keyframes ' + elementName + 'ring {\
                0% { -moz-transform: rotate(0); }\
                1% { -moz-transform: rotate(30deg); }\
                3% { -moz-transform: rotate(-28deg); }\
                5% { -moz-transform: rotate(34deg); }\
                7% { -moz-transform: rotate(-32deg); }\
                9% { -moz-transform: rotate(30deg); }\
                11% { -moz-transform: rotate(-28deg); }\
                13% { -moz-transform: rotate(26deg); }\
                15% { -moz-transform: rotate(-24deg); }\
                17% { -moz-transform: rotate(22deg); }\
                19% { -moz-transform: rotate(-20deg); }\
                21% { -moz-transform: rotate(18deg); }\
                23% { -moz-transform: rotate(-16deg); }\
                25% { -moz-transform: rotate(14deg); }\
                27% { -moz-transform: rotate(-12deg); }\
                29% { -moz-transform: rotate(10deg); }\
                31% { -moz-transform: rotate(-8deg); }\
                33% { -moz-transform: rotate(6deg); }\
                35% { -moz-transform: rotate(-4deg); }\
                37% { -moz-transform: rotate(2deg); }\
                39% { -moz-transform: rotate(-1deg); }\
                41% { -moz-transform: rotate(1deg); }\
                43% { -moz-transform: rotate(0); }\
                100% { -moz-transform: rotate(0); }\
              }\
              @keyframes ' + elementName + 'ring {\
                0% { transform: rotate(0); }\
                1% { transform: rotate(30deg); }\
                3% { transform: rotate(-28deg); }\
                5% { transform: rotate(34deg); }\
                7% { transform: rotate(-32deg); }\
                9% { transform: rotate(30deg); }\
                11% { transform: rotate(-28deg); }\
                13% { transform: rotate(26deg); }\
                15% { transform: rotate(-24deg); }\
                17% { transform: rotate(22deg); }\
                19% { transform: rotate(-20deg); }\
                21% { transform: rotate(18deg); }\
                23% { transform: rotate(-16deg); }\
                25% { transform: rotate(14deg); }\
                27% { transform: rotate(-12deg); }\
                29% { transform: rotate(10deg); }\
                31% { transform: rotate(-8deg); }\
                33% { transform: rotate(6deg); }\
                35% { transform: rotate(-4deg); }\
                37% { transform: rotate(2deg); }\
                39% { transform: rotate(-1deg); }\
                41% { transform: rotate(1deg); }\
                43% { transform: rotate(0); }\
                100% { transform: rotate(0); }\
              }\
              .' + elementName + 'self-animated {\
                -webkit-animation-name: ' + elementName + 'ring;\
                -webkit-animation-duration: ' + this.props.effectDuration + 'ms;\
                -webkit-transform-origin:50% 4px;\
                -webkit-animation-iteration-count: infinite;\
                -webkit-animation-timing-function: linear;\
              }\
            '
                );
                return _react2.default.createElement(
                    'div',
                    { ref: elementName },
                    styleEle,
                    this.props.children
                );
            }
        }]);

        return RingingBell;
    }(_react2.default.Component);

    RingingBell.defaultProps = {
        effectDuration: 8000
    };

    exports.default = RingingBell;
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TADview = function () {
    function TADview() {
        _classCallCheck(this, TADview);
    }

    _createClass(TADview, [{
        key: 'beforeRegister',
        value: function beforeRegister() {
            this.is = 'tad-view';
            this.properties = {
                previews: {
                    type: Array,
                    observer: 'previewsChanged'
                },
                color: {
                    type: String,
                    value: '666666',
                    observer: '_changeModelColor'
                },
                options: {
                    type: Object,
                    value: function value() {
                        return {};
                    }
                }
            };
        }
    }, {
        key: 'unloadObj',
        value: function unloadObj() {
            this.viewer.unloadObj();
            this.isTADviewReady = false;
        }
    }, {
        key: 'showPreview',
        value: function showPreview(preview) {
            return this.selectedPreview === preview;
        }
    }, {
        key: 'showViewerArrows',
        value: function showViewerArrows(previews) {
            return previews && previews.length > 1;
        }
    }, {
        key: 'showPreviousPreview',
        value: function showPreviousPreview() {
            this.unloadObj();
            this.selectedIndex = (this.selectedIndex - 1) % this.previews.length;
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.previews.length - 1;
            }
            this.getPreviewPath(this.previews[this.selectedIndex]);
        }
    }, {
        key: 'showNextPreview',
        value: function showNextPreview() {
            this.unloadObj();
            this.selectedIndex = (this.selectedIndex + 1) % this.previews.length;
            this.getPreviewPath(this.previews[this.selectedIndex]);
        }
    }, {
        key: 'renderModel',
        value: function renderModel(index) {
            var _this = this;

            //index = index || 0;
            this.viewer.render('#tad-view');
            this.viewer.resize();
            this.viewer.loadObject(this.currentModelUrl, this.fileExtension, function () {
                _this.isTADviewReady = true;
                _this.viewer.startRotating();
                _this.viewer.changeColor(_this.color);
            }, function () {
                _this.setLoadingFileErrorMessage();
                _this.viewer.stopRotating();
                _this.isTADviewReady = false;
            });
        }
    }, {
        key: 'computeErrorClass',
        value: function computeErrorClass(loadingMessage) {
            return loadingMessage === this.LOADING_ERROR ? 'error' : '';
        }
    }, {
        key: 'getPreviewPath',
        value: function getPreviewPath(prev) {
            var _this2 = this;

            this.set('loadingMessage', 'Loading...');
            var preview = prev || this.previews[0];
            this.selectedPreview = preview;
            this.selectedIndex = this.previews.indexOf(preview);

            this.fileExtension = preview.file_type;
            this.currentModelUrl = preview.file_url;
            setTimeout(function () {
                _this2.renderModel();
            });
        }
    }, {
        key: 'setLoadingFileErrorMessage',
        value: function setLoadingFileErrorMessage() {
            this.set('loadingMessage', this.LOADING_ERROR);
        }
    }, {
        key: 'previewsChanged',
        value: function previewsChanged() {
            if (this.previews && this.previews.length > 0) {
                this.isTADviewReady = false;
                this.getPreviewPath();
            }
        }
    }, {
        key: 'ready',
        value: function ready() {
            this.viewer = new Viewer();
            this.viewer.init();
        }
    }, {
        key: '_changeModelColor',
        value: function _changeModelColor() {
            if (this.viewer) {
                this.viewer.changeColor(this.color);
            }
        }
    }, {
        key: 'LOADING_ERROR',
        get: function get() {
            return 'Could not load file.';
        }
    }]);

    return TADview;
}();

Polymer(TADview);
//# sourceMappingURL=tad-view-es5.js.map


TADkit Viewer
=============

TADkit Viewer is a 3D viewer web component that displays a model of a TAD from TADbit output:

* Previews - An array of TADbit JSON output, each consisting of two properties:
 	1. file_type: "js"/"json"/"tad"
 	2. file_url: can be an absolute URL (for an S3 bucket for instance), or a relative path
* Color (optional) - If not provided, a value of #F18D05 will be used

### Demo

[https://3dgenomes.github.io/TADkit-Viewer/](https://3dgenomes.github.io/TADkit-Viewer/)

### Installation

Add Web Components shims and the TADkit Viewer polymer component to your web page e.g.:
```javascript
<script src="YOUR_ASSETS_OR_CDN_PATH/webcomponents-lite.min.js"></script>
<link rel="import" href="YOUR_ASSETS_PATH/tadkit-viewer.html">
```
Then use the tag itself with the parameters, e.g.:
```javascript
<tadkit-viewer color="ff0000"
         previews='[{"file_type": "tad", "file_url": "YOUR_DATA_PATH/my-tadbit.json"}]'></tadkit-viewer>
```
@param color : the object color
@param previews : array of objects (min. 1 required)
   @param file_type : file type "json" for generic Three.js; "tad" for TADbit json output.
    @param file_url : file location

Inspired by the ThreeDViewer component by Autodesk.
See: https://github.com/Autodesk/3DViewerComponent

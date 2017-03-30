
TADview Component
=====================

TADview is a 3D viewer web component that displays a model of a TAD from TADbit output:

* Previews - An array of TADbit JSON output, each consisting of two properties:
 	1. file_type: "js"/"json"/"tad"/"t3d" (future option could be "t4d")
 	2. file_url: can be an absolute URL (for an S3 bucket for instance), or a relative path
* Color (optional) - If not provided, a value of #F18D05 will be used

### Demo

[http://3DGenomes.github.io/TADview/index.html](http://3DGenomes.github.io/TADview/index.html)

### Installation

Add the Polymer and the TADview scripts to your HTML e.g.:
```javascript
<script src="YOUR_ASSETS_PATH/webcomponents-lite.js"></script>
<link rel="import" href="YOUR_ASSETS_PATH/tadview.html">```
Then use the tag itself with the parameters, e.g.:
```javascript
<tadview color="ff0000"
         previews='[{"file_type": "json", "file_url": "YOUR_TADBIT_PATH/my-tad.json"}]'></tadview>
```
@param color : the object color
@param previews : array of objects (min. 1 required)
   @param file_type : file type i.e. json is geeneric so e.g. "t3d" and "t4d" could be distinct types.
    @param file_url : file location

Inspired by original implementation by Autodesk.
See: https://github.com/Autodesk/3DViewerComponent

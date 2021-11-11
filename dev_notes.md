## FabricJS

http://fabricjs.com/

### install fabric and @types/fabric.

    $ npm install fabric --save-prod
    $ npm install @types/fabric --save-dev

Optional, fabric-with-gestures to try to handle gestures on mobile or touche screens

    $ npm install fabric-with-gestures --save-prod

### Basic guide on layers, rotation and scalling

ref: https://programmerall.com/article/31642130903/

### Hiding controls

Don't need transforms controls; skew, stretch, only scale

ref: http://fabricjs.com/controls-customization

```javascript
    // hiding transform controls
    fabric.Object.prototype._controlsVisibility = { ml: false, mb: false, mr: false, mt: false };
```
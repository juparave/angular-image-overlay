
### install fabric and @types/fabric.

    $ npm install fabric --save-prod
    $ npm install @types/fabric --save-dev

Optional, fabric-with-gestures to try to handle gestures on mobile or touche screens

    $ npm install fabric-with-gestures --save-prod

### Hiding controls

Don't need transforms controls; skew, stretch, only scale

ref: http://fabricjs.com/controls-customization

```javascript
    // hiding transform controls
    fabric.Object.prototype._controlsVisibility = { ml: false, mb: false, mr: false, mt: false };
```
import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-fabricjs',
  templateUrl: './fabricjs.component.html',
  styleUrls: ['./fabricjs.component.css']
})
export class FabricjsComponent implements OnInit {
  canvas: any;
  selectedFile: File;
  imgFile: string;

  constructor() { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      selection: false,
      controlsAboveOverlay: true,
      centeredScaling: true,
      allowTouchScrolling: true
    });

    // hiding transform controls
    fabric.Object.prototype._controlsVisibility = { ml: false, mb: false, mr: false, mt: false };

    this.method2();

  }

  method2() {
    //  Method 2 (add by picture path)
    fabric.Image.fromURL('assets/TL-2930_1.png', (img) => {
      img.set({
        left: 100, //  Image of the picture relative to the left side of the canvas
        top: 100, //  Picture of the top distance of the canvas
        angle: 30, //  Picture rotation angle
        opacity: 1.00, //  Picture transparency
        //  Here you can set the size of the picture after SCALEX and SCALEY, here is half the size of the original size
        scaleX: 0.5,
        scaleY: 0.5
      });
      //  Add object
      this.canvas.add(img);
    });

    // remove some controls
    this.canvas.item(0)['ml'] = false;
    this.canvas.renderAll();
  }

  addOther() {
    //  Method 2 (add by picture path)
    fabric.Image.fromURL('assets/TL-5150-CAN.png', (img) => {
      img.set({
        left: 100, //  Image of the picture relative to the left side of the canvas
        top: 100, //  Picture of the top distance of the canvas
        // angle: 30, //  Picture rotation angle
        opacity: 1.00, //  Picture transparency
        //  Here you can set the size of the picture after SCALEX and SCALEY, here is half the size of the original size
        scaleX: 0.5,
        scaleY: 0.5
      });
      //  Add object
      let o = this.canvas.add(img);
      console.log("Object o", o);

      o['ml'] = false;
    });
  }

  method1() {
    /*
 * How to add an image object to the canvas?
*/
    //  Method 1 (added via IMG element)
    const imgElement = document.getElementById('img') as HTMLImageElement;
    const imgInstance = new fabric.Image(imgElement, {
      left: 100, //  Image of the picture relative to the left side of the canvas
      top: 100, //  Picture of the top distance of the canvas
      angle: 30, //  Picture rotation angle
      opacity: 0.85, //  Picture transparency
      //  Here you can set the size of the picture after SCALEX and SCALEY, here is half the size of the original size
      scaleX: 0.5,
      scaleY: 0.5
    });
    //  After adding an object, as shown below
    this.canvas.add(imgInstance);
  }

  onFileChanged(event) {
    const reader = new FileReader();
    this.selectedFile = event.target.files[0];
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.imgFile = reader.result as string;
      this.setBackground();
    };
  }

  setBackground() {
    fabric.Image.fromURL(this.imgFile, (img) => {
      img.set({
        //  Set the picture size by scale, the settings and canvas are as large
        scaleX: this.canvas.width / img.width,
        scaleY: this.canvas.height / img.height,
      });
      //  Set background
      this.canvas.setBackgroundImage(img, this.canvas.renderAll.bind(this.canvas));
      this.canvas.renderAll();
    });
  }

}

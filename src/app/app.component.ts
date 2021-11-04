import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  selectedFile: File;
  imgFile: string;

  onFileChanged(event) {
    const reader = new FileReader();
    this.selectedFile = event.target.files[0];
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.imgFile = reader.result as string;
    };


  }

  onImageChange(e) {
    const reader = new FileReader();
    
    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.imgFile = reader.result as string;

   
      };
    }
  }

  onUpload() {
    // upload code goes here
  }
}

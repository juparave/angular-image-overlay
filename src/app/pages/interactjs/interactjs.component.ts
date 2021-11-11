import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-interactjs',
  templateUrl: './interactjs.component.html',
  styleUrls: ['./interactjs.component.css']
})
export class InteractjsComponent implements OnInit {
  
  name = 'Angular ' + VERSION.major;
  selectedFile: File;
  imgFile: string;
  
  ngOnInit(): void {
  }

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

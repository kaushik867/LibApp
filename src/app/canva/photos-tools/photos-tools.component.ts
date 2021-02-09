import { APP_ID, Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader/services/loader.service';
import { PhotosService } from 'src/app/photos/services/photos.service';


declare global {
  interface Window {
    Canva;
    api;
  }
}
@Component({
  selector: 'app-photos-tools',
  templateUrl: './photos-tools.component.html',
  styleUrls: ['./photos-tools.component.css']
})
export class PhotosToolsComponent implements OnInit{
  photos;
  api;
  constructor(private _http: PhotosService, public loader:LoaderService) {
  
  }

  ngOnInit(): void {
    // (function(doc,url){
    //   var JSElement = doc.createElement('script');
    //   JSElement.src = url;
    //   doc.getElementsByTagName('head')[0].appendChild(JSElement);
    // }(document,'https://sdk.canva.com/designbutton/v2/api.js'));

    this._http.getphotos(1,8).subscribe(data=>{
      this.photos = [...data];
    });

    (function (document, url) {
      var script = document.createElement('script');
      script.src = url;
      script.onload = async function () {
        if (window.Canva && window.Canva.DesignButton) {
          const api = await window.Canva.DesignButton.initialize({
            apiKey: 'sqKsxfkiaqNkrWb9EhWlE4pG',
          });
          window.api=api;
        }
      }
      document.body.appendChild(script);
    })(document, 'https://sdk.canva.com/designbutton/v2/api.js');
  }

  designCanva(){
    window.api.createDesign({
      design: {
        type: 'Poster',
      },
      onDesignOpen: ({ designId }) => {
        // Triggered when editor finishes loading and opens a new design.
        // You can save designId for future use.
      },
      onDesignPublish: ({ exportUrl, designId }) => {
        // Triggered when design is published to an image.
        // Save the image to your server as the exportUrl will expire shortly.
      },
      onDesignClose: () => {
        // Triggered when editor is closed.
      },
    });
  }

  loadApi(){
    
  }
  

}


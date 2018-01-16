import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  
  template: `
   <h1>Pixabay Images </h1>

  <div class="container-fluid">
      <div class="row">
          <div> 
              <div class="image col-md-6" *ngFor="let Image of data.hits">
              <p> {{Image.user}} </p><br>
              <a href="{{Image.pageURL}}" target="_blank"> 
                <img  src="{{Image.webformatURL}}"  />
              </a><br>
                  <span class="likes">
                      <strong>Likes</strong>
                      {{Image.likes}}<br>

                  </span>
                  <span class="comments">
                    <strong>Comments</strong>
                    {{Image.comments}}<br>

              </span>
              <span class="downloads">
                <strong>Downloads</strong>
                {{Image.downloads}}

              </span>

              </div>
            </div>

        </div>
  </div>









  
  `,
  
  
  

})
export class AppComponent {

  private apiUrl = 'https://pixabay.com/api/?key=7715586-bca68e2defed577a777f241c1';
  data: any = {};
  

  constructor(private http: Http){

      this.getData();
      this.getImages();
      
    
  }
  
  
  getData(){
    
    return this.http.get(this.apiUrl)
        .map((res: Response) => res.json())
  }

  getImages(){
        this.getData().subscribe(data => {
          this.data=data; //you have to initilize it for it to work. this was missing why the code didn't work
          console.log(data);
        })
  }
  









}

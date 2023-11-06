import { Component, OnInit } from '@angular/core';
import  { DetailpostsService } from '../services/detailposts.service'
import { IDetailPosts } from '../interface/idetailposts';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})

  export class PostdetailComponent implements OnInit {

    public detailposts: IDetailPosts[] = [];
    // Deklarerar detailposts som en array som följer samma struktur som intefacet. 
  
    constructor(public detailpostsService : DetailpostsService) {}
    // Dependency injection för att hämta datan som finns i service.
  
    ngOnInit(){
      this.detailposts = this.detailpostsService.getPosts();
    }
   // Här anropar jag getPost för att hämta datan och lägga in den i egenskapen för att kunna visa datan i komponenten.
}

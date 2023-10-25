import { Component, OnInit } from '@angular/core';
import  { DetailpostsService } from '../services/detailposts.service'
import { IDetailPosts } from '../interface/idetailposts';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  public detailposts: IDetailPosts[] = [];
  // deklarerar detailposts som en array som följer samma struktur som intefacet. 

  constructor(public detailpostsService : DetailpostsService) {}
  // dependency injection för att hämta datan som finns i service.

  ngOnInit(){
    this.detailposts = this.detailpostsService.getPosts();
  }
 // Här anropar jag getPost för att hämta datan och lägga in den i egenskapen för att kunna visa datan i komponenten.


}

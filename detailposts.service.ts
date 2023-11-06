import { Injectable} from '@angular/core';
import { IDetailPosts } from "../interface/idetailposts";



@Injectable({
  providedIn: 'root'
})

export class DetailpostsService {
private detailposts: IDetailPosts[] = [];
// En private detailposts som tar in IdetailPosts interfacet och deklarerar en tom array. 
  constructor() { }

 getPosts(){

  return this.detailposts=[
{
    title: "Jennie",
    thumbnailUrl: "",
    body: "this is the contnent",
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: [],
}
  ];
  
 }
}
// Ger interfacet värden.
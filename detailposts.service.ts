import { Injectable} from '@angular/core';
import { IDetailPosts } from "../interface/idetailposts";



@Injectable({
  providedIn: 'root'
})

export class DetailpostsService {
public detailposts: IDetailPosts[] = [];

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
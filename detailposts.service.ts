import { Injectable} from '@angular/core';
import { IDetailPosts } from "../interface/idetailposts";



@Injectable({
  providedIn: 'root'
})

export class DetailpostsService {

private localdetailposts: IDetailPosts[] = [];
// En private detailposts som tar in IdetailPosts interfacet och deklarerar en tom array. 

constructor() { 
this.localdetailposts = this.loadlocaldata();
  }
// Sparar värdet från loadlocaldata i localdetailposts arrayen. 

private loadlocaldata(): IDetailPosts[] {
let post = localStorage.getItem ("post")
return !post ? [] : JSON.parse(post)
}
// Funktion för att spara interfacevärdet i loadlocaldata. 

public getpostsDetail(): IDetailPosts[] {
  return this.localdetailposts;
}


public addPost(
  title: string,
  thumbnailUrl: string,
  body: string,
  creationDate: Date,
  likes: number,
  dislikes: number,
  comments: string[],)
  {this.localdetailposts.push({
    title,
    thumbnailUrl,
    body,
    creationDate,
    likes: 0,
    dislikes,
    comments
  });
  localStorage.setItem("post", JSON.stringify(this.localdetailposts));
  }
}

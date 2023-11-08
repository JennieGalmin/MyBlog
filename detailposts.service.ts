import { Injectable} from '@angular/core';
import { IDetailPosts } from "../interface/idetailposts";



@Injectable({
  providedIn: 'root'
})

export class DetailpostsService {

private localdetailposts: IDetailPosts[] = [];
// En private localdetailposts som tar in IdetailPosts interfacet och deklarerar en tom array. 

constructor() { 
this.localdetailposts = this.loadlocaldata();
  }
// Sparar värdet från loadlocaldata i localdetailposts för att spara datan till localstorage.  

private loadlocaldata(): IDetailPosts[] {
let post = localStorage.getItem ("post")
return !post ? [] : JSON.parse(post)
}
// Funktion för att spara interfacevärdet i loadlocaldata. 

public getpostsDetail(): IDetailPosts[] {
  return this.localdetailposts;
}
// En getpostsDetail funktion för att ta in gränssnittet för 
// dom detailjerade posterna och returnerar det i localdetailposts.

public addPostDetail(post: IDetailPosts ): void {
  this.localdetailposts.push(post);
  localStorage.setItem("post", JSON.stringify(this.localdetailposts));
  }
}
// En public funktion som heter addPostDetail som tar in 
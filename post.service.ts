import { Injectable } from '@angular/core';
import { Post } from '../interface/post'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private localPosts: Post[] = [];
  // En private detailposts som tar in IdetailPosts interfacet och deklarerar en tom array. 
  
  constructor() { 
  this.localPosts = this.loadlocaldata();
    }
  // Sparar värdet från loadlocaldata i localdetailposts arrayen. 
  
  private loadlocaldata(): Post[] {
  let post = localStorage.getItem ("post")
  return !post ? [] : JSON.parse(post)
  }
  // Funktion för att spara interfacevärdet i loadlocaldata. 
  
  public getPost(): Post[] {
    return this.localPosts;
  }
  
  
  public addPost(
    title: string,
    image: string,
   )
    {this.localPosts.push({
      title,
      image,
      
    });
    localStorage.setItem("post", JSON.stringify(this.localPosts));
    }
  }
  
  


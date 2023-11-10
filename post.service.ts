import { Injectable } from '@angular/core';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private localPosts: Post[] = [];
  // En private localPosts som tar in Posts interfacet och deklarerar en tom array. 
  
  constructor() { 
  this.localPosts = this.loadlocaldata();
    }
  // Sparar värdet från loadlocaldata i localPosts arrayen. 
  
  private loadlocaldata(): Post[] {
  let post = localStorage.getItem ("post")
  return !post ? [] : JSON.parse(post)
  }
  // Funktion för att spara interfacevärdet i loadlocaldata. 
  
  public getPost(): Post[] {
    return this.localPosts;
  }
  

  }
  
  


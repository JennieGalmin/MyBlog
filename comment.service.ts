
import { Injectable } from '@angular/core';
import { Comment } from '../interface/comment';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
private localComment: Comment[] = [];

  constructor() {this.localComment = this.loadComment(); }

private loadComment(): Comment[]{
  let comment = localStorage.getItem('comment')
  return !comment ? [] : JSON.parse(comment)
}
public addComment(body:string, post: Post){
this.localComment.push({
  id: this.localComment.length + 1,
  body, 
  post: post.id});
  
localStorage.setItem('comment', JSON.stringify(this.localComment));
}
}


import { Injectable } from '@angular/core';
import { Comment} from '../interface/comment';
import { IDetailPosts } from '../interface/idetailposts';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
private localComment: Comment[] = [];

constructor(){
  this.localComment = this.loadComment(); 
}

private loadComment(): Comment[]{
  let comment = localStorage.getItem('comment')
  return !comment ? [] : JSON.parse(comment);
}

public addComment(post: IDetailPosts, body: string): void {
  const newComment: Comment = {
  id: this.localComment.length + 1,
  body, 
  post: post.id
  };

this.localComment.push(newComment);
localStorage.setItem('comment', JSON.stringify(this.localComment));
}

public getCommentByPost(postId: number): Comment[]{
  return this.localComment.filter(comment => comment.post === postId);
}
}

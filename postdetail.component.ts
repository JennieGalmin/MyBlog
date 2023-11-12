import { Component, OnInit } from '@angular/core';
import { Comment } from '../interface/comment'
import { DetailpostsService } from '../services/detailposts.service'
import { CommentService } from '../services/comment.service';
import { IDetailPosts } from '../interface/idetailposts';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css'],
 
})

  export class PostdetailComponent implements OnInit {
    public detailposts: IDetailPosts[] = [];
    // Deklarerar detailposts som en array som följer samma struktur som intefacet. 
    newComment: string = '';
    likes: number = 0; 
    dislikes: number = 0;

  
    constructor(
      public detailpostsService : DetailpostsService,
      private commentService: CommentService 
      ) {}
    // Dependency injection för att hämta datan som finns i service.
  
    ngOnInit(): void {
      this.detailposts = this.detailpostsService.getpostsDetail()
    }

    addComment(post: IDetailPosts): void{
      this.commentService.addComment(post, this.newComment)
      this.newComment = '';
    }
 
    getCommentByPost(postId: number): Comment[]{
      return this.commentService.getCommentByPost(postId)
    }

  }

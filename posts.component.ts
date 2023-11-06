import { Component } from '@angular/core';
import { PostsService } from '../services/post.service';
import { Post } from '../interface/post';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent{
constructor(private postService: PostsService){}
// hämtar postservicen

getPost(): Post[] {
  return this.postService.getPost();
}
}

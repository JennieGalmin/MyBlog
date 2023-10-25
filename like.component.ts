import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

likes: number = 0;
dislikes: number =0;

likeButtonClick(){
this.likes++;

}
dislikeButtonClick(){
this.dislikes--;
}
}

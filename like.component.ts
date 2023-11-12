import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

@Input() likes: number = 0;
@Input() dislikes: number =0;

likeButtonClick(){
this.likes++;

}
dislikeButtonClick(){
this.dislikes--;
}
}

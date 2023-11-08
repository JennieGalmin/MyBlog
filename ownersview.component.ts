import { Component } from '@angular/core';
import { DetailpostsService } from '../services/detailposts.service';
import { IDetailPosts } from '../interface/idetailposts';



@Component({
  selector: 'app-ownersview',
  templateUrl: './ownersview.component.html',
  styleUrls: ['./ownersview.component.css']
})

export class OwnersviewComponent {
constructor(private detailpostService: DetailpostsService){}
// Hämtar postservicen

newTitle: string = '';
newImage: string = '';
newBody: string = '';

addPostDetail(): void{
  const newPost: IDetailPosts = {
  title: this.newTitle,
  thumbnailUrl: this.newImage,
  body: this.newBody,
  creationDate: new Date(),
  likes: 0 ,
  dislikes: 0,
  comments: [],
};
  

this.detailpostService.addPostDetail(newPost);
this.getpostsDetail();



}
getpostsDetail(): IDetailPosts[] {
 return this.detailpostService.getpostsDetail();

}

} 
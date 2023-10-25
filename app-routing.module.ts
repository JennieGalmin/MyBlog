import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { PostsComponent } from './posts/posts.component';
import { OwnersviewComponent } from './ownersview/ownersview.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "posts", component: PostsComponent },
  { path: "owner", component: OwnersviewComponent },
  { path: "about-me", component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { UsersComponent } from './components/mainUsers/users/users.component';
import { UserComponent } from './components/mainUsers/user/user.component';
import { PostsComponent } from './components/mainPosts/posts/posts.component';
import { PostComponent } from './components/mainPosts/post/post.component';
import { CommentsComponent } from './components/mainComments/comments/comments.component';
import { CommentComponent } from './components/mainComments/comment/comment.component';
import { MainLayoytComponent } from './layout/main-layoyt/main-layoyt.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDetailsComponent } from './components/mainUsers/user-details/user-details.component';
import { PostDetailsComponent } from './components/mainPosts/post-details/post-details/post-details.component';
import { CommentDetailsComponent } from './components/mainComments/comment-details/comment-details/comment-details.component';

const routes: Routes = [
  {
    path: '', component: MainLayoytComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: "full"},
      {
        path: 'users', component: UsersComponent, children: [
          {path: ':id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'posts', component: PostsComponent, children: [
          {path: ':id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'comments', component: CommentsComponent, children:[
          {path: ':id', component: CommentDetailsComponent}
        ]},
    ]
  }
  ]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    MainLayoytComponent,
    HeaderComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

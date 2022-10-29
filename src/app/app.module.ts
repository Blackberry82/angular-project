import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/mainUsers/users/users.component';
import { UserComponent } from './components/mainUsers/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PostsComponent } from './components/mainPosts/posts/posts.component';
import { PostComponent } from './components/mainPosts/post/post.component';
import { CommentsComponent } from './components/mainComments/comments/comments.component';
import { CommentComponent } from './components/mainComments/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

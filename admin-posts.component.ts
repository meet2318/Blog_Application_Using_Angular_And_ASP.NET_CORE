import { Component,OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent {

    constructor(private postService: PostService) {}

    ngOnInit(): void{
      this.postService.getAlllPosts()
      .subscribe(
        response => {
          console.log(response);
        }
      );
    }

}

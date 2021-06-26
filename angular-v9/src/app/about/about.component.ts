import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService
  ) {}

  public age: number = 0;
  public name: string = '';
  public comments: any[] = [];
  public posts: any[] = [];

  ngOnInit(): void {
    // this.serverHttp.getProfile().subscribe((data) => {
    //   this.name = data.name;
    //   this.age = data.age;
    // });
    // this.serverHttp.getComments().subscribe((data) => {
    //   this.comments = data;
    // });
    // this.serverHttp.getPosts().subscribe((data) => {
    //   this.posts = data;
    // });
  }

  // public addPost(): void {
  //   const newData = { title: 'title 1', author: 'typicode 1' };
  //   this.serverHttp.addPost(newData).subscribe((data) => {
  //     this.posts.push(data);
  //   });
  // }
  // public UpAge(): void {
  //   this.age++;
  // }
}

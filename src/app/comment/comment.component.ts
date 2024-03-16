import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { CommentService } from './comment.service';

@Component({
  selector: 'rummy-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments$ = this.commentService.getComments();

  commentsCollection$ = this.activaterRoute.data.pipe(
    pluck('comments')
  );

  constructor(private commentService: CommentService,
    private activaterRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activaterRoute.data.subscribe(data => console.log(data['comments']));
  }
}

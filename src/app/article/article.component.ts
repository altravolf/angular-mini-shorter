import { Component, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input() article: Article;

  constructor() {
    this.article = new Article("", "");

  }

  upVote(): Boolean {
    this.article.upVote();
    return false;
  }

  downVote(): Boolean {
    this.article.downVote();
    return false;
  }

  domain(): Boolean {
    this.article.domain();
    return false;
  }

}

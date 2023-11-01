import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): Boolean {
    // console.log(`Title is: ${title.value} and Link is: ${link.value}`);
    if (title.value) {
      this.articles.push(new Article(title.value, link.value, 0));
      title.value = "";
      link.value = "";
    } else {
      alert("No Value Entered");
    }
    return false;

  }


  articles: Article[];

  // sortedArticle(): Article[] {
  //   return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  // }

  sortedArticle(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  constructor() {
    this.articles = [
      new Article('Fullstack', 'fullstack.io', 2),
      new Article("Reddit 2.0", "reddit.com", 2),
      // new Article("Google", "www.google.com", 5)
    ]
  }



}

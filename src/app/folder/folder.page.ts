import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { News } from '../models/news';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public newsLoading: boolean = true;
  news : News[];
  constructor(private activatedRoute: ActivatedRoute,
              private newsService:NewsService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.folder == 'À la Une') {
      this.newsService.getRecentNews().subscribe(
        (res)=>{
          this.news = res;
          console.log(this.news);
          this.newsLoading = false;
        }
      );
    }
    else {
      this.newsService.getNewsByCategory(this.folder).subscribe(
        (res)=>{
          this.news = res;
          console.log(this.news);
          this.newsLoading = false;
        }
      )
    }
    

  }

}

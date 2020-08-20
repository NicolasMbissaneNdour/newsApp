import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { News } from '../models/news';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsCollection : AngularFirestoreCollection<News>;
  private news : Observable<News[]>;
  private categoriesName : string[] = ['Mes favoris','Vidéos','Sport','Société','Politique','Économie','Culture','Santé','Cuisine','Technologie','Internationale'];
  private categoriesCollection : AngularFirestoreCollection<News>[] = [];
  private categoriesObservable : Observable<News[]>[] = [];
  
  constructor(private db:AngularFirestore) { 
    
  }

 

  getRecentNews(){
    this.newsCollection = this.db.collection<News>('News');
    this.news =  this.newsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          return data;
        });
      })
    );
    return this.news;
  }

  getSingleNews(id:string) {
    return this.newsCollection.doc<any>(id).valueChanges();
  }

  getNewsByCategory(category:string) {
    this.newsCollection = this.db.collection<News>('News',req => req.where('category','==' ,category));
    this.news =  this.newsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          return data;
        });
      })
    );
    return this.news;
  }
  
  updateNews(news:News) : Promise<any> {
    return new Promise(
      (resolve,reject)=>{

      }
    )
  }

  deleteNews(id:string) : Promise<any> {
    return new Promise(
      (resolve,reject)=>{

      }
    )
  }
}

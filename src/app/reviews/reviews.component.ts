import { Component, signal } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MediumService } from '../../services/medium.service';

export interface mediumPub {
 title: string | undefined;
 pubDate: string | undefined;
 link: string | undefined;
 thumbnail: string | undefined
}
@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgFor],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  data = signal<mediumPub[]>([])

  constructor(private service: MediumService){}


  ngOnInit() {
    this.service.getMediumFeed().subscribe((ret: any) =>{
      if(ret){
        console.log(ret);
        this.setArticles(ret.items)
      }
    })
  }

  private setArticles(content: any){
    console.log(content);
    content.forEach((pub: any) => {
      this.data.update((col:any) =>{
        return [...col, {
          title: pub.title,
          pubDate: pub.pubDate,
          link: pub.link,
          thumbnail: pub.thumbnail
        }]
      })
    });
  }
}

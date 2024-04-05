import { Component, signal } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MediumService } from '../../services/medium.service';

export interface mediumPub {
 title: string | undefined;
 pubDate: string | undefined;
 link: string | undefined;
 photo: string | undefined
}
@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgFor],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  element!: HTMLImageElement;
  data = signal<mediumPub[]>([]);

  constructor(private service: MediumService){}


  ngOnInit() {
    this.service.getMediumFeed().subscribe((ret: any) =>{
      if(ret){
        this.setArticles(ret.items)
      }
    })
  }

  private setArticles(content: any){
    content.forEach((pub: any) => {
      this.data.update((col:any) =>{
        return [...col, {
          title: pub.title,
          pubDate: pub.pubDate,
          link: pub.link,
          photo: this.getImgFromItem(pub.content)
        }]
      })
    });
  }

  getImgFromItem(htmlString: string){
    let regex = /<img.*?src="(.*?)"/;
    let src = regex.exec(htmlString)![1];
    return src as unknown as HTMLImageElement
  }
}

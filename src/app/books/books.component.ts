import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';

export interface Book {
  title: string;
  author: string;
  description: string;
  imgLink: string;
  previewLink: string;
}

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})

export class BooksComponent {

  public booksFromShelf : Book[] = [];
  public dataFromService: any | undefined;

  public shelves: any = {
    favorites: 0,
    toRead: 2,
    readingNow: 3,
    haveRead: 4,
    books2023: 1002,
    books2024: 1003,
    myShelf: 1001
  }

  constructor(private service: BooksService){
  }

  ngOnInit(){
    this.service.getBooksShelf(this.shelves.favorites).subscribe((ret: any) =>{
      if(ret){
        this.dataFromService = ret
        this.createShelf(this.dataFromService);
      }
    })
  }

  public createShelf(data: any){
    if(data){
    this.booksFromShelf =  data.map((el: any) => ({
        title: el.volumeInfo.title,
        author: el.volumeInfo.authors[0],
        description: el.volumeInfo.description,
        imgLink:el.volumeInfo.imageLinks.smallThumbnail,
        previewLink: el.volumeInfo.previewLink,
      }));
    }
    console.log(this.booksFromShelf);
    
  }

}

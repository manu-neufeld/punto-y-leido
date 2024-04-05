import { Component, signal } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { BooksService } from '../../services/books.service';

export interface Book {
  title: string;
  author: string;
  description: string;
  imgLink: string;
  previewLink: string;
  publisher: string;
  publishDate: Date;
  categories: string;
}

export interface Shelf {
  id: number
  name: string,
}

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})

export class BooksComponent {

  public booksFromShelf = signal<Book[]>([])
  public dataFromService: any | undefined;

  public activeShelf: number = 0

  object = Object;

  public shelves: Shelf[] = [
    {
      id: 0,
      name: "Favoritos"
    },
    {
      id:2,
      name: "Por leer"
    },
    {
      id:3,
      name: "Leyendo ahora"
    },
    {
      id:4,
      name: "Leídos"
    },
    {
      id:1002,
      name: "Libros de 2023"
    },
     {
      id:1003,
      name: "Libros de 2024"
    },
    {
      id:1001,
      name: "Mi librería personal"
    }
  ]

  constructor(private service: BooksService) {
  }

  ngOnInit() {
    this.getShelf(this.shelves[0].id);
  }

  public createShelf(data: any) {
    if (data) {
      this.booksFromShelf.update((booksSignal: Book[]) => {
        return booksSignal = data.map((el: any) => ({
          title: el.volumeInfo.title ? el.volumeInfo.title : null,
          author: el.volumeInfo.authors ? el.volumeInfo.authors[0] : null,
          description: el.volumeInfo.description ? el.volumeInfo.description : null,
          imgLink: el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.thumbnail : '"../../assets/img/generic.jpg',
          previewLink: el.volumeInfo.previewLink ? el.volumeInfo.previewLink : null,
          publisher : el.volumeInfo.publisher ? el.volumeInfo.publisher : null,
          publishDate : el.volumeInfo.publishedDate ? el.volumeInfo.publishDate : null,
          categories : el.volumeInfo.categories ? el.volumeInfo.categories[0] : null,
        }));
      });
    }
    console.log(this.booksFromShelf());

  }

  getShelf(shelf: number){
    this.activeShelf = shelf;
    this.service.getBooksShelf(shelf).subscribe((ret: any) => {
      if (ret) {
        this.dataFromService = ret
        this.createShelf(this.dataFromService);
      }
    })
  }

}

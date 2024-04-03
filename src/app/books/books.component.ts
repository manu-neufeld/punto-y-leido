import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {

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
        console.log(ret);
        
      }
    })
  }

}

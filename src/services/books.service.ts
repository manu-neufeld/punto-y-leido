import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  public urlBooks: string = "https://www.googleapis.com/books/v1/users/111053013139583379494/bookshelves/";
  public volumesKey: string = "/volumes?key=AIzaSyDVgtUTxsRq9GSbiB0Q5isYrHIbpDpSBn8";


  public getBooksShelf(shelf: string): Observable<any> {
    return this.http.get<any>(this.urlBooks + shelf + this.volumesKey).pipe(
      map((data: any) => {
        return data.items;
      }),
      catchError((err) => {
        console.log(err);
        return of(undefined);
      })
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediumService {

  constructor(private http: HttpClient) { }

  public urlFeed: string = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@puntoleido';

  public getMediumFeed(): Observable<any>{
    return this.http.get<any>(this.urlFeed).pipe(
      map((data: any) => {
        return data
      }),
      catchError((err) => {
        return of(undefined);
      })
    )
  }
}

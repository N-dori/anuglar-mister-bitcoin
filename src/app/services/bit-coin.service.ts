import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import { catchError, retry, tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BitCoinService {

  constructor(private http:HttpClient) { 

  }
  public bitCoinRate() {
    return this.http.get<number>('https://blockchain.info/tobtc?currency=USD&value=1')
        .pipe(
            map(res => res),
            tap(res => console.log('res',res)
            ),
            retry(1),
            catchError((err: HttpErrorResponse) => {
                console.log('err:', err)
                return throwError(() => err)
            })
        )
}
  public fatchData(link:string) {
    return this.http.get<[{x:number,y:number}]>(`https://api.blockchain.info/charts/${link}?timespan=5months&format=json&cors=true`)
        .pipe(
            map(res => res.values),
            tap(res => console.log('res',res)
            ),
            retry(1),
            catchError((err: HttpErrorResponse) => {
                console.log('err:', err)
                return throwError(() => err)
            })
        )
}
}


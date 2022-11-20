import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Dow } from './dow';

@Injectable({
  providedIn: 'root'
})
export class Dow30Service {
  next(dow: Dow) {
    throw new Error('Method not implemented.');
  }
  private url = 'https://infinite-cove-12734.herokuapp.com';
  private dow30$: Subject<Dow[]> = new Subject();

  constructor(private httpClient: HttpClient) {}

  private refreshDow30() {
    this.httpClient.get<Dow[]>(`${this.url}/dow`).subscribe((dow30) => {
      this.dow30$.next(dow30);
    });
  }

  getDow30(): Subject<Dow[]> {
    this.refreshDow30();
    return this.dow30$;
  }
}

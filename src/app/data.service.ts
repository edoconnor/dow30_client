import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  next(data: Data) {
    throw new Error('Method not implemented.');
  }
  private url = 'https://infinite-cove-12734.herokuapp.com';
  private datas$: Subject<Data[]> = new Subject();

  constructor(private http: HttpClient) {}

  private refreshDatas() {
    this.http.get<Data[]>(`${this.url}/dow`).subscribe((datas) => {
      this.datas$.next(datas);
    });
  }
  getDatas(): Subject<Data[]> {
    this.refreshDatas();
    return this.datas$;
  }
}

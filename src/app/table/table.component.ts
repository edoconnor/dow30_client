import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  datas$: Observable<Data[]> = new Observable();

  constructor(private dataService: DataService) {}

  visible: any = {};

  ngOnInit(): void {
    this.fetchDatas();
  }

  private fetchDatas(): void {
    this.datas$ = this.dataService.getDatas();
  }
}

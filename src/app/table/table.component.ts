import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Dow } from '../dow';
import { Dow30Service } from '../dow30.service';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'symbol', 'ebitda', 'mktcap'];

  dataSource = this.dow30Service;

  constructor(private dow30Service: Dow30Service) {}

  ngOnInit(): void {
    this.fetchDow30();
  }

  private fetchDow30(): void {
    this.dow30$ = this.dow30Service.getDow30();
  }
}

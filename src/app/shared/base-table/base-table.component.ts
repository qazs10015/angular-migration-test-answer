import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {

  @Input() cols: string[];
  @Input() tableData: any;
  constructor() { }

  ngOnInit(): void {

  }

}

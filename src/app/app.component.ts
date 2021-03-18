import { DataService } from './service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';

  cols = [
    '報酬指數',
    '收盤指數',
    '漲跌(+/-) ',
    '漲跌點數',
    '漲跌百分比(%)',
    '特殊處理註記',
  ];

  table1Data = [];
  table2Data = [];
  constructor(public dataService: DataService) {

  }
  ngOnInit(): void {

    this.dataService.getTable1().subscribe((res: any) => this.table1Data = res.data);
    this.dataService.getTable2().subscribe((res: any) => this.table2Data = res.data);
  }
}

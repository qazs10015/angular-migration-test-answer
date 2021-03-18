import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTable1() {
    return this.http.get('assets/json/data1.json');
  }
  getTable2() {
    return this.http.get('assets/json/data2.json');
  }
}

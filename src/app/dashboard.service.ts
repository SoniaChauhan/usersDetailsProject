import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }

  userId = null;

  getSales() {
    return of({
      "year1": {
        "volumeSales": "0.09",
        "valueSales": "1.23"
      },
      "year2": {
        "volumeSales": "0.11",
        "valueSales": "1.56"
      },
      "year3": {
        "volumeSales": "0.12",
        "valueSales": "1.69"
      },
      "year4": {
        "volumeSales": "0.12",
        "valueSales": "1.64"
      },
      "year5": {
        "volumeSales": "0.10",
        "valueSales": "1.41"
      },
      "total": {
        "volumeSales": "0.55",
        "valueSales": "7.53"
      }
    });
  }

  private apiURLId1 = "https://reqres.in/api/users/1";
  private apiURLId2 = "https://reqres.in/api/users/2";
  private apiURLId3 = "https://reqres.in/api/users/3";
  private apiURLId4 = "https://reqres.in/api/users/4";
  private apiURLId5 = "https://reqres.in/api/users/5";
  private apiURLId6 = "https://reqres.in/api/users/6";
  firstId:any;
  secondId:any;
  thirdId:any;
  fourthId:any;
  fifthId:any;
  sixthId:any;

  async firstRunningMethod() {
    console.log(`firstRunningMethod`);
    try{
      let response = await fetch(this.apiURLId1);
      let readAbleData = await response.json();
      this.firstId = readAbleData.data;
      console.log(this.firstId)

    } catch(error){console.log(error)}
  }

  async secondRunningMethod() {
    console.log(`secondRunningMethod`);
    console.log(`this._emp.userId = ${this.userId}`);
    try{
      let response = await fetch(this.apiURLId2);
      let readAbleData = await response.json();
      this.secondId = readAbleData.data;
      console.log(readAbleData)

    } catch(error){console.log(error)}
  }

  async thirdRunningMethod() {
    console.log(`thirdRunningMethod`);
    console.log(`this._emp.userId = ${this.userId}`);
    try{
      let response = await fetch(this.apiURLId3);
      let readAbleData = await response.json();
      this.thirdId = readAbleData.data;
      console.log(readAbleData)

    } catch(error){console.log(error)}
  }

  async fourthRunningMethod() {
    console.log(`fourthRunningMethod`);
    console.log(`this._emp.userId = ${this.userId}`);
    try{
      let response = await fetch(this.apiURLId4);
      let readAbleData = await response.json();
      this.fourthId = readAbleData.data;
      console.log(readAbleData)

    } catch(error){console.log(error)}
  }

  async fifthRunningMethod() {
    console.log(`fifthRunningMethod`);
    console.log(`this._emp.userId = ${this.userId}`);
    try{
      let response = await fetch(this.apiURLId5);
      let readAbleData = await response.json();
      this.fifthId = readAbleData.data;
      console.log(readAbleData)

    } catch(error){console.log(error)}
  }

  async sixthRunningMethod() {
    console.log(`sixthRunningMethod`);
    console.log(`this._emp.userId = ${this.userId}`);
    try{
      let response = await fetch(this.apiURLId6);
      let readAbleData = await response.json();
      this.sixthId = readAbleData.data;
      console.log(readAbleData)

    } catch(error){console.log(error)}
  }

}

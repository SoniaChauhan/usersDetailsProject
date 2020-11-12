import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [], label: 'Volume Sales' },
    { data: [], label: 'Value Sales' }
  ];

  private apiURL = "https://reqres.in/api/users";
  constructor(private _http: HttpClient,private _emp: DashboardService,
    private route: ActivatedRoute,) {}

  title = 'firstTask';
  name: any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });

    this._emp.getSales().subscribe(data => {
      this.barChartLabels = Object.keys(data);
      this.barChartLabels.forEach(label => {
        this.barChartData[0].data.push(data[label]['volumeSales']);
        this.barChartData[1].data.push(data[label]['valueSales']);
      });
    });;

    this.longRunningMethod();

  }

  arr = [];
  async longRunningMethod() {
    try{
      let response = await fetch(this.apiURL);
      let readAbleData = await response.json();
      this.arr = readAbleData.data;
      console.log(readAbleData)

    } catch(error){console.log(error)}


  }

isNewDetails = false;
firstStep = true;

showDetails = (_ID) => {
this.isNewDetails = true;
this.firstStep = false;
this._emp.userId = _ID;
console.log(`this._emp.userId =  ${this._emp.userId}`)
if(this._emp.userId==1){
this._emp.firstRunningMethod();
}
if(this._emp.userId==2){
  this._emp.secondRunningMethod();
}
if(this._emp.userId==3){
  this._emp.thirdRunningMethod();
}
if(this._emp.userId==4){
  this._emp.fourthRunningMethod();
}
if(this._emp.userId==5){
  this._emp.fifthRunningMethod();
}
if(this._emp.userId==6){
  this._emp.sixthRunningMethod();
}


  }

}

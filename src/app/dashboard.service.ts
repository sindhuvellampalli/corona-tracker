import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpclient: HttpClient) { }

  getStateData(){
    return this.httpclient.get("https://api.covid19india.org/data.json")
}

getDistrictData() {
  return this.httpclient.get("https://api.covid19india.org/state_district_wise.json")
}
}

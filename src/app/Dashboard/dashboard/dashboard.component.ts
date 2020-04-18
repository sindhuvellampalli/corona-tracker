import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DashboardService } from 'src/app/dashboard.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';



export interface StateData {
  state: string;
  confirmed: number;
  active: number;
  recovered: number;
  deaths:number;
  
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['state', 'confirmed', 'active', 'recovered' , 'deaths'];
 
  dataSource: MatTableDataSource<StateData>;
  

  constructor(private dashboard:DashboardService,private modalService: NgbModal) {


   }
  @ViewChild(MatSort, {static: true}) sort: MatSort;

subscription:any;
states:any;
cardsData:any;
tableData
searchText : any;
modelRef: NgbModalRef;
closeResult: any;
Data:any;
popupData:any;




  ngOnInit() {
   
    //this.tableData.sort = this.sort;
    this.getIndiaCount();
    this.getAllStates();

  }

  getIndiaCount() {
    this.subscription=this.dashboard.getStateData().subscribe((res:any) =>{
      this.cardsData= res['statewise'][0];
      res['statewise'].splice(0,1); 
      this.tableData=res['statewise'];
this.dataSource = new MatTableDataSource(this.tableData);

      
    })
  }

  getAllStates() {
    this.subscription = this.dashboard.getDistrictData().subscribe((res:any) =>{
      this.Data = res;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(event);

    
  }

  showDistricts(content,state){
    this.popupData=this.Data[state.state].districtData;

    console.log(this.Data[state.state]);
    this.modelRef = this.modalService.open(content, { windowClass: "myCustomModalClass", ariaLabelledBy: "modal-basic-title" });
    this.modelRef
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

 

}


  




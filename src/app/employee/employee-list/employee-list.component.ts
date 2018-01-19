import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl:'./employee-list.component.html' ,
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employees:Employee[];
  constructor(private service:EmployeeService, private router:Router) {}
   
  ngOnInit() {
    this.employees=this.service.getEmployeelist(); 
  }

  edit(id : number){
    this.router.navigate(["/employee/form",id]);
  }
  delete(id : number){
    this.service.delete(id);
  }
  newEmployee(){
    this.router.navigate(["/employee/form"]);
  }

}

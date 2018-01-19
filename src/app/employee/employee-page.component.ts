import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { Address } from '../employee/address';
import { Gender } from '../../enumerations/gender';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}

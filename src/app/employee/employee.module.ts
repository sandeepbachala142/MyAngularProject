import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMPLOYEE_ROUTING } from './employee.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EMPLOYEE_ROUTING
  ],
  exports:[],
  declarations: []
})
export class EmployeeModule { }

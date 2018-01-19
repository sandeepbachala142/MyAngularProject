import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Address } from '../address';
import { Gender } from '../../../enumerations/gender';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private service: EmployeeService ,private router: Router, private activeRoute:ActivatedRoute) {  }
  employee:Employee = new Employee(0,"","","",0,0,new Address("","","",0),Gender.Male,true)  
  


  //@Output()
  //newEmployeeAdded:EventEmitter<Employee> = new EventEmitter<Employee>();
  onSubmit(){
    this.service.save(this.employee);
    this.router.navigate(["/employee/list"]);
    this.employee = new Employee(0,"","","",0,0,new Address("","","",0),Gender.Male,true );                                
    }
    getKeysforGender(){
      return Object.keys(Gender);
    }
  
 routerSubscription:Subscription;
      ngOnInit() {
       this.routerSubscription= this.activeRoute.params.
                                subscribe(params=>{
                                  if(params['id']){
                                    this.employee=this.service.getEmployeeByID(parseInt(params['id']));
                                  }
                                });
      }
    
      ngOnDestroy(): void {
        this.routerSubscription.unsubscribe();
      }
    
}

import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee';
import { Address } from '../employee/address';
import { Gender } from '../../enumerations/gender';
@Injectable()
export class EmployeeService {
employees:Array<Employee>=[
  new Employee(1,"Sandeep","Bachala","Kumar",27,60000, new Address("Lewisville","Texas","Valley view",75068), Gender.Male,false),
  new Employee(2,"pooja","Bachala","tiwari",18,10000, new Address("Lewisville","Texas","Valley view",75068), Gender.Female,false)
];
  getEmployeelist(){
      return this.employees;
  }
  save(emp:Employee){
    if(emp.emplID==0){
    emp.emplID=this.getMaxID();
    this.employees.push(emp);     
    emp = new Employee(0,"","","",0,0,new Address("","","",0),Gender.Male,true );                                
    }else{
      let index = this.employees.findIndex(a => a.emplID === emp.emplID);
      this.employees[index] = emp;
    }
  }
    getMaxID(){
    let maxId=0;
    for(let emp of this.employees){
      
      if(emp.emplID>maxId){
        maxId=emp.emplID;
      }
    }
    return maxId+1;
  }
  delete(id:number){
    let index = this.employees.findIndex(a1 => a1.emplID === id)
    this.employees.splice(index,1);
  }
  
  getEmployeeByID(id:number){
    return this.employees.find(employee=> employee.emplID===id);
  }

  constructor() { }

}

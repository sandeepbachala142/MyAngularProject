import { RouterModule } from "@angular/router";
import { EmployeePageComponent } from "./employee-page.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeFormComponent } from "./employee-form/employee-form.component";

const Routes=[
    {path : 'employee', component:EmployeePageComponent, children:[
        {path:'form' , component:EmployeeFormComponent},
        {path:'list' , component:EmployeeListComponent},
        {path:'form/:id' , component:EmployeeFormComponent},
    ]},

]
export const EMPLOYEE_ROUTING = RouterModule.forChild(Routes);


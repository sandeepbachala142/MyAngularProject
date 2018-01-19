import { TestComponent } from './test/test.component';
import {RouterModule} from '@angular/router';
import { AuthorListComponent } from "./author/author-list/author-list.component";
import { CourseListComponent } from "./course/course-list/course-list.component";
import { AuthorPageComponent } from './author/author-page.component';
import { CoursePageComponent } from './course/course-page.component';
import { HomeComponent } from './home.component';
import { CourseFormComponent } from './course/course-form/course-form.component';

import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { AuthorFormComponent } from './author/author-form/author-form.component';

const Routes=[ 
    {path:'' , component:HomeComponent},
    {path:'author' , loadChildren:'app/author/author.module#AuthorModule'},
    {path:'course' , loadChildren:'app/course/course.module#CourseModule'},
    {path:'employee' , loadChildren:'app/employee/employee.module#EmployeeModule'},
    {path:'test' , component:TestComponent},
]

export const APP_ROUTING = RouterModule.forRoot(Routes);


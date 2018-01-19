import { RouterModule } from "@angular/router";
import { CoursePageComponent } from "./course-page.component";
import { CourseFormComponent } from "./course-form/course-form.component";
import { CourseListComponent } from "./course-list/course-list.component";





const Routes=[
    {path : 'course', component:CoursePageComponent, children:[
        {path:'form' , component:CourseFormComponent},
        {path:'list' , component:CourseListComponent},
        {path:'form/:id' , component:CourseFormComponent},  
    ]},

]
export const COURSE_ROUTING = RouterModule.forChild(Routes);


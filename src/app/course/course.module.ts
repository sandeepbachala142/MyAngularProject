import { CourseService } from './course.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { COURSE_ROUTING } from './course.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    COURSE_ROUTING
  ],
  providers:[CourseService],
  exports : [CoursePageComponent,CourseListComponent,CourseFormComponent],
  declarations: [CoursePageComponent,CourseListComponent,CourseFormComponent]
})
export class CourseModule { }

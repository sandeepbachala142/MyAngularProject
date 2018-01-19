import { AuthorModule } from './author/author.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CoursePageComponent } from './course/course-page.component';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { AuthorListComponent } from './author/author-list/author-list.component';

import { AuthorFormComponent } from './author/author-form/author-form.component';
import { AuthorPageComponent } from './author/author-page.component';
import { APP_ROUTING } from './app.routing';
import { NavComponentComponent } from './nav-component.component';
import { HomeComponent } from './home.component';
import { CourseModule } from './course/course.module';
import { EmployeePageComponent } from './employee/employee-page.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeService } from './employee/employee.service';
import { TestComponent } from './test/test.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    EmployeePageComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    NavComponentComponent,
    HomeComponent,
    TestComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule,
    AuthorModule,
    CourseModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Router } from '@angular/router';
import { CourseService } from './../course.service';
import { SkillLevel } from '../../../enumerations/skillLevel';
import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses:Course[]=[];
  constructor(private service : CourseService, private router : Router ) { }



  ngOnInit() {
    this.courses= this.service.getCourses();
  }

  edit(id : number){
      this.router.navigate(['/course/form',id]);
  }
  delete(id :number){
     console.log("got the course id :"+id);
    this.service.delete(id);
   }
   newCourse(){
     this.router.navigate(["/course/form"]);
   }

}

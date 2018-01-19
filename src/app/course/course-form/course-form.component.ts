import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from './../course.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../course';
import { SkillLevel } from '../../../enumerations/skillLevel';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  constructor(private service : CourseService , private router :Router,private activeRoute:ActivatedRoute) { }
  course = new Course(0,"",SkillLevel.Beginner,0,true);


  
  onSubmit(f:NgForm){
    if(this.course.id>0){
     f.value.id=this.course.id; 
    }
     this.service.save(f.value);
     this.course = new Course(0,"",SkillLevel.Beginner,0,true);
     this.router.navigate(['/course/list']);
    }

    getKeysforSkills(){
      return Object.keys(SkillLevel);
    }
    
  
      routerSubscription:Subscription;
      ngOnInit() {
       this.routerSubscription= this.activeRoute.params.
                                subscribe(params=>{
                                  if(params['id']){
                                    this.course=this.service.getCourseByID(parseInt(params['id']));
                                  }
                                });
      }
    
      ngOnDestroy(): void {
        this.routerSubscription.unsubscribe();
      }
    

}

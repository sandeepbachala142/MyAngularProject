import { Injectable } from '@angular/core';
import { Course } from './course';
import { SkillLevel } from '../../enumerations/skillLevel';

@Injectable()
export class CourseService {

  constructor() { }
  courses:Course[] = [
    new Course(1,"Java Programming",SkillLevel.Beginner,25,false),
    new Course(2,"Angular",SkillLevel.Advanced,28,false),
  ]

 getCourses(){
   return this.courses;
 }

 save(course : Course){
  if(!course.id){
  course.id=this.getMaxID();
  this.courses.push(course);
  }
  else{
    let index = this.courses.findIndex(a => a.id === course.id);
    this.courses[index] = course;
  }
 }
 delete(id:number){
  let index = this.courses.findIndex(a1 => a1.id === id)
  this.courses.splice(index,1);
 }

 getCourseByID(id:number){
  return this.courses.find(course=> course.id===id);
 }

getMaxID(){
  let maxId=0;
  for(let course of this.courses){
    if(course.id>maxId){
      maxId=course.id;
    }
  }
  return maxId+1;
}

}

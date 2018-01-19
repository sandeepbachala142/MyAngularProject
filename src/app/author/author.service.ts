import {Http , Headers} from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Author } from './author';
import { Gender } from '../../enumerations/gender';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthorService {
/* public authors:Author[]=[
    new Author(1,"Sandeep","Kumar","Bachala",27,Gender.Male,false),
    new Author(2,"priya","varma","vemula",25,Gender.Female,false)
  ]*/
  private URL:string = "http://localhost:3000/authors";
  public authors:Author[]=[];
  constructor(private http : Http) {}
  
getAuthorList(){
  return this.http.get(this.URL);
}  

save(author:Author){
  let rHeaders = new Headers();
  rHeaders.set('content-type',"application/json");
  if(!author._id){
    return this.http.post(this.URL,JSON.stringify(author),{headers:rHeaders})
  }else{
    return this.http.put(this.URL+'/'+author._id,JSON.stringify(author),{headers:rHeaders})
  }



  /*if(!author._id){
    author._id=this.getMaxID();
    this.authors.push(author);
  }
  else{
    let index = this.authors.findIndex(a => a._id === author._id);
    this.authors[index] = author;
  }*/
}

deleteAuthor(id:number){

  return this.http.delete(this.URL+'/'+id);
  // let index = this.authors.findIndex(a1 => a1._id === id)
  // this.authors.splice(index,1);

}

getAuthorByID(id:number){
 return this.http.get(this.URL+'/'+id);
  // return this.authors.find(author=> author._id===id);
}


getMaxID(){
  let maxId=0;
  for(let author of this.authors){
    if(author._id>maxId){
      maxId=author._id;
    }
  }
  return maxId+1;
}


}
  
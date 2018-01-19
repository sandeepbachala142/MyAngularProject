
import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../author';
import { Gender } from '../../../enumerations/gender';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors:Author[] = [];
  constructor(private service : AuthorService, private router : Router) { }

  ngOnInit() {
    this.service.getAuthorList()
        .subscribe(response => {
              this.authors= response.json();
         });
    // this.service.getAuthorList();
    // //this.authors = this.service.authors;
    // this.service.authorsChanged.subscribe((authors)=>{
    //   this.authors = authors;
    // })
  }
  edit(id:number){
    this.router.navigate(['/author/form',id]);
  }

  delete(id:number){
    this.service.deleteAuthor(id)
      .subscribe(res => {
      if(res.status==200){
        let index = this.authors.findIndex(a1 => a1._id === id)
        this.authors.splice(index,1);
        }
      })
  }
 
  addAuthor(){
    this.router.navigate(['/author/form']);
  }
 

}

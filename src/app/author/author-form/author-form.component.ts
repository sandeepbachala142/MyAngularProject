import { Router, ActivatedRoute } from '@angular/router';
import { AuthorService } from './../author.service';
import { Author } from './../author';
import { Component, OnInit, Output, EventEmitter, OnDestroy, NgModule } from '@angular/core';
import { Gender } from '../../../enumerations/gender';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit, OnDestroy {

  author = new Author(0, "", "", "", 0, Gender.Male, true);


  onSubmit() {
    this.service.save(this.author);
    this.author = new Author(0, "", "", "", 0, Gender.Male, true);
    this.router.navigate(['/author/list']);
  }

  getKeysforGender() {
    return Object.keys(Gender);
  }

  constructor(private service: AuthorService, private router: Router, private activeRoute: ActivatedRoute) { }
  routerSubscription: Subscription;
  ngOnInit() {
    this.routerSubscription = this.activeRoute.params.
      subscribe(params => {
        if (params['id']) {
         this.service.getAuthorByID(parseInt(params['id']))
                        .subscribe(resp=>{
                          this.author = resp.json();
          });
        }
      });
  }

  Submit(f: NgForm) {
    if (this.author._id > 0) {
      f.value._id = this.author._id;
     }
    this.service.save(f.value).subscribe(resp=> {
      console.log(resp.status);
      if(resp.status==200 || resp.status==201){
        this.author = new Author(0, "", "", "", 0, Gender.Male, true);
        this.router.navigate(['/author/list']);
      }

    });
   
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}

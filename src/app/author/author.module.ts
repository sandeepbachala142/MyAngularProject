import {HttpModule} from '@angular/http';
import { AuthorService } from './author.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorPageComponent } from './author-page.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { AUTHOR_ROUTING } from './author.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AUTHOR_ROUTING,
    HttpModule,

  ],
  providers:[AuthorService],
  exports:[AuthorPageComponent,AuthorListComponent,AuthorFormComponent],
  declarations: [AuthorPageComponent,AuthorListComponent,AuthorFormComponent]
  
})
export class AuthorModule { }

import { AuthorListComponent } from "./author-list/author-list.component";
import { AuthorFormComponent } from "./author-form/author-form.component";
import { RouterModule } from "@angular/router";
import { AuthorPageComponent } from "./author-page.component";




const Routes=[
    {path : 'author', component:AuthorPageComponent, children:[
        {path:'form' , component:AuthorFormComponent},
        {path:'list' , component:AuthorListComponent},
        {path:'form/:id' , component:AuthorFormComponent},
    ]
},
]
export const AUTHOR_ROUTING = RouterModule.forChild(Routes);


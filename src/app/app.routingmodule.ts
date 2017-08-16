import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RepoComponent} from './repo/repo.component'
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes =[
  {path: 'home', component:UsersComponent},
  {path:'about',component:AboutComponent},
  {path:'',component:UsersComponent},
  {path:'user/:userdetails',component:DetailsComponent},
  {path: ':userdetails/repos',component:RepoComponent},
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}

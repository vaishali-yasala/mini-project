import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '/home/clairvoyant/Work/mini-project/src/app/component/about/about.component';
import { RepoComponent} from '/home/clairvoyant/Work/mini-project/src/app/component/repo/repo.component'
import { UsersComponent } from '/home/clairvoyant/Work/mini-project/src/app/component/users/users.component';
import { DetailsComponent } from '/home/clairvoyant/Work/mini-project/src/app/component/details/details.component';


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

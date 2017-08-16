import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule ,Routes } from '@angular/router';
import { AppRoutingModule } from '/home/clairvoyant/Work/mini-project/src/app/app.routingmodule';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RepoComponent} from './repo/repo.component'
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

import { DetailInfoService } from "app/detailinfo.service";
import { MyservicenameService } from "app/myservicename.service";


@NgModule({
  declarations: [
    AppComponent,AboutComponent,UsersComponent,RepoComponent,DetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule, AppRoutingModule
  ],
  providers: [MyservicenameService,DetailInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

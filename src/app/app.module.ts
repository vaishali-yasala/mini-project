import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule ,Routes } from '@angular/router';
import { AppRoutingModule } from '/home/clairvoyant/Work/mini-project/src/app/app.routingmodule';
import { AppComponent } from './app.component';
import { AboutComponent } from '/home/clairvoyant/Work/mini-project/src/app/component/about/about.component';
import { RepoComponent} from '/home/clairvoyant/Work/mini-project/src/app/component/repo/repo.component'
import { UsersComponent } from '/home/clairvoyant/Work/mini-project/src/app/component/users/users.component';
import { DetailsComponent } from '/home/clairvoyant/Work/mini-project/src/app/component/details/details.component';

import { DetailInfoService } from "app/service/detailinfo.service";
import { MyServiceNameService } from "app/service/myservicename.service";


@NgModule({
  declarations: [
    AppComponent,AboutComponent,UsersComponent,RepoComponent,DetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule, AppRoutingModule
  ],
  providers: [MyServiceNameService,DetailInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

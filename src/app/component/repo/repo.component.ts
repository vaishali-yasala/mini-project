import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DetailInfoService } from '/home/clairvoyant/Work/mini-project/src/app/service/detailinfo.service';
import { ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit{

  constructor(private DetailinfoService:DetailInfoService, private activatedRoute: ActivatedRoute) { }

 repo: Observable <any>;
  username: String;
    detailInfo: any={} ;
 
  ngOnInit() 
  {
    let name=this.activatedRoute.snapshot.params['userdetails'];
       this.username= name;
       console.log(this.username);

     this.DetailinfoService.getDetailInfo(this.username).subscribe
      (
        (detailsinfo) => {this.detailInfo = detailsinfo;
        console.log(detailsinfo);}
      );     
      
  this.DetailinfoService.getRepo(this.username+"/"+"repos ").subscribe
      (
        (x) => {this.repo = x;
          console.log(x);}
      );

  }

}






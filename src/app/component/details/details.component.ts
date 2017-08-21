import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DetailInfoService } from '/home/clairvoyant/Work/mini-project/src/app/service/detailinfo.service';
import { ActivatedRoute, Params,Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
 
})
export class DetailsComponent implements OnInit {

  constructor(private DetailInfoService:DetailInfoService, private route: ActivatedRoute, private router: Router) { }
  detailinfo: any={} ;
  public userinfo;


ngOnInit() 
  {
      let userdetails=this.route.snapshot.params['userdetails'];
       this.userinfo= userdetails;
       console.log(this.userinfo);

      this.DetailInfoService.getDetailInfo(this.userinfo).subscribe
      (
        (detailsinfo) => {this.detailinfo = detailsinfo;
        console.log("x"+detailsinfo);}
      );      
  }

 getRepo(){
        console.log(this.userinfo+'/repos');
        this.router.navigate([this.userinfo +"/"+ 'repos']);
  }
     
}
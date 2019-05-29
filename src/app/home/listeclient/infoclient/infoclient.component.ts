import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {UserService} from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-infoclient',
  templateUrl: './infoclient.component.html',
  styleUrls: ['./infoclient.component.css']
})
export class InfoclientComponent implements OnInit {

  user;

  id;
  constructor(public userService: UserService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });

    this.detailuser(this.id)
  }

  detailuser(id){


    this.userService.detailuser(id).subscribe(res=>{

      this.user=res;


    })

  }

}

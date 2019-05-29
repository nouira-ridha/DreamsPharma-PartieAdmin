import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {UserService} from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router'
import swal from 'sweetalert';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  user;
  id;
  constructor(public userService: UserService,private router:ActivatedRoute) {

  }

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
  envoiMail(){

    swal({
      title: "Succés?",
      text: "Votre message a été envoye avec succès",
      icon: "success",
      dangerMode: true,
    })

  }

}

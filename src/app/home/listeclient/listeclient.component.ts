import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserService} from '../../services/user.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-listeclient',
  templateUrl: './listeclient.component.html',
  styleUrls: ['./listeclient.component.css']
})
export class ListeclientComponent implements OnInit {

  users;

  constructor(public userService: UserService) {


     this.getAll();

  }


  ngOnInit() {
  }


  getAll(){


    this.userService.getAllClients().subscribe(res => {

      this.users = res;
    });
  }



  remove(id){

    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      icon: "warning",
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {


          this.userService.remove(id).subscribe(res=> {

               if(JSON.parse(JSON.stringify(res))){



                 swal("Deleted!", "Your imaginary file has been deleted!", "success");
                 this.getAll();
               } else {

                 swal("Error Deleted!", "Your imaginary file has been not deleted!", "error");

               }
          })

        }
      });

  }
  historique(){

    swal({
      title: "Ooops?",
      text: "Service temporairement indisponible",
      icon: "error",
      dangerMode: true,
    })

  }


   edit(){


   }
  approuved(id){
    console.log(id)

    this.userService.approuved(id).subscribe(res=>{


         console.log("okkkkkk")

      this.getAll();
    })

  }

  detailuser(id){
    console.log(id)

    this.userService.detailuser(id).subscribe(res=>{


      console.log("okkkkkk")


    })

  }



}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;

  constructor(public router: Router, public userService: UserService) {
  }

  ngOnInit() {
  }


  go() {


    this.userService.login(this.email, this.password).subscribe(res => {




      if (JSON.parse(JSON.stringify(res)).auth) {
        localStorage.setItem('state', '1');
        localStorage.setItem('token', JSON.parse(JSON.stringify(res)).token);
        this.router.navigate(['home']);
      } else {

        swal("Oops!", "Mot De Passe Incorrect!", "error");
      }

    });


  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {SouscategorieService} from '../../services/souscategorie.service';
import {CategorieService} from '../../services/categorie.service';


import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import swal from 'sweetalert';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-souscategorie',
  templateUrl: './souscategorie.component.html',
  styleUrls: ['./souscategorie.component.css']
})
export class SouscategorieComponent implements OnInit {


  @ViewChild('smModal') modal;

  registerForm: FormGroup;
  submitted = false;
  s;
  id;
  souscategorie;
  nom;
  categorie;

  constructor(public souscategorieService: SouscategorieService,public categorieServices: CategorieService, private formBuilder: FormBuilder) {




  }

  ngOnInit() {
    this.getAllSouscategorie();
    this.getAllCategorie();
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      categorie: ['', Validators.required]

    });
  }

  get f() {
    return this.registerForm.controls;
  }



  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log("data",this.registerForm.value)
    this.souscategorieService.ajoutSouscategorie(this.registerForm.get("nom").value,
      this.registerForm.get("categorie").value).subscribe(res=> {
        console.log("goood" +res)
      this.getAllSouscategorie();
    })

  }

  open(item) {

    this.s = item;

    this.modal.show();
  }


  getAllSouscategorie() {


    this.souscategorieService.getAllSouscategorie().subscribe(res => {

      this.souscategorie = res;
    });
  }


  removeSouscategorie(id) {

    swal({
      title: 'Are you sure?',
      text: 'Are you sure that you want to leave this page?',
      icon: 'warning',
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {


          this.souscategorieService.removeSouscategorie(id).subscribe(res => {

            if (JSON.parse(JSON.stringify(res))) {


              swal('Deleted!', 'Your imaginary file has been deleted!', 'success');
              this.getAllSouscategorie();
            } else {

              swal('Error Deleted!', 'Your imaginary file has been not deleted!', 'error');

            }
          });

        }
      });

  }

  getAllCategorie(){


    this.categorieServices.getAllCategorie().subscribe(res => {

      this.categorie = res;
    });
  }
  getbyidSouscategorie(categorie){

    this.souscategorieService.getbyidSouscategorie(categorie).subscribe(data => {
    }, error => {
      console.log(error);
    });
  }
  ActiverDesactiver(){

    swal({
      title: "Ooops?",
      text: "Service temporairement indisponible",
      icon: "error",
      dangerMode: true,
    })

  }
}

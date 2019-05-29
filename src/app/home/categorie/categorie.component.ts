import {Component, OnInit, ViewChild} from '@angular/core';
import {CategorieService} from '../../services/categorie.service';
import {SecteurService} from '../../services/secteur.service';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import swal from 'sweetalert';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  @ViewChild('smModal') modal;

  id;
  categorie;
  registerForm: FormGroup;
  submitted = false;
  c;
  secteurs;
  secteur;
  nom;
  s;

  constructor(public categorieService: CategorieService, public secteurService: SecteurService , private formBuilder: FormBuilder) {


  }

  ngOnInit() {
    this.getAllCategorie();
    this.getAllSecteur();
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      secteur: ['', Validators.required]

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
    this.categorieService.ajoutCategorie(this.registerForm.get("nom").value,
      this.registerForm.get("secteur").value).subscribe(res=> {
      console.log("goood" +res)
      this.getAllCategorie();
     // this.updateSecteur();
    })

  }

  open(item) {

    this.c = item;

    this.modal.show();
  }



  getAllCategorie(){


    this.categorieService.getAllCategorie().subscribe(res => {

      this.categorie = res;
    });
  }



  removeCategorie(id){

    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      icon: "warning",
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {


          this.categorieService.removeCategorie(id).subscribe(res=> {

            if(JSON.parse(JSON.stringify(res))){



              swal("Deleted!", "Your imaginary file has been deleted!", "success");
              this.getAllCategorie();
            } else {

              swal("Error Deleted!", "Your imaginary file has been not deleted!", "error");

            }
          })

        }
      });

  }

  getAllSecteur(){

    this.secteurService.getAllSecteur().subscribe( res=> {

      console.log(res)
      this.secteurs = res;
    })
  }

  getbyidCategorie(categorie){

    this.categorieService.getbyidCategorie(this.secteurs).subscribe(data => {
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
 /* updateSecteur(){
    this.secteurService.updateSecteur({
      'nom': this.s.nom,
      'categorie': [this.s.categorie]

    }).subscribe(res => {

      this.s = res;

      console.log('okkkkkk' + res);


    });

  }*/

}

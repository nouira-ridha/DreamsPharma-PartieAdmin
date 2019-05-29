import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ProduitService} from '../../services/produit.service';
import {SouscategorieService} from '../../services/souscategorie.service';
import {CategorieService} from '../../services/categorie.service';
import {GalerieService} from '../../services/galerie.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.css']
})
export class ListeproduitComponent implements OnInit {

  @ViewChild('smModal') modal;
  fileToUpload: FileList = null;

  registerForm: FormGroup;
  submitted = false;
  souscategorie;
  produits;
  p;
  sous;
  id;
  imgUrl;
  categorie;
  tab = [];
  produit;
  categories;

  constructor(public produitService: ProduitService, public galerieService: GalerieService, public souscategorieServices: SouscategorieService, public categorieServices: CategorieService, private formBuilder: FormBuilder,private router:ActivatedRoute) {

  }

  ngOnInit() {
    this.getAllProduits();
    //this.getAllSouscategorie();
    this.getAllCategorie();
    this.registerForm = this.formBuilder.group({
      picture: [''],
      nom: ['', Validators.required],
      stock: ['', Validators.required],
      indication: [''],
      presentation: [''],
      conseilutilisation: [''],
      contreindication: [''],
      prix: ['', Validators.required],
      //  secteur: [''],
      souscategorie: ['', Validators.required],
      categorie: ['', Validators.required],
      destination: [''],

    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(tab) {

    console.log('data', this.registerForm.value);

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    console.log(tab);
    this.produitService.ajout(this.fileToUpload.item(0).name, tab,
      this.registerForm.get('nom').value, this.registerForm.get('stock').value, this.registerForm.get('indication').value,
      this.registerForm.get('presentation').value, this.registerForm.get('conseilutilisation').value, this.registerForm.get('contreindication').value,
      this.registerForm.get('prix').value, this.registerForm.get('souscategorie').value).subscribe(res => {
      console.log('goood' + res);

      this.getAllProduits();
    });


  }

  open(item) {

    this.p = item;

    this.modal.show();
  }

  getAllProduits() {


    this.produitService.getAllProduits().subscribe(res => {
console.log('goood'+ res)
      this.produits = res;
    });
  }

  getAllSouscategorie() {

     console.log(this.registerForm.get("categorie").value)
    this.souscategorieServices.getallSouscategorie(this.registerForm.get("categorie").value).subscribe(res => {
      this.souscategorie = res;
    });
  }

  getAllCategorie() {

    this.categorieServices.getAllCategorie().subscribe(res => {
      this.categories = res;
    });
  }


  remove(id) {

    swal({
      title: 'vous êtes sur?',
      text: 'Êtes-vous sûr de vouloir quitter cette page??',
      icon: 'warning',
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {


          this.produitService.remove(id).subscribe(res => {

            if (JSON.parse(JSON.stringify(res))) {


              swal('Deleted!', 'Your imaginary file has been deleted!', 'success');
              this.getAllProduits();
            } else {

              swal('Error Deleted!', 'Your imaginary file has been not deleted!', 'error');

            }
          });

        }
      });

  }

  detailproduit(id) {
    console.log(id);

    this.produitService.detailproduit(id).subscribe(res => {

      this.produit=res;

      console.log('okkkkkk');


    });

  }


  updateproduit(id) {


    this.produitService.updateproduit(id, {
      'nom': this.p.nom,

      'stock': this.p.stock,
      'indication': this.p.indication,
      'presentation': this.p.presentation,
      'contreindication': this.p.contreindication,
      'prix': this.p.prix

    }).subscribe(res => {

      this.p = res;

      console.log('okkkkkk' + res);


    });

  }


  getbyid(souscategorie) {

    this.produitService.getbyid(souscategorie).subscribe(data => {
    }, error => {
      console.log(error);
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files;

    console.log(files);
    for (var i = 0; i < this.fileToUpload.length; i++) {
      this.produitService.uploadImage(this.fileToUpload.item(i)).subscribe(res => {

        console.log(res);

        this.tab.push(res['_id']);

      });

    }
  }

  getbyidGalerie(produit) {

    this.galerieService.getbyidGalerie(produit).subscribe(data => {
    }, error => {
      console.log(error);
    });
  }



}


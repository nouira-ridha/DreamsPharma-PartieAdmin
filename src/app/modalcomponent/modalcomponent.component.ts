import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-modalcomponent',
  templateUrl: './modalcomponent.component.html',
  styleUrls: ['./modalcomponent.component.css']
})
export class ModalcomponentComponent implements OnInit {
  fileToUpload: FileList = null;

  produit;
  tab = [];
  id;

  constructor(public produitService: ProduitService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });

    this.detailproduit(this.id)
  }

  detailproduit(id){


    this.produitService.detailproduit(id).subscribe(res=>{

      this.produit=res;


    })

  }

  updateproduit(id){


console.log(id,  {

  "nom": this.produit.nom,
  "prix":this.produit.prix,
  "stock": this.produit.stock,
  "souscategorie":this.produit.souscategorie,
  "indication":this.produit.indication,
  "presentation":this.produit.presentation,
  "conseilutilisation":this.produit.conseilutilisation,
  "contreindication":this.produit.contreindication,

})

    this.produitService.updateproduit(id,  {

      "nom": this.produit.nom,
      "prix":this.produit.prix,
      "stock": this.produit.stock,
      "souscategorie":this.produit.souscategorie,
      "indication":this.produit.indication,
      "presentation":this.produit.presentation,
      "conseilutilisation":this.produit.conseilutilisation,
      "contreindication":this.produit.contreindication,

    }).subscribe(res=>{

      this.produit=res;

      console.log("okkkkkk"+res)


    })

  }

  updtimage(id){


    console.log(id,  {
      "picture": this.fileToUpload.item(0).name,
      "galerie": this.produit.galerie,

    })

    this.produitService.updtimage(id,  {
      "picture": this.fileToUpload.item(0).name,
      "galerie": this.tab,

    }).subscribe(res=>{

      this.produit=res;

      console.log("okkkkkk"+res)


    })

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

}

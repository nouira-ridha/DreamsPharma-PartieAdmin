import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {ProduitService} from '../../../services/produit.service';
import {SouscategorieService} from '../../../services/souscategorie.service';

import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-infoproduit',
  templateUrl: './infoproduit.component.html',
  styleUrls: ['./infoproduit.component.css']
})
export class InfoproduitComponent implements OnInit {

  produit;

  id;

  constructor(public produitService: ProduitService,public souscategorieServices: SouscategorieService,private router:ActivatedRoute) { }

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


}

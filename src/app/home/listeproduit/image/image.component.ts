import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {ProduitService} from '../../../services/produit.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
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

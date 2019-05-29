import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(public http: HttpClient) {

  }
  ajoutCategorie(nom, secteur) {


    return this.http.post(environment.base + 'categorie/add', {
      nom: nom,
      secteur: secteur
    });

  }

  getAllCategorie() {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'categorie/all', {headers: httpHeaders});
  }

  getbyidCategorie(secteur) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'categorie/byidcategorie/' +  secteur, {headers: httpHeaders});
  }


  removeCategorie(id) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });
    return this.http.delete(environment.base + 'categorie/delt/' + id, {headers: httpHeaders});
  }


  updateCategorie(id, categorie) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.put(environment.base + 'categorie/updt?categorieId=' + id, categorie, {headers: httpHeaders});
  }
  getallcategorie(idsect) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'categorie/allcategorie/' + idsect, {headers: httpHeaders});
  }

}

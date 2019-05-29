import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SouscategorieService {

  constructor(public http: HttpClient) {

  }

  ajoutSouscategorie(nom, categorie) {


    return this.http.post(environment.base + 'souscategorie/add', {
      nom: nom,
      categorie: categorie
    });

  }

  getAllSouscategorie() {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'souscategorie/all', {headers: httpHeaders});
  }

  removeSouscategorie(id) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });
    return this.http.delete(environment.base + 'souscategorie/delt/' + id, {headers: httpHeaders});
  }


  updateSouscategorie(id, souscategorie) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.put(environment.base + 'souscategorie/updt?souscategorieId=' + id, souscategorie, {headers: httpHeaders});
  }


  getbyidSouscategorie(categorie) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'souscategorie/byidsouscategorie/' + categorie, {headers: httpHeaders});
  }

  getallSouscategorie(idcat) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'souscategorie/allsouscategorie/' + idcat, {headers: httpHeaders});
  }
}

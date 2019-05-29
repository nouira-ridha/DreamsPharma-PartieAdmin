import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GalerieService {

  constructor(public http: HttpClient) {

  }





  getbyidGalerie(produit) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'galerie/byidgalerie/' +  produit, {headers: httpHeaders});
  }
}

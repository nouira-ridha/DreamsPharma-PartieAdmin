import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(public http: HttpClient) {
  }

  ajout( picture,galerie, nom, stock, indication, presentation,conseilutilisation, contreindication, prix, souscategorie) {


    return this.http.post(environment.base + 'produit/add', {
      picture: picture,
      galerie: galerie,

      nom: nom,
      stock: stock,
      indication: indication,
      presentation: presentation,
      conseilutilisation:conseilutilisation,
      contreindication: contreindication,
      prix: prix,
      souscategorie: souscategorie,

    });

  }

  getAllProduits() {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'produit/all', {headers: httpHeaders});
  }

  remove(id) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });
    return this.http.delete(environment.base + 'produit/delt/' + id, {headers: httpHeaders});
  }

  detailproduit(id) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });
    return this.http.get(environment.base + 'produit/byid?produitId=' + id, {headers: httpHeaders});
  }

  updateproduit(id, produit) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.put(environment.base + 'produit/updt?produitId=' + id, produit, {headers: httpHeaders});
  }

  updtimage(id, produit) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.put(environment.base + 'produit/updtimage?produitId=' + id, produit, {headers: httpHeaders});
  }


  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, {responseType: 'blob'});
  }

  getbyid(souscategorie) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'produit/byid/' +  souscategorie, {headers: httpHeaders});
  }

  uploadImage(file){


    const formData: FormData = new FormData();
    formData.append("file",file)
    formData.append("nom",file.name)

    return this.http.post(environment.base + 'galerie/add',formData);
  }
}

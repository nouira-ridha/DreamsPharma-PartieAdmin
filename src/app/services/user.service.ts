import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) {
  }


  login(email, pwd) {


    return this.http.post(environment.base + 'admin/login2', {email: email, password: pwd});

  }


  register(nom, prenom, email, password) {

    return this.http.post(environment.base + 'admin/add', {nom: nom, prenom: prenom, email: email, password: password});
  }

  getall() {
    return this.http.get(environment.base + 'admin/all', {});
  }

  recherche(id) {
    return this.http.get(environment.base + 'admin/byid?userId=' + id, {});
  }

  modifier(id, nom, prenom, email, password) {
    return this.http.put(environment.base + 'admin/updt?userId=', {nom: nom, prenom: prenom, email: email, password: password});
  }




  loginuser(email, pwd) {


    return this.http.post(environment.base + 'user/loginuser', {email: email, password: pwd});

  }
  remove(id) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem("token")
    });
    return this.http.delete(environment.base + 'user/delt/'+id,{ headers: httpHeaders });
  }


  approuved(id) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem("token")
    });
    return this.http.put(environment.base + 'user/app/'+id, { headers: httpHeaders });
  }

  detailuser(id) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem("token")
    });
    return this.http.get(environment.base + 'user/byid?userId=' + id, { headers: httpHeaders });
  }


  getAllClients() {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem("token")
    });


    return this.http.get(environment.base + 'user/all',{ headers: httpHeaders });
  }

}

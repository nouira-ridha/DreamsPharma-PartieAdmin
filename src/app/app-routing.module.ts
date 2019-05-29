import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContainerComponent} from './home/container/container.component';
import {LoginComponent} from './login/login.component';
import {ListeproduitComponent} from './home/listeproduit/listeproduit.component';
import {ListeclientComponent} from './home/listeclient/listeclient.component';
import {ErrorComponent} from './error/error.component';
import {AuthGuard} from './services/auth.guard';
import {CategorieComponent} from './home/categorie/categorie.component';
import {SouscategorieComponent} from './home/souscategorie/souscategorie.component';
import {InfoclientComponent} from './home/listeclient/infoclient/infoclient.component';
import {InfoproduitComponent} from './home/listeproduit/infoproduit/infoproduit.component';
import {ImageComponent} from './home/listeproduit/image/image.component';
import {MailComponent} from './home/listeclient/mail/mail.component';
import {ModalcomponentComponent} from './modalcomponent/modalcomponent.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', component: ContainerComponent, canActivate: [AuthGuard]},
      {path: 'listeproduit', component: ListeproduitComponent},
      {path: 'infoproduit/:id', component: InfoproduitComponent},
      {path: 'modalcomponent/:id', component: ModalcomponentComponent},
      {path: 'listeclient', component: ListeclientComponent},
      {path: 'infoclient/:id', component: InfoclientComponent},
      {path: 'mail/:id', component: MailComponent},
      {path: 'image/:id', component: ImageComponent},
      {path: 'categorie', component: CategorieComponent},
      {path: 'souscategorie', component: SouscategorieComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

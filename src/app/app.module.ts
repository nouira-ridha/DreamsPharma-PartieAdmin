import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { TopbarComponent } from './home/topbar/topbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContainerComponent } from './home/container/container.component';
import { LoginComponent } from './login/login.component';

import { ListeproduitComponent } from './home/listeproduit/listeproduit.component';
import { ListeclientComponent } from './home/listeclient/listeclient.component';
import { ErrorComponent } from './error/error.component';
import { CategorieComponent } from './home/categorie/categorie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { InfoclientComponent } from './home/listeclient/infoclient/infoclient.component';
import { InfoproduitComponent } from './home/listeproduit/infoproduit/infoproduit.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalcomponentComponent } from './modalcomponent/modalcomponent.component';
import { SouscategorieComponent } from './home/souscategorie/souscategorie.component';
import { MailComponent } from './home/listeclient/mail/mail.component';
import { ImageComponent } from './home/listeproduit/image/image.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    ContainerComponent,
    LoginComponent,
    ListeproduitComponent,
    ListeclientComponent,
    ErrorComponent,
    CategorieComponent,
    InfoclientComponent,
    InfoproduitComponent,
    ModalcomponentComponent,
    SouscategorieComponent,
    MailComponent,
    ImageComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

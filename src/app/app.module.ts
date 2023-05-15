import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './vistas/componentes/card/card.component';
import { AlbumComponent } from './vistas/album/album.component';
import { NavbarComponent } from './vistas/componentes/navbar/navbar.component';
import { FooterComponent } from './vistas/componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AlbumComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

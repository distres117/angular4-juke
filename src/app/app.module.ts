import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlayerComponent } from './components/player/player.component';
import { AlbumsComponent } from './components/albums/albums.component';

import { AlbumsService } from './services/albums/albums.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlayerComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

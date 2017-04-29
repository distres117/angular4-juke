import { ArtistService } from './services/artists/artist.service';
import { PlayerService } from './services/player/player.service';
import { apiUrl } from './app.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlayerComponent } from './components/player/player.component';
import { AlbumsComponent } from './components/albums/albums.component';

import { AlbumsService } from './services/albums/albums.service';
import { AlbumComponent } from './components/album/album.component';
import { SongsComponent } from './components/songs/songs.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlayerComponent,
    AlbumsComponent,
    AlbumComponent,
    SongsComponent,
    ArtistsComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AlbumsService,
    PlayerService,
    ArtistService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

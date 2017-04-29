import { PlayerService } from './services/player/player.service';
import { apiUrl } from './app.config';
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
import { AlbumComponent } from './components/album/album.component';
import { SongsComponent } from './components/songs/songs.component';
import { ProgressBarDirective } from './directives/progress-bar.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlayerComponent,
    AlbumsComponent,
    AlbumComponent,
    SongsComponent,
    ProgressBarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AlbumsService,
    PlayerService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

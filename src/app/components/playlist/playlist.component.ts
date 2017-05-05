import { Subscription } from 'rxjs/Rx';
import { PlaylistModel } from '../../models/playlist.model';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { SongModel } from '../../models/song.model';
import { SongsService } from './../../services/songs/songs.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html'
})
export class PlaylistComponent implements OnInit, OnDestroy {
  songs: SongModel[];
  playlist: PlaylistModel;
  private routerEvents: Subscription
  constructor(
    private songsService: SongsService,
    private playlistService: PlaylistService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.playlistService.onDeletePlaylist.subscribe(id=>{
      if (id === this.playlist._id)
        this.router.navigate(['/playlists/new']);
    });
    this.routerEvents = this.router.events.subscribe(r => {
      if (r instanceof NavigationEnd) {
        const id = this.route.snapshot.url.reverse()[0].toString();
        this.playlistService.getPlayList(id)
          .subscribe(playlist => this.playlist = playlist);
        this.songsService.getSongs()
          .subscribe(songs => this.songs = songs);
      }
    });
  }
  ngOnDestroy(){
    this.routerEvents.unsubscribe();
  }
  addSong(songEl: HTMLSelectElement) {
    let song = this.songs[songEl.options.selectedIndex];
    this.playlistService.addToPlaylist(this.playlist._id, song);
  }

}

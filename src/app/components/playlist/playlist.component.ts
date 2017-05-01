import { PlaylistModel } from '../../models/playlist.model';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { SongModel } from '../../models/song.model';
import { SongsService } from './../../services/songs/songs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html'
})
export class PlaylistComponent implements OnInit {
  songs: SongModel[];
  playlist: PlaylistModel;
  constructor(
    private songsService:SongsService,
    private playlistService: PlaylistService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.url.reverse()[0].toString();
    this.playlistService.getPlayList(id)
      .subscribe(playlist=>this.playlist = playlist);
    this.songsService.getSongs()
      .subscribe(songs=>this.songs = songs);
  }
  addSong(songEl:HTMLSelectElement){
    let song = this.songs[songEl.options.selectedIndex];
    this.playlistService.addToPlaylist(this.playlist._id, song);
  }

}

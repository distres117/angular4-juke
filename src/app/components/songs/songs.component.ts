import { Observable } from 'rxjs/Rx';
import { PlaylistService } from './../../services/playlist/playlist.service';
import { Location } from '@angular/common';
import { AlbumsService } from './../../services/albums/albums.service';
import { ArtistService } from './../../services/artists/artist.service';
import { PlayerService } from './../../services/player/player.service';
import { SongModel } from '../../models/song.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'song-list',
  templateUrl: './songs.component.html'
})
export class SongsComponent implements OnInit {
  songs: SongModel[];
  constructor(
    private playerService:PlayerService,
    private artistService: ArtistService,
    private albumsService: AlbumsService,
    private playlistService: PlaylistService,
    private route:Location
  ) { }

  ngOnInit() {
    const subscribeTo = ((obs:Observable<SongModel[]>)=>{
      obs.subscribe(songs=>this.songs = songs);
    })
    const location:string[] = this.route.path().split('/');
    if (location.includes('songs')){
      subscribeTo(this.artistService.getArtistSongs(location[2]));
    }else if (location.includes('albums')){
      subscribeTo(this.albumsService.getAlbumSongs(location[2]));
    }else if (location.includes('playlists')){
      this.playlistService.onNewSong.subscribe(song=>this.songs.push(song));
      subscribeTo(this.playlistService.getPlaylistSongs(location[2]));
    }
  }
  toggle(song:SongModel){
    if (this.playerService.currentSong !== song)
      this.playerService.start(song, this.songs);
    else if (this.playerService.playing)
      this.playerService.pause();
    else
      this.playerService.resume();
  }

  isPlaying(song:SongModel){
    return this.playerService.playing && this.playerService.currentSong === song;
  }


}

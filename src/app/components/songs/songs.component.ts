import { AlbumsService } from './../../services/albums/albums.service';
import { ActivatedRoute } from '@angular/router';
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
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let thisUrl = this.route.snapshot.url.reverse()[0].path;
    if (thisUrl === 'songs'){
      let id = this.route.parent.snapshot.url.reverse()[0].toString();
      this.artistService.getArtistSongs(id)
        .subscribe(songs=>this.songs = songs);
    }else{
      this.albumsService.getAlbumSongs(thisUrl)
        .subscribe(songs=>this.songs = songs);
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

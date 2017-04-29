import { PlayerService } from './../../services/player/player.service';
import { SongModel } from '../../models/song.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'song-list',
  templateUrl: './songs.component.html'
})
export class SongsComponent implements OnInit {
  @Input() songs:SongModel[];
  constructor(
    private playerService:PlayerService
  ) { }

  ngOnInit() {
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

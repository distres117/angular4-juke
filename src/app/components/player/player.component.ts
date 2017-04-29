import { SongModel } from '../../models/song.model';
import { PlayerService } from '../../services/player/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit {
  progress: number;
  constructor(
    private playerService: PlayerService
  ) {}

  get currentSong(): SongModel {
    this.playerService.progress
    return this.playerService.currentSong;
  }
  isPlaying() {
    return this.playerService.playing;
  }
  toggle() {
    if (this.isPlaying)
      this.playerService.pause();
    else
      this.playerService.resume();
  }
  previous(){
    this.playerService.previous();
  }
  next(){
    this.playerService.next();
  }

  ngOnInit(): void {
    this.playerService.progress.subscribe(n=>this.progress = n);
  }

}

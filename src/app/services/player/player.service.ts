import { Observable } from 'rxjs/Rx';
import { SongModel } from '../../models/song.model';
import { ElementRef, EventEmitter, Injectable, OnInit } from '@angular/core';

@Injectable()
export class PlayerService {
  audio: HTMLAudioElement;
  playing:boolean;
  currentSong: SongModel;
  currentList:SongModel[];
  progress:EventEmitter<number> = new EventEmitter();

  constructor() { 
    this.audio = document.createElement('audio');
    this.audio.addEventListener('timeupdate',()=>{
      this.progress.emit((this.audio.currentTime / this.audio.duration) * 100);
    });
    this.audio.addEventListener('ended',()=>{
      this.next();
    });
  }
  pause(){
    this.audio.pause();
    this.playing = false;
  }
  resume(){
    this.audio.play();
    this.playing = true;
  }
  start(song:SongModel, list:SongModel[]){
    this.pause();
    this.audio.src = song.audioUrl;
    this.audio.load();
    this.currentSong = song;
    this.currentList = list;
    this.resume();
  }
  private mod(num:number, m:number):number { 
    return ((num % m) + m) % m; 
  };

  skip(interval:number) {
    var index = this.currentList.indexOf(this.currentSong);
    index = this.mod(index + interval, this.currentList.length);
    this.start(this.currentList[index], this.currentList);
  }

  next() {
    this.skip(1);
  };

  previous() {
    this.skip(-1);
  };
}

import { PlayerService } from '../player/player.service';
import { SongModel } from './../../models/song.model';
import { apiUrl } from '../../app.config';
import { PlaylistModel } from './../../models/playlist.model';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PlaylistService {
  onNewSong: EventEmitter<SongModel> = new EventEmitter();
  onNewPlaylist: EventEmitter<PlaylistModel> = new EventEmitter();
  onDeletePlaylist: EventEmitter<string> = new EventEmitter();
  constructor(
    private http:Http
  ) { }

  getPlaylists():Observable<PlaylistModel[]>{
    return this.http.get(`${apiUrl}/api/playlists`)
      .map(res=>{
        return res.json().map(playlist=>new PlaylistModel(playlist))
      });
  }
  getPlayList(id:string):Observable<PlaylistModel>{
    return this.http.get(`${apiUrl}/api/playlists/${id}`)
      .map(res=>new PlaylistModel(res.json()));
  }
  getPlaylistSongs(id:string):Observable<SongModel[]>{
    return this.getPlayList(id)
      .map(playlist=>playlist.songs);
  }
  addToPlaylist(id:string, song:SongModel){
    this.http.post(`${apiUrl}/api/playlists/${id}/songs`, {song})
      .subscribe(res=>{
        let newSong = new SongModel(res.json());
        this.onNewSong.emit(newSong);
      });
  }
  createPlaylist(playlist:PlaylistModel):Observable<PlaylistModel>{
    return this.http.post(`${apiUrl}/api/playlists`, playlist)
      .map(res=>{
        let newModel = new PlaylistModel(res.json());
        this.onNewPlaylist.emit(newModel);
        return newModel;
      });
  }
  deletePlaylist(id:string){
    this.onDeletePlaylist.emit(id);
    return this.http.delete(`${apiUrl}/api/playlists/${id}`);
  }

}

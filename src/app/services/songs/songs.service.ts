import { Observable } from 'rxjs/Rx';
import { SongModel } from './../../models/song.model';
import { apiUrl } from './../../app.config';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SongsService {

  constructor(
    private http:Http
  ) { }

  getSongs():Observable<SongModel[]>{
    return this.http.get(`${apiUrl}/api/songs`)
      .map(res=>res.json().map(song=>new SongModel(song)));
  }

}

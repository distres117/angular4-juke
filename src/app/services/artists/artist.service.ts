import { SongModel } from './../../models/song.model';
import { apiUrl } from '../../app.config';
import { ArtistModel } from './../../models/artist.model';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ArtistService {

  constructor(
    private http:Http
  ) { }
  getArtists():Observable<ArtistModel[]>{
    return this.http.get(`${apiUrl}/api/artists`)
      .map(res=>{
        return res.json().map(artist=>new ArtistModel(artist))
      });
  }
  getArtist(id:string):Observable<ArtistModel>{
    return this.http.get(`${apiUrl}/api/artists/${id}`)
      .map(res=>new ArtistModel(res.json()));
  }
  getArtistSongs(id:string):Observable<SongModel[]>{
    return this.http.get(`${apiUrl}/api/artists/${id}/songs`)
      .map(res=>res.json().map(song=>new SongModel(song)));
  }

}

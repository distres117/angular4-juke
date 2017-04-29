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

}

import { Observable } from 'rxjs/Rx';
import { AlbumModel } from './../../models/album.model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  constructor(private http:Http) { }

  getAlbums():Observable<AlbumModel[]>{
    return this.http.get('/api/albums')
      .map(res=>Object.assign(new AlbumModel(), res.json().data));
  }
}

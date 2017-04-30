import { SongModel } from './../../models/song.model';
import { AlbumDetailModel } from './../../models/album-detail.model';
import { apiUrl } from './../../app.config';
import { Observable } from 'rxjs/Rx';
import { AlbumModel } from './../../models/album.model';
import { Headers, Http, RequestOptions, Response, ResponseType } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AlbumsService {
  constructor(
    private http:Http 
  ) { }

  getAlbums(id?:string):Observable<AlbumModel[]>{
    let url = id ? `api/artists/${id}/albums` : 'api/albums';
    return this.http.get(`${apiUrl}/${url}`)
      .map((res:Response)=>{
        return res.json().map(album=>new AlbumModel(album));
      })
      .catch(this.handleError);
  }
  getAlbum(id:string):Observable<AlbumDetailModel>{
    return this.http.get(`${apiUrl}/api/albums/${id}`)
      .map(res=>new AlbumDetailModel(res.json()));
  }
  getAlbumSongs(id:string):Observable<SongModel[]>{
    return this.getAlbum(id)
      .map(album=>album.songs);
  }
  
  handleError(error:Response){
    return Observable.throw(error.json().error || 'server error');
  }
}

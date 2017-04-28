import { Observable } from 'rxjs/Rx';
import { AlbumModel } from './../../models/album.model';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';

@Injectable()
export class AlbumsService {

  constructor(
    private http:Http,  
  ) { }

  getAlbums():Observable<AlbumModel[]>{
    return this.http.get('/api/albums')
      .map(res=>Object.assign(new AlbumModel(), res.json().data))
      .catch(this.handleError);
  }
  handleError(error:Response){
    return Observable.throw(error.json().error || 'server error');
  }
}

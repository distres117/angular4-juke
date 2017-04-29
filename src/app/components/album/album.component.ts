import { AlbumDetailModel } from './../../models/album-detail.model';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from './../../services/albums/albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent implements OnInit {
  album:AlbumDetailModel;
  
  constructor(
    private albumService:AlbumsService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap(params=>this.albumService.getAlbum(params['id']))
      .subscribe(album=>{
        console.log(album);
        this.album = album;
      });
  }

}

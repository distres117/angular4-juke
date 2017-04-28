import { AlbumModel } from '../../models/album.model';
import { AlbumsService } from '../../services/albums/albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {
  albums: AlbumModel[];
  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.albumsService.getAlbums()
      .subscribe(albums=>this.albums = albums);
  }

}

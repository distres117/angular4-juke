import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AlbumModel } from '../../models/album.model';
import { AlbumsService } from '../../services/albums/albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {
  albums: Observable<AlbumModel[]>;
  constructor(
    private albumsService: AlbumsService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let urlParts = this.route.snapshot.parent.url; 
    let id = urlParts.length > 1 ? urlParts[1].toString() : undefined;
    this.albums = this.albumsService.getAlbums(id);
  }

}

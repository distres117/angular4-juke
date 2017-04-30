import { ArtistModel } from './../../models/artist.model';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../../services/artists/artist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  artist:ArtistModel;
  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap(params=>this.artistService.getArtist(params['id']))
      .subscribe(artist=>this.artist = artist);
  }

}

import { FormControl } from '@angular/forms';
import { ArtistService } from './../../services/artists/artist.service';
import { Observable } from 'rxjs/Rx';
import { ArtistModel } from './../../models/artist.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html'
})
export class ArtistsComponent implements OnInit{
  artists: Observable<ArtistModel[]>;
  filteredArtists: Observable<ArtistModel[]>;
  filterInput: FormControl = new FormControl();

  constructor(
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.artists = this.filteredArtists = this.artistService.getArtists();
    this.filterInput
      .valueChanges
      .debounceTime(200)
      .subscribe((term:string)=>{
        if (term){
          this.filteredArtists = this.artists
            .map(artists=>{
              return artists.filter(artist=>artist.name.toLowerCase().slice(0, term.length) === term.toLowerCase());
            });
        }else{
          this.filteredArtists = this.artists;
        }
      });
  }

}

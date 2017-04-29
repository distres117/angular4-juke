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
  artists: ArtistModel[];
  filteredArtists: ArtistModel[];
  filterInput: FormControl = new FormControl();

  constructor(
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.artistService.getArtists()
      .subscribe(artists=>this.artists = this.filteredArtists = artists);
    this.filterInput
      .valueChanges
      .debounceTime(200)
      .subscribe((term:string)=>{
        if (term){
          this.filteredArtists = this.artists.filter((artist:ArtistModel)=>{
            return artist.name.toLowerCase().slice(0, term.length) === term.toLowerCase();
          })
        }else{
          this.filteredArtists = this.artists;
        }
      });
  }

}

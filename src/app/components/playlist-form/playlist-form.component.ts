import { Router } from '@angular/router';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { PlaylistModel } from '../../models/playlist.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html'
})
export class PlaylistFormComponent implements OnInit {
  newlist:Object= {name:null}
  constructor(
    private playlistService:PlaylistService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  handleClick(){
    this.playlistService.createPlaylist(this.newlist as PlaylistModel)
      .subscribe(playlist=>{
        this.router.navigate(['/playlists', playlist._id]);
      })
  }

}

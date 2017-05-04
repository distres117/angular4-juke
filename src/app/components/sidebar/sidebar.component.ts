import { PlaylistModel } from '../../models/playlist.model';
import { Observable } from 'rxjs/Rx';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  playlists: PlaylistModel[]
  
  constructor(
    private playlistService: PlaylistService
  ) { }

  ngOnInit() {
    this.playlistService.getPlaylists()
      .subscribe(playlists=>{
        this.playlists = playlists;
      });
    this.playlistService.onNewPlaylist.subscribe(playlist=>this.playlists.push(playlist));
      
  }
  removePlaylist(playlist:PlaylistModel){
    this.playlistService.deletePlaylist(playlist._id)
      .subscribe(()=>{
        this.deletePlaylist(playlist);
      });
  }
  deletePlaylist(playlist:PlaylistModel){
    let idx = this.playlists.indexOf(playlist);
    this.playlists.splice(idx,1);
  }

}

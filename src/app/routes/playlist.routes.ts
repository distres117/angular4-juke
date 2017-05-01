import { PlaylistComponent } from '../components/playlist/playlist.component';
import { PlaylistFormComponent } from '../components/playlist-form/playlist-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path:'playlists/new', component:PlaylistFormComponent},
    {path:'playlists/:id', component:PlaylistComponent}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PlayListRouting{}
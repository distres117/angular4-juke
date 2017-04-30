import { SongsComponent } from './../components/songs/songs.component';
import { AlbumsComponent } from './../components/albums/albums.component';
import { ArtistComponent } from './../components/artist/artist.component';
import { ArtistsComponent } from './../components/artists/artists.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path:'artists', component:ArtistsComponent},
    {path:'artists/:id', component:ArtistComponent, children:[
        {path:'albums', component:AlbumsComponent},
        {path:'songs', component:SongsComponent}
    ]}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ArtistRouting{}
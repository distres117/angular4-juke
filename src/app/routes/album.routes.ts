import { AlbumComponent } from './../components/album/album.component';
import { AlbumsComponent } from './../components/albums/albums.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path:'albums', component:AlbumsComponent},
    {path:'albums/:id', component:AlbumComponent}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AlbumRouting{}
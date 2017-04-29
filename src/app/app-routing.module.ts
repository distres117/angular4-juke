import { AlbumRouting } from './routes/album.routes';
import { AlbumsComponent } from './components/albums/albums.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes : Routes = [
  {path: '', redirectTo:'/', pathMatch:'full'}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AlbumRouting,
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

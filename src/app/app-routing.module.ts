import { AlbumsComponent } from './components/albums/albums.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes : Routes = [
  {path: 'albums', component: AlbumsComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

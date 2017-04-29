import { apiUrl } from './../../app.config';
import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { AlbumsService } from './albums.service';

fdescribe('AlbumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumsService, {provide:apiUrl, useValue:'http://example'}],
      imports:[HttpModule]
    });
    
  });

  it('should ...', inject([AlbumsService], (service: AlbumsService) => {
    expect(service).toBeTruthy();
  }));
  it('should fetch all albums', inject([AlbumsService], (service:AlbumsService)=>{
    service.getAlbums().subscribe(albums=>{
      expect(albums.length).toBeGreaterThan(0);
    },err=>{
      console.log(err);
    })
  }));
});

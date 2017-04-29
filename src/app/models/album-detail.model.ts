import { apiUrl } from './../app.config';
import { SongModel } from './song.model';
import { ArtistModel } from './artist.model';

export class AlbumDetailModel{
    _id:string;
    name:string;
    artists: ArtistModel[];
    songs:SongModel[];

    constructor(data:Object){
        for(let k in data){
            if (k === 'artists')
                this.artists = data[k].map(artist=>Object.assign(new ArtistModel(artist)));
            else if(k==='songs')
                this.songs = data[k].map(song=>Object.assign(new SongModel(song)))
            else{
                this[k] = data[k];
            }
        }
    }
    public get imageUrl():string{
        return `${apiUrl}/api/albums/${this._id}.image`;
    }
}
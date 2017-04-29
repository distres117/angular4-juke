import { apiUrl } from './../app.config';
import { ArtistModel } from './artist.model';
export class SongModel{
    _id:string;
    size:number;
    name:string;
    extension:string;
    genres:string[];
    artists: ArtistModel[];

    constructor(data:Object){
        for(let k in data){
            if (k === 'artists')
                this.artists = data[k].map(artist=>new ArtistModel(artist));
            else
                this[k] = data[k];
        }
    }
    public get audioUrl():string{
        return `${apiUrl}/api/songs/${this._id}.audio`;
    }

}
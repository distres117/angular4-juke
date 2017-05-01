import { apiUrl } from './../app.config';
import { ArtistModel } from './artist.model';
export class SongModel{
    _id:string = null;
    size:number = null;
    name:string = null;
    extension:string = null;
    genres:string[] = null;
    artists: ArtistModel[] | string[] = null;

    constructor(data:Object){
        for(let k in data){
            if (k === 'artists' && !data[k].some(d=>typeof d === 'string'))
                this.artists = data[k].map(artist=>new ArtistModel(artist));
            else if (this[k]===null)
                this[k] = data[k];
        }
    }
    public get audioUrl():string{
        return `${apiUrl}/api/songs/${this._id}.audio`;
    }

}
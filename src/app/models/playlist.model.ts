import { SongModel } from './song.model';
import { ArtistModel } from './artist.model';
export class PlaylistModel{
    _id:string = null;
    name:string = null;
    artists: string[] | ArtistModel[] = null;
    songs: string[] | SongModel[] = null;
    constructor(data?:Object){
        if (!data) return;
        for(let k in data){
            if (k === 'artists' && !this.isStringArray(data[k])){
                this.artists = data[k].map(artist=>new ArtistModel(artist));
            }else if (k === 'songs' && !this.isStringArray(data[k])){
                this.songs = data[k].map(song=>new SongModel(song));
            }else if(this[k]===null){
                this[k] = data[k];
            }
        }
    }
    private isStringArray(data:any[]){
        return data.some(d=>typeof d === 'string');
    }
}
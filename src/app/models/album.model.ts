import { apiUrl } from './../app.config';

export class AlbumModel{
    _id:string;
    name:string;
    artists:string[];
    songs:string[];
    
    constructor(data:Object){
        Object.assign(this,data);
    }
    public get imageUrl():string{
        return `${apiUrl}/api/albums/${this._id}.image`;
    }
}
export class AlbumModel{
    _id:string;
    name:string;
    artists:string[];
    songs:string[];
    
    public get imageUrl():string{
        return `/api/albums/${this._id}.image`;
    }
}
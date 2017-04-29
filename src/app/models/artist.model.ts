export class ArtistModel{
    name:string;
    _id:string

    constructor(data:Object){
        Object.assign(this, data);
    }
}
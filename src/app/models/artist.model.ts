export class ArtistModel{
    name:string = null;
    _id:string = null

    constructor(data:Object){
        for(let k in data){
            if (this[k]===null)
                this[k] = data[k];
        }

    }
}
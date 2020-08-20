import { Chapter } from './chapter';

export class News {
    private _id : string;
    private _title : string;
    private _category : string;
    private _date : Date;
    private _publisher : string;
    private _chapters : Chapter[];
    private _image : File;

    constructor(){}

    getId() : string {
        return this._id;
    }

    getTitle() : string {
        return this._title;
    }

    getCategory() : string {
        return this._category;
    }

    getDate() : Date {
        return this._date;
    }

    getPublisher() : string {
        return this._publisher;
    }

    getChapters() : Chapter[] {
        return this._chapters;
    }

    getImage() : File {
        return this._image;
    }

    setId(id:string) : void {
        this._id = id;
    }

    setTitle(title:string) : void {
        this._title = title
    }

    setCategory(category:string) : void {
        this._category = category;
    }

    setDate(date:Date) : void {
        this._date = date;
    }

    setPublisher(publisher:string) : void {
        this._publisher = publisher;
    }

    setChapters(chapters:Chapter[]) : void {
        this._chapters = chapters;
    }

    setImage(image:File) : void {
        this._image = image;
    }

}
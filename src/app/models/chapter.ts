

export class Chapter{
    private _title : string;
    private _content : string;

    constructor(title:string = '', content:string) {
        this._title = title;
        this._content = content;
    }

    getTitle() : string {
        return this._title;
    }
    getContent() : string {
        return this._content;
    }

    setTitle(title:string) : void {
        this._title = title;
    }
    setContent(content:string) : void {
        this._content = content;
    }
}
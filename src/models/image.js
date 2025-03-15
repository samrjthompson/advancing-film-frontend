export default class Image {
    constructor(title, content, imageUrl) {
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
    }

    title;
    content;
    imageUrl;

    static fromJSON(json) {
        return new Image(json.title, json.content, json.imageUrl);
    }
}
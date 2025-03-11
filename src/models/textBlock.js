export default class TextBlock {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    title;
    content;

    static fromJSON(json) {
        return new TextBlock(json.title, json.content);
    }
}
export class createBook {
    constructor(author, title, ibraryID) {
        this.author = author;
        this.title = title;
        this.ibraryID = ibraryID;
    }
}

export function sortByTitle(books) {
    return books.sort((a, b) => a.title > b.title);
}


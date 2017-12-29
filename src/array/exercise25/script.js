export class Book {
    constructor(author, title, libraryId) {
        this.author = author;
        this.title = title;
        this.libraryId = libraryId;
    }
    compareByTitle(another) {
        return this.title > another.title;
    }
}

export function sortByTitle(books) {
    return books.sort((a, b) => a.compareByTitle(b));
}

import {
    sortByTitle, Book
} from './script';

describe('Sort the following array of objects by title value', () => {
    it('Should sort book by title value', () => {
        let book = [new Book('Bill Gates', 'The Road Ahead', 1254), new Book('Steve Jobs', 'Walter Isaacson', 4264), new Book('Suzanne Collins', 'Mockingjay: The Final Book of The Hunger Games', 3245)];
        let orderedBook = sortByTitle(book);
        expect(orderedBook).toEqual([new Book('Suzanne Collins', 'Mockingjay: The Final Book of The Hunger Games', 3245), new Book('Bill Gates', 'The Road Ahead', 1254), new Book('Steve Jobs', 'Walter Isaacson', 4264)]
        );
    });
});
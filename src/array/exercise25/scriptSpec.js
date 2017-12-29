import {
    sortByTitle, createBook
} from './script';

describe('Sort the following array of objects by title value', () => {
    it('Should sort book by title value', () => {
        let books = [];
        books.push(new createBook('Bill Gates', 'The Road Ahead', 1254), new createBook('Steve Jobs', 'Walter Isaacson', 4264), new createBook('Suzanne Collins', 'Mockingjay: The Final Book of The Hunger Games', 3245));

        let orderedBooks = sortByTitle(books);
        expect(orderedBooks).toEqual([new createBook('Suzanne Collins', 'Mockingjay: The Final Book of The Hunger Games', 3245), new createBook('Bill Gates', 'The Road Ahead', 1254), new createBook('Steve Jobs', 'Walter Isaacson', 4264)]
        );
    });
});



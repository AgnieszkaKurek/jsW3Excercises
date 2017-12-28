import {
    sortByTitle
} from './script';

describe('Sort the following array of objects by title value', () => {
    it('Should sort book by title value', () => {
        let books = [{
            author: 'Bill Gates',
            title: 'The Road Ahead',
            libraryID: 1254
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            libraryID: 4264
        },
        {
            author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            libraryID: 3245
        },
        ];
        let orderedBooks = sortByTitle(books);
        expect(orderedBooks).toEqual(
            [{
                author: 'Suzanne Collins',
                title: 'Mockingjay: The Final Book of The Hunger Games',
                libraryID: 3245
            },
            {
                author: 'Bill Gates',
                title: 'The Road Ahead',
                libraryID: 1254
            },
            {
                author: 'Steve Jobs',
                title: 'Walter Isaacson',
                libraryID: 4264
            },
            ]
        );
    });
});



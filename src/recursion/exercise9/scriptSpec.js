import {
    sortNumbers,
    sortByAge,
    sortByNameLength,
    sortBySumOfElements
} from './script';

describe("Merge and sort nubers from array", (() => {

    it("Numbers from a given array [34,7,23,32,5,62], were ordereded from the smallest to the largest [5, 7, 23, 32, 34, 62]", (() => {
        let orderedNumbers = sortNumbers([34, 7, 23, 32, 5, 62]);
        expect(orderedNumbers).toEqual([5, 7, 23, 32, 34, 62]);
    }));

}));

describe('Sort people by age', () => {
    it('Should sort people by age appropriatelly', () => {
        let people = [{
                name: 'Agnieszka',
                age: 31
            },
            {
                name: 'Krzysztof',
                age: 32
            },
            {
                name: 'Prosiuś',
                age: 7
            },
        ];
        let orderedPeople = sortByAge(people);
        expect(orderedPeople).toEqual(
            [{
                    name: 'Prosiuś',
                    age: 7
                },
                {
                    name: 'Agnieszka',
                    age: 31
                },
                {
                    name: 'Krzysztof',
                    age: 32
                },
            ]
        );
    });
});

describe('Sort people by name length', () => {
    it('Should sort people by name length appropriatelly', () => {
        let people = [{
                name: 'Agnieszka',
                age: 31
            },
            {
                name: 'Chrumeczek',
                age: 32
            },
            {
                name: 'Prosiuś',
                age: 7
            },
        ];
        let orderedPeople = sortByNameLength(people);
        expect(orderedPeople).toEqual(
            [{
                    name: 'Prosiuś',
                    age: 7
                },
                {
                    name: 'Agnieszka',
                    age: 31
                },
                {
                    name: 'Chrumeczek',
                    age: 32
                },
            ]
        );
    });
});

describe('Sort arrays by sum of elements ascending', () => {
    it('Should sort arrays by lenth', () => {
        let arrays = [
            [2, 3, 4],
            [5, 6, 7],
            [0, 1, 2],
        ];
        let orderedArrays = sortBySumOfElements(arrays);
        expect(orderedArrays).toEqual(
            [
                [0, 1, 2],
                [2, 3, 4],
                [5, 6, 7],
            ]
        );
    });
});
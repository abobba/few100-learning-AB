describe('types', () => {
    describe('declaring variables', () => {
        it('using the let keyword', () => {
            let name: string | number = 'Jeff';

            expect(name).toBe('Jeff');
            name = 'Buffy';
            expect(name).toBe('Buffy');
            name = 1138;
            expect(name).toBe(1138);
            let x: number | boolean;
        });
        it('a const keyword', () => {
            const PI = 3.14;
            const favoriteNumbers = [1, 2, 3, 4, 5, 6];
            //favoriteNumbers = [20,108];
            favoriteNumbers[0] = 108;

            const movie = {
                title: 'Star Wars, IV',
                director: 'Lucas',
                yearReleased: 1978
            };

            movie.yearReleased = 1977;
        });
    });
});
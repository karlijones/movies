beforeEach(() => {
    document.querySelector('#target').innerHTML = '';
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData() {
            return [
                { Title: 'Avengers' },
                { Title: 'Not Avengers' },
                { Title: 'Some Other Movie' }
            ];
        },
        renderOption(movie) {
            return movie.Title;
        }
    });
});

it('Dropdown starts closed', () => {
    const dropdown = document.querySelector('.dropdown');

    expect(dropdown.className).not.to.include('is-active');
});

it('After searching, dropdown opens up', () => {

});
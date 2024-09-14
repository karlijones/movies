it('Shows an autocomplete', () => {
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
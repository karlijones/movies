it('Shows an autocomplete', () => {
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData() {
            return[
                { Title: 'Avengers' },
                { Title: 'Not Avengers' },
                { Title: 'Some Other Movie' },
            ];
        }
    });
});
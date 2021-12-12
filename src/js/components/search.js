const search = () => {
    const searchInput = document.querySelector('.search-name input');
    const tableRows = document.querySelector('.table tbody').querySelectorAll('tr');

    searchInput.addEventListener('input', (e) => {
        const searchInputValue = e.target.value.toLowerCase();
        tableRows.forEach(row => {
            const doesRowMatch = row.textContent.toLowerCase().includes(searchInputValue);
            if (doesRowMatch) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    });
};

export default search;
const editItem = (arrItems) => {
    const btnEdit = document.querySelectorAll('.btn-edit');
    const btn = btnEdit[btnEdit.length - 1];
    const parent = btn.closest('.parent');
    const name = parent.querySelector('[data-editName]');
    btn.addEventListener('click', () => {
        const input = btn.nextElementSibling;
        const id = parent.querySelector('td').innerText;
        const objIndex = arrItems.findIndex(el => el[0] == id);
        input.classList.toggle('show');
        input.addEventListener('input', () => {
            name.innerText = input.value;
            localStorage.setItem(id, input.value);
            arrItems[objIndex][1] = input.value;
        });
    });
};

export default editItem;
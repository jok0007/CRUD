const delItem = (arrItems) => {
    const btnDel = document.querySelectorAll('.btn-del');
    const btn = btnDel[btnDel.length - 1];
    const parent = btn.closest('.parent');
    btn.addEventListener('click', () => {
        const id = parent.querySelector('td').innerText;
        parent.remove();
        localStorage.removeItem(id);
        arrItems = arrItems.filter(item => {
            return item[0] != id;
        });
    });
};

export default delItem;
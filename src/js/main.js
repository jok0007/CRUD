const addName = () => {

    let arrItems = [];
    let chois;

    const selection = document.querySelector('.storage-selection');
    const btnsStorageSelection = selection.querySelectorAll('button');
    const content = document.querySelector('.content');

    btnsStorageSelection.forEach(btn => {
        btn.addEventListener('click', function () {
            if (this.classList.contains('btn-memory')) {
                chois = true;
            } else {
                chois = false;
            }

            selection.classList.add('hidden');
            content.classList.add('show');

        });
    });


    const input = document.querySelector('.add-name input');
    const button = document.querySelector('.add-name button');
    button.addEventListener('click', () => {
        if (input.value == '') {
            input.classList.add("invalid");
        } else {
            if (input.classList.contains('invalid')) {
                input.classList.remove('invalid');
            }
            if (chois) {
                let item = addMemory();
                addItem(item);
            } else {
                addLocalStorage();
                let item = Object.entries(localStorage).sort((a, b) => a[0] - b[0]);
                addItem(item);
            }

        }
    });

    function addLocalStorage() {
        const id = Date.now();
        const name = document.querySelector('.add-name input').value;
        return localStorage.setItem(id, name);
    }


    function addMemory() {
        let item = [];
        item[0] = Date.now();
        item[1] = document.querySelector('.add-name input').value;
        arrItems.push(item);
        return arrItems;
    }

    const addItem = (items) => {
        const input = document.querySelector('.add-name input');
        const table = document.querySelector('.crud table tbody');
        const tr = document.createElement('tr');
        tr.classList.add('parent');

        const item = items[items.length - 1];
        tr.innerHTML = `
            <td>${item[0]}</td>
                    <td data-editName>${item[1]}</td>
                    <td class="d-flex">
                        <button type="button" class="btn btn-primary btn-edit me-2"><i class="fa fa-pencil"
                                aria-hidden="true"></i></button>
                                <input class="form-control me-2" type="text">
                                <button type="button" class="btn btn-primary btn-del"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                                            
                    </td>
                `;
        table.append(tr);
        input.value = '';
        delItem(items);
        editItem(items);
        search();
    };

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
};

addName();
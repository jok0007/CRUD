import editItem from './editItem';
import delItem from './delItem';
import search from './search';

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

export default addItem;
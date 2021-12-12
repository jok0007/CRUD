import editItem from './editItem';
import delItem from './delItem';
import search from './search';

const showLocalStoage = () => {
    let items = Object.entries(localStorage).sort((a, b) => a[0] - b[0]);
    items.forEach(item => {
        const table = document.querySelector('.crud table tbody');
        const tr = document.createElement('tr');
        tr.classList.add('parent');
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
        delItem(items);
        editItem(items);
        search();
    });
};

export default showLocalStoage;
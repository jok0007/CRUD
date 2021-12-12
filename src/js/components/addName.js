import addLocalStorage from './addLocalStorage';
import addItem from './addItem';
import addMemory from './addMemory';

const addName = (selectorStorage) => {
    let arrItems = [];
    const input = document.querySelector('.add-name input');
    const button = document.querySelector('.add-name button');
    button.addEventListener('click', () => {
        addItems();
    });

    input.addEventListener('keydown', function (event) {
        if (event.code == 'Enter') {
            event.preventDefault();
            addItems();
        }
    });

    function addItems() {
        if (input.value == '') {
            input.classList.add("invalid");
        } else {
            if (input.classList.contains('invalid')) {
                input.classList.remove('invalid');
            }
            if (selectorStorage) {
                let item = addMemory(arrItems);
                addItem(item);
            } else {
                addLocalStorage();
                let item = Object.entries(localStorage).sort((a, b) => a[0] - b[0]);
                addItem(item);
            }

        }
    }

};

export default addName;
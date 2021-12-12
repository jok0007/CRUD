import showLocalStoage from './showLocalStoage';
import addName from './addName';

const initStorage = () => {
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
                showLocalStoage();
            }

            selection.classList.add('hidden');
            content.classList.add('show');
            addName(chois);
        });
    });

};

export default initStorage;
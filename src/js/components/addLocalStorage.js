const addLocalStorage = () => {
    const id = Date.now();
    const name = document.querySelector('.add-name input').value;
    return localStorage.setItem(id, name);
};

export default addLocalStorage;
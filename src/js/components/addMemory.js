const addMemory = (arr) => {
    let item = [];
    item[0] = Date.now();
    item[1] = document.querySelector('.add-name input').value;
    arr.push(item);
    return arr;
};

export default addMemory;
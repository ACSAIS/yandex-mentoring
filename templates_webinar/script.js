const todos = [
    'Сделать проектную работу', 
    'Полить цветы', 'Пройти туториал по Реакту', 
    'Сделать фронт для своего проекта', 
    'Погулять с собакой', 
    'Разобраться в замыканиях', 
    'Решить задачу на Codewars',
];
const itemTemplate = document.querySelector('.item_template').content;
const list = document.querySelector('.list');
const formButton = document.querySelector('.form__submit');
const formInput = document.querySelector('.form__input');

const state = {
    mode: 'add',
    index: null,
}


/* 
<li class="list__item">
    <span class="item__text"></span>
    <img class="edit" src="images/Edit.png" alt="Редактировать">
    <img class="duplicate" src="images/Duplicate.png" alt="Копировать">
    <img class="delete" src="images/Delete.png" alt="Удалить">
</li>
 */

 function render() {
     clean();
     todos.forEach(renderItem);
     setAllListeners();
 }

 render();



 function renderItem(text, index) {
    const element = itemTemplate.cloneNode(true);
    element.querySelector('.item__text').innerText = text;
    element.querySelector('.list__item').setAttribute('id', index);
    list.appendChild(element);
 }

 function handleDelete(event) {
    const index = event.target.parentNode.getAttribute('id');
    todos.splice(index, 1);
    render();
 }

 function handleSubmit() {
    const text = formInput.value;
    if (state.mode === 'add') {
        todos.unshift(text);
    } else if (state.mode === 'edit') {
        todos[state.index] = text;
    }
    
    formInput.value = '';
    render();
}

 function handleEdit(event) {
    const index = event.target.parentNode.getAttribute('id');
    const text = todos[index];
    formInput.value = text;
    formButton.value = "Сохранить";
    state.mode = 'edit';
    state.index = index;
 }

 function handleDuplicate(event) {
    const index = event.target.parentNode.getAttribute('id');
    const text = todos[index];
    todos.splice(index, 0, [text]);
    render();
 }

 function setAllListeners() {
    formButton.addEventListener('click', handleSubmit);
    document.querySelectorAll('.delete').forEach(deleteButton => {
        deleteButton.addEventListener('click', handleDelete);
    })
    document.querySelectorAll('.edit').forEach(editButton => {
        editButton.addEventListener('click', handleEdit);
    })
    document.querySelectorAll('.duplicate').forEach(duplicateButton => {
        duplicateButton.addEventListener('click', handleDuplicate)
    })
 }

 function setDefaultState() {
     state.mode = 'add';
     state.index = null;
 }

 function clean() {
    formButton.value = "Добавить";
    setDefaultState();
    list.innerHTML = '';
 }
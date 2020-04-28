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

formButton.addEventListener('click', handleSubmit);

function handleSubmit() {
    const text = formInput.value;
    todos.unshift(text);
    formInput.value = '';
    render();
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
     list.innerHTML = '';
     todos.forEach(renderItem);
     addEventListeners();
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

 function addEventListeners() {
    document.querySelectorAll('.delete').forEach(deleteButton => {
        deleteButton.addEventListener('click', handleDelete);
    })
 }

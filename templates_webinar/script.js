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

/* 
<li class="list__item">
    <span class="item__text"></span>
    <img class="edit" src="images/Edit.png" alt="Редактировать">
    <img class="duplicate" src="images/Duplicate.png" alt="Копировать">
    <img class="delete" src="images/Delete.png" alt="Удалить">
</li>
 */

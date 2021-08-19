import './style.css';

const toDoItems = [{ description: 'Do the chores', completed: false, index: 0 }, { description: 'Get some groceries', completed: false, index: 1 }, { description: 'Take Microverse class', completed: false, index: 2 }];
const listWrap = document.querySelector('.todo-list-wrap');
// IMPLEMENT TO DO ITEMS TO SCREEN
const implementToDoItems = () => {
  toDoItems.forEach((item) => {
    listWrap.innerHTML += `<li class="list-item" data-key="${item.index}">
      <div class="list-item-check-name">
        <button type="button" class="check-item" data-key="${item.index}"></button>
        <input class="description-input" type="text" value="${item.description}">
      </div>
      <button data-key="${item.index}" class="move-item"><i class="fas fa-ellipsis-v"></i></button>
    </li>`;
  });
};
implementToDoItems();
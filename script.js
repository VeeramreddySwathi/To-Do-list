const todoList = [
  
];

function renderTodoList(){
  let todoListHTML = '';
  for(let index =0 ; index < todoList.length ; index++){
    const todoObject = todoList[index];
    const Name = todoObject.Name;
    const dueDate = todoObject.dueDate;
    const html = `<div>${Name}</div>
    <div>${dueDate}</div>
     
    <button class="delete-todo-button" onclick="
    
    todoList.splice(${index},1);
    renderTodoList();
    ">Delete</button>`;
    todoListHTML += html;
    
  }


  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo(){
  const inputElement  = document.querySelector('.js-name-input');
  const Name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({

    Name :Name,
    dueDate : dueDate
  });

  inputElement.value = '';
  renderTodoList();
}
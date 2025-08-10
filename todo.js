let todoList = [];

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value.trim();
    let todoDate = dateElement.value;

    if (todoItem === "" || todoDate === "") {
        alert("⚠️ Please enter both task and date!");
        return;
    }

    todoList.push({ item: todoItem, dueDate: todoDate });

    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    containerElement.innerHTML = '';

    todoList.forEach((todo, i) => {
        containerElement.innerHTML += `
            <div class="todo-item">
                <div class="todo-text">
                    <span>${todo.item}</span>
                    <span>📅 ${todo.dueDate}</span>
                </div>
                <button class="delete-btn" onclick="deleteTodo(${i})">❌ Delete</button>
            </div>
        `;
    });
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    displayItems();
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'todo-angular-app';
  todoList: string[] = [];

  addItemtoTodo(inputItem: string) {
    this.todoList.push(inputItem)
    return this.todoList
  }

  getTodoList() {
    return this.todoList;
  }
}

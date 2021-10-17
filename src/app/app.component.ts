import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'todo-angular-app';
  todoList: string[] = [];
  @ViewChild('todoInput') todoInput!: ElementRef

  addItemtoTodo(inputItem: string): boolean {
    if (inputItem && inputItem !== '') {
      this.todoList.push(inputItem)
      this.todoInput.nativeElement.value = ''
      return true
    }
    return false
  }
  getTodoList() {
    return this.todoList;
  }
}

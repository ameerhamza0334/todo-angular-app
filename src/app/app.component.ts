import { Component, ElementRef, ViewChild } from '@angular/core';
import { todoModel } from 'src/models/todoRequestModel';
import { TodoService } from 'src/services/todo.service';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'todo-angular-app';
  todoList: string[] = [];
  @ViewChild('todoInput') todoInput!: ElementRef

  constructor(private _todoService: TodoService) { }

  async addItemtoTodo(inputItem: string): Promise<boolean> {
    if (inputItem && inputItem !== '') {
      let todoReqModel: todoModel = {
        todo: inputItem
      }

      let resp = await this._todoService.create(todoReqModel).toPromise()
      this.todoInput.nativeElement.value = ''
      this.todoList.push(resp.todo)
      return true
    }
    return false
  }

  getTodoList() {
    return this.todoList;
  }
}

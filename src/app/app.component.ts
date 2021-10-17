import { Component, ElementRef, ViewChild } from '@angular/core';
import { todoModel } from 'src/models/todoRequestModel';
import { TodoService } from 'src/services/todo.service';
import { NgxSpinnerService } from "ngx-spinner";
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

  constructor(private _todoService: TodoService, private spinner: NgxSpinnerService) { }

  addItemtoTodo(inputItem: string): Observable<boolean> {
    if (inputItem && inputItem !== '') {
      let todoReqModel: todoModel = {
        todo: inputItem
      }
      this.spinner.show()
      return this._todoService.create(todoReqModel).pipe(map(resp => {
        this.todoInput.nativeElement.value = ''
        this.todoList.push(resp.todo)
        return true
      }))
    }
    return of(false)
  }

  getTodoList() {
    return this.todoList;
  }
}

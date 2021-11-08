import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { todoModel } from 'src/models/todoRequestModel';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: string[] = [];
  @ViewChild('todoInput') todoInput!: ElementRef

  constructor(private _todoService: TodoService, private spinner: NgxSpinnerService) { }
  ngOnInit(): void {

  }

  async addItemtoTodo(inputItem: string): Promise<boolean> {
    if (inputItem && inputItem !== '') {
      let todoReqModel: todoModel = {
        todo: inputItem
      }
      this.spinner.show()
      let resp = await this._todoService.create(todoReqModel).toPromise()
      this.spinner.hide()
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

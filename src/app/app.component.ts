import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { todoModel } from 'src/models/todoRequestModel';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'todo-angular-app';
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { ToDo } from './models/todo';
import { ToDoAPIService } from './services/api/to-do.api.service';
import { ErrorBoxComponent } from './error-box/error-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todoList: ToDo[];
  showCompleted: boolean;

  constructor(public dialog: MatDialog, private api: ToDoAPIService) {}

  ngOnInit() {
    this.loadData();
  }

  onAddClick() {
    const dialogRef = this.dialog.open(AddTodoComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((data: ToDo) => {
      if (data.title) {
        this.api
          .add(data)
          .subscribe(todo => this.todoList.push(todo), this.errorFn);
      }
    });
  }

  onChange() {
    this.showCompleted = !this.showCompleted;
  }

  onMarkComplete(data: any[]) {
    const idList: number[] = data.map(item => item.value);
    const updateList: ToDo[] = [];
    this.todoList.forEach(todo => {
      if (idList.indexOf(todo.id) !== -1) {
        todo.completed = true;
        updateList.push(todo);
      }
    });
    this.api.updateList(updateList).subscribe(todoList => {}, this.errorFn);
  }

  onDelete(data: any[]) {
    const idList: number[] = data.map(item => item.value);
    this.todoList = this.todoList.filter(todo => {
      return idList.indexOf(todo.id) === -1;
    });

    this.api.deleteList(idList).subscribe(_ => {}, this.errorFn);
  }

  private errorFn(e) {
    const dialogRef = this.dialog.open(ErrorBoxComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((data: ToDo) => this.loadData());
  }

  private loadData() {
    this.api.list().subscribe(todoList => (this.todoList = todoList));
  }
}

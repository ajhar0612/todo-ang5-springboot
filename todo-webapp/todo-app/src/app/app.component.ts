import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { ToDo } from './models/todo';
import { ToDoAPIService } from './services/api/to-do.api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private todoList: ToDo[];
  private showCompleted: boolean;

  constructor(public dialog: MatDialog, private api: ToDoAPIService) {}

  ngOnInit() {
    this.loadData();
  }

  private errorFn(e) {
    // TODO show message box to user
    console.log('Error occurred!!');
    this.loadData();
  }

  private loadData() {
    this.api.list().subscribe(todoList => (this.todoList = todoList));
  }

  private onAddClick() {
    const dialogRef = this.dialog.open(AddTodoComponent, {
      width: '400px'
    });

    dialogRef
      .afterClosed()
      .subscribe((data: ToDo) =>
        this.api
          .add(data)
          .subscribe(todo => this.todoList.push(todo), this.errorFn)
      );
  }

  private onChange(evt) {
    this.showCompleted = !this.showCompleted;
  }

  private onMarkComplete(data: any[]) {
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

  private onDelete(data: any[]) {
    const idList: number[] = data.map(item => item.value);
    this.todoList = this.todoList.filter(todo => {
      return idList.indexOf(todo.id) === -1;
    });

    this.api.deleteList(idList).subscribe(_ => {}, this.errorFn);
  }
}

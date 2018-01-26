import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSelectionList } from '@angular/material';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { ToDo } from './models/todo';
import { ToDoService } from './services/api/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: ToDo[];

  @ViewChild('todoList') todoList: MatSelectionList;

  private showCompleted: boolean;

  constructor(public dialog: MatDialog, private toDoService: ToDoService) {}

  ngOnInit() {
    this.toDoService.getAllToDos().subscribe(todos => {
      console.log('data is ', todos);
      this.todos = todos;
    });
  }

  private onAddClick() {
    const dialogRef = this.dialog.open(AddTodoComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((data: ToDo) => {
      this.toDoService.add(data).subscribe(todo => this.todos.push(todo));
    });
  }

  private onChange(evt) {
    this.showCompleted = !this.showCompleted;
  }

  private onMarkComplete(data: any[]) {
    const idList: number[] = data.map(item => item.value);
    const updateList: ToDo[] = [];
    this.todos.forEach(todo => {
      if (idList.indexOf(todo.id) !== -1) {
        todo.completed = true;
        updateList.push(todo);
      }
    });
    this.toDoService.updateList(updateList).subscribe(todos => {
      console.log('Updated todos: ', todos);
    });
  }

  private onDelete(data: any[]) {
    const idList: number[] = data.map(item => item.value);
    this.todos = this.todos.filter(todo => {
      return idList.indexOf(todo.id) === -1;
    });

    this.toDoService.deleteList(idList).subscribe(todos => {
      console.log('Delete call completed !!');
    });
  }
}

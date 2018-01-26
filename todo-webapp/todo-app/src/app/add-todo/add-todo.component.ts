import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  title: string;
  submitted: boolean;
  constructor(public dialogRef: MatDialogRef<AddTodoComponent>) {}

  onSubmit(data) {
    this.dialogRef.close(data);
  }
}

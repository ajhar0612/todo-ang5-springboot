import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  submitted: boolean;
  constructor(public dialogRef: MatDialogRef<AddTodoComponent>) {}

  ngOnInit() {}

  onSubmit(data) {
    console.log('data: ', data);
    this.dialogRef.close(data);
  }
}

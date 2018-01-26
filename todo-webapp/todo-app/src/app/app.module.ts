import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { AppComponent } from './app.component';
import { ToDoService } from './services/api/to-do.service';

@NgModule({
  declarations: [AppComponent, AddTodoComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [ToDoService],
  entryComponents: [AddTodoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

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
import { ToDoAPIService } from './services/api/to-do.api.service';
import { ErrorBoxComponent } from './error-box/error-box.component';

@NgModule({
  declarations: [AppComponent, AddTodoComponent, ErrorBoxComponent],
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
  providers: [ToDoAPIService],
  entryComponents: [AddTodoComponent, ErrorBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

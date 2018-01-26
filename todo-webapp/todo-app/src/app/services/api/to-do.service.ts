import { ToDo } from './../../models/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class ToDoService {
  endPoint = `${environment.apiEndPoint}/todos`;

  constructor(private http: HttpClient) {}

  getAllToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.endPoint);
  }

  add(toDo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.endPoint, toDo);
  }

  updateList(toDo: ToDo[]): Observable<ToDo[]> {
    return this.http.put<ToDo[]>(this.endPoint, toDo);
  }

  deleteList(toDo: number[]): Observable<void> {
    return this.http.post<void>(`${this.endPoint}/delete`, toDo);
  }
}

import 'rxjs/add/observable/forkJoin';

import { ToDo } from './../../models/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class ToDoAPIService {
  endPoint = `${environment.apiEndPoint}/todos`;

  constructor(private http: HttpClient) {}

  list(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.endPoint);
  }

  add(toDo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.endPoint, toDo);
  }

  updateList(toDo: ToDo[]): Observable<ToDo[]> {
    return this.http.put<ToDo[]>(this.endPoint, toDo);
  }

  deleteList(toDoIdList: number[]): Observable<void[]> {
    return Observable.forkJoin(toDoIdList.map(id => this.delete(id)));
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.endPoint}/${id}`);
  }
}

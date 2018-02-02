import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ToDoAPIService } from './../../services/api/to-do.api.service';
import * as toDoActions from './../actions/todo.action';

@Injectable()
export class ToDoEffects {
  constructor(private actions$: Actions, private apiService: ToDoAPIService) {}

  @Effect()
  loadToDos$ = this.actions$.ofType(toDoActions.LOAD_TODOS).pipe(
    switchMap(() => {
      return this.apiService
        .list()
        .pipe(
          map(todos => new toDoActions.LoadToDosSuccess(todos)),
          catchError(error => of(new toDoActions.LoadToDosSuccess(error)))
        );
    })
  );
}

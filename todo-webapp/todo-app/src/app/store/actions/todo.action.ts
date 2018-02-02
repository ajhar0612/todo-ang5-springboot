import { Action } from '@ngrx/store';

// LOAD TODO

export const LOAD_TODOS = '[TODO] Load ToDos';
export const LOAD_TODOS_FAIL = '[TODO] Load ToDos Fails';
export const LOAD_TODOS_SUCCESS = '[TODO] Load ToDos Success';

export class LoadToDos implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadToDosFail implements Action {
  readonly type = LOAD_TODOS_FAIL;
  constructor(public payload: any) {}
}

export class LoadToDosSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: any) {}
}

export type ToDoAction = LoadToDos | LoadToDosFail | LoadToDosSuccess;

import * as fromToDos from './todos.reducer';

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface AppState {
  todos: fromToDos.ToDoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromToDos.reducer
};

export const getToDosState = createFeatureSelector('todos');

export const getAllToDos = createSelector(getToDosState, fromToDos.getToDos);
export const getToDosLoaded = createSelector(
  getToDosState,
  fromToDos.getToDosLoaded
);
export const getToDosLoading = createSelector(
  getToDosState,
  fromToDos.getToDosLoading
);

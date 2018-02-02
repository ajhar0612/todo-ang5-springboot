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

export const getToDosEntities = createSelector(
  getToDosState,
  fromToDos.getToDosEntities
);

export const getAllToDos = createSelector(getToDosEntities, entities => {
  console.log('Here');
  return Object.keys(entities).map(id => entities[id]);
});

export const getToDosLoaded = createSelector(
  getToDosState,
  fromToDos.getToDosLoaded
);
export const getToDosLoading = createSelector(
  getToDosState,
  fromToDos.getToDosLoading
);

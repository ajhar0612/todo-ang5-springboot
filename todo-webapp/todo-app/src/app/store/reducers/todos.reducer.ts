import { ToDoState } from './todos.reducer';
import { ToDo } from './../../models/todo';
import * as fromToDos from './../actions/todo.action';

export interface ToDoState {
  data: ToDo[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ToDoState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromToDos.ToDoAction
): ToDoState {
  switch (action.type) {
    case fromToDos.LOAD_TODOS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromToDos.LOAD_TODOS_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    }

    case fromToDos.LOAD_TODOS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getToDosLoading = (state: ToDoState) => state.loading;
export const getToDosLoaded = (state: ToDoState) => state.loaded;
export const getToDos = (state: ToDoState) => state.data;

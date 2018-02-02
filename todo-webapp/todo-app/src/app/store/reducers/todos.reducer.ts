import { ToDoState } from './todos.reducer';
import { ToDo } from './../../models/todo';
import * as fromToDos from './../actions/todo.action';

export interface ToDoState {
  entities: {
    [id: number]: ToDo;
  };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ToDoState = {
  entities: {},
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
      const todos = action.payload;
      const entities = todos.reduce(
        (
          tempEntities: {
            [id: number]: ToDo;
          },
          todo
        ) => {
          return {
            ...tempEntities,
            [todo.id]: todo
          };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
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
export const getToDosEntities = (state: ToDoState) => state.entities;

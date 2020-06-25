import { Todo } from './todos/models/todo.model';
import { filtrosValidos } from './todos/ngrx/filtro.actions';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/ngrx/todo.reducer';
import { filtroReducer } from './todos/ngrx/filtro.reducer';

export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
};

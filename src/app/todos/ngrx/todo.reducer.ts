import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from '../models/todo.model';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(initialState,
  on(actions.crearTodo, (state, action) => [...state, new Todo(action.texto)]),
  on(actions.toggleTodo, (state, action) => {
    return state.map(
      todo => {
        if (action.id === todo.id) {
          return {...todo, completado: !todo.completado};
        }
        return todo;
      }
    );
  }),
  on(actions.updateTextTodo, (state, action) => {
    return state.map(
      todo => {
        if (action.id === todo.id) {
          return {...todo, texto: action.texto};
        }
        return todo;
      }
    );
  }),
  on(actions.deleteTodo, (state, action) => {
    return state.filter(todo => todo.id !== action.id);
  }),
  on(actions.toggleAllTodo, (state, action) => state.map(
    todo => {
      return {...todo, completado: action.checked};
    }
  )),
  on(actions.deleteCompleteTodos, state => {
    return state.filter(todo => !todo.completado);
  })
);

export function todoReducer(state, action: Action) {
  return _todoReducer(state, action);
}

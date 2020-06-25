import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction('[TODO] Crear todo', props<{ texto: string }>());
export const toggleTodo = createAction('[TODO] Toggle todo', props<{ id: number }>());
export const updateTextTodo = createAction('[TODO] Update text todo', props<{ id: number, texto: string }>());
export const deleteTodo = createAction('[TODO] Delete todo', props<{ id: number }>());
export const toggleAllTodo = createAction('[TODO] Toggle all todo', props<{ checked: boolean }>());
export const deleteCompleteTodos = createAction('[TODO] Delete complete todos');

import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { toggleTodo, updateTextTodo, deleteTodo } from '../ngrx/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.editando = false;
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, [Validators.required]);
  }

  setEditingField() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    const field = document.getElementById('txtInput') as HTMLInputElement;
    setTimeout(() => {
      field.select();
    }, 1);
  }

  updateTodoText() {
    this.editando = false;
    if (this.txtInput.valid && this.txtInput.value !== this.todo.texto) {
      this.store.dispatch(updateTextTodo({ id: this.todo.id, texto: this.txtInput.value }));
    }
  }

  updateTodoCompletado(checked: boolean) {
    this.store.dispatch(toggleTodo({ id: this.todo.id }));
  }

  deleteTodo() {
    this.store.dispatch(deleteTodo({ id: this.todo.id }));
  }
}

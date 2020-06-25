import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { crearTodo } from '../ngrx/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(
    private store: Store<AppState>
  ) {
    this.txtInput = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
  }

  public addTodo(): void {
    if (this.txtInput.valid) {
      this.store.dispatch(crearTodo({ texto: this.txtInput.value }));
      this.txtInput.reset();
    }
  }

}

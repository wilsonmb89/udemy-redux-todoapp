import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';
import { filtrosValidos } from '../ngrx/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos = 'todos';

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('todos').subscribe(todos => this.todos = todos);
    this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);
  }

}

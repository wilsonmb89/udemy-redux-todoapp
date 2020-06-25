import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { setFiltro, filtrosValidos } from '../ngrx/filtro.actions';
import { deleteCompleteTodos } from '../ngrx/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: string;
  filtros: filtrosValidos[] = ['todos', 'pendientes', 'completados'];
  remainingTasks: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('filtro')
      .subscribe(filtro => this.filtroActual = filtro);
    this.store.select('todos')
      .subscribe(todos => {
        this.remainingTasks = todos.filter(todo => !todo.completado).length;
      });
  }

  changeFilterValue(value: filtrosValidos): void {
    this.store.dispatch(setFiltro({ filtro: value }));
  }

  clearCompleted(): void {
    this.store.dispatch(deleteCompleteTodos());
  }

}

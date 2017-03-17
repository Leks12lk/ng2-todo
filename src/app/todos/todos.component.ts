import { Component , OnInit } from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoService } from '../services/todoService';

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['todos.component.css']
})

export class TodosComponent { 
  todos: Todo[] = []; 

  constructor(private todoService: TodoService) {    
  }

  ngOnInit() {
    this.todoService.getTodos()
        .subscribe(resp => this.todos = resp);    
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo)
        .subscribe(todo => {
        console.log(todo);
        this.todos.push(todo);
        })
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo)
        .subscribe(todos => this.todos = todos);
  }
  
}

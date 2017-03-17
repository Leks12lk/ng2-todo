import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../shared/todo';
import { TodoService } from '../../services/todoService';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
    @Input() todos: Todo[];    

    constructor(private todoService: TodoService) {}

    updateTodo(todo: Todo) {
        console.log('update list component');
        this.todoService.updateTodo(todo)
            .subscribe(todo => todo.isDone = !todo.isDone);
    }

    @Output() deleteTodo = new EventEmitter<Todo>();

    onDeleteTodo(todo: Todo) {
        console.log('delete todo');
        this.deleteTodo.emit(todo);
    }
    

}
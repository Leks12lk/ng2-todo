import { Component, EventEmitter, Output } from '@angular/core';

import { Todo } from '../../shared/todo';


@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {
    input:string;

    @Output() addTodo = new EventEmitter<Todo>();

    onAddTodo() {
        console.log('create todo');
        let todo: Todo = new Todo(this.input);
        this.addTodo.emit(todo);
    }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../shared/todo';


@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {
    @Input() todo: Todo;

    @Output() updateTodo = new EventEmitter<Todo>();

    onUpdateTodo() {
        this.todo.isDone = !this.todo.isDone;
        this.updateTodo.emit(this.todo);       
    }

    @Output() deleteTodo = new EventEmitter<Todo>();

    onDeleteTodo() {
        this.deleteTodo.emit(this.todo);
    }
}
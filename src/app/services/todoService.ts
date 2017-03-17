import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Todo } from '../shared/todo';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TodoService {
    private apiUrl: string = 'http://learn-todo.gear.host/api/tasks';

    constructor(private http: Http) {
    }

    getTodos(): Observable<Todo[]> {
        return this.http.get(this.apiUrl)
            .map(resp => resp.json())        
    }

    addTodo(todo: Todo) {
        return this.http.post(this.apiUrl, todo)
            .map(resp => resp.json())
    }

    updateTodo(todo: Todo) {
        return this.http.put(this.apiUrl, todo)
            .map(resp => resp.json()) 
    }

    deleteTodo(todo: Todo) {
        let url = `${this.apiUrl}/${todo.id}`;

        return this.http.delete(url)
            .map(resp=>resp.json())
    }
}
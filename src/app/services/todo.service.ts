import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { ITodo } from "../models/todo.interface";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todo = new BehaviorSubject<ITodo[]>([]);
    public todo$ = this.todo.asObservable();

    // For setting the list of todos. Can be used to reset the list.
    public setTodos(newTodos: ITodo[]) {
        this.todo.next(newTodos);
    }

    // For getting the list of todos.
    public getTodos() {
        return this.todo.getValue()
    }

    // For adding a single todo.
    public addTodo(todo: ITodo) {
        const currentTodos = this.getTodos();
        currentTodos.push(todo);
        this.todo.next(currentTodos);
    }

    // For deleting a single todo.
    public deleteTodo(id: number) {
        const currentTodos = this.getTodos();
        const index = currentTodos.findIndex((todo: ITodo) => todo.id == id);

        if (index !== -1) {
            currentTodos.splice(index, 1);
            this.todo.next(currentTodos);
        } else {
            console.warn(`[Delete Todo]: ID ${id} not found.`);
        }
    }

    // Can be used to update/complete/set-priority on the todo.
    public updateTodo(updatedTodo: ITodo) {
        const currentTodos = this.getTodos();
        const index = currentTodos.findIndex((todo: ITodo) => todo.id == updatedTodo.id);

        if (index !== -1) {
            currentTodos[index] = updatedTodo;
            this.todo.next(currentTodos);
        } else {
            console.warn(`[Update Todo]: ID ${updatedTodo.id} not found.`);
        }
    }
}
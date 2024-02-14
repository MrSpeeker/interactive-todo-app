import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ITodo } from '../../models/todo.interface';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() public todo!: ITodo;

  @Output() public deleteEvent = new EventEmitter<number>();
  @Output() public completeEvent = new EventEmitter<ITodo>();
  @Output() public updateEvent = new EventEmitter<ITodo>();

  public deleteClicked() {
    this.deleteEvent.emit(this.todo.id);
  }

  public updateClicked() {
    this.completeEvent.emit(this.todo);
  }

  public completeClicked() {
    this.todo.completed = true;
    this.completeEvent.emit(this.todo);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {

  @Input() task!: Task;

  @Output() taskRemoved = new EventEmitter<number>();

  onDelete(): void {
    this.taskRemoved.emit(this.task.id);
  }
}

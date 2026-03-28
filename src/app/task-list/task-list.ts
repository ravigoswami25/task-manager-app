import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {

  tasks = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build Project', completed: false }
  ];

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
import { Component, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../task-item/task-item';
import { Task } from '../models/task';
import { TaskService } from '../services/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList implements OnInit {

  readonly tasks = signal<Task[]>([]);
  readonly loading = signal(true);

  constructor(private taskService: TaskService) {
    this.taskService.tasksChanged$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.loadTasks());
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks.set(this.taskService.getTasks());
    this.loading.set(false);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }
}

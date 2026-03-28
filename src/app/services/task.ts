import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly storageKey = 'tasks';
  private readonly tasksChangedSubject = new Subject<void>();
  readonly tasksChanged$ = this.tasksChangedSubject.asObservable();

  getTasks(): Task[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw) as unknown;
      return Array.isArray(parsed) ? (parsed as Task[]) : [];
    } catch {
      return [];
    }
  }

  private saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    this.tasksChangedSubject.next();
  }

  addTask(title: string): void {
    const tasks = this.getTasks();
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };
    tasks.push(newTask);
    this.saveTasks(tasks);
  }

  deleteTask(id: number): void {
    const tasks = this.getTasks().filter((t) => t.id !== id);
    this.saveTasks(tasks);
  }
}

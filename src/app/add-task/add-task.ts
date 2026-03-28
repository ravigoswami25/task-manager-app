import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask {

  readonly title = signal('');

  constructor(private taskService: TaskService) {}

  addTask(): void {
    const trimmed = this.title().trim();
    if (!trimmed) {
      return;
    }

    this.taskService.addTask(trimmed);
    this.title.set('');
  }
}

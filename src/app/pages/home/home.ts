import { Component } from '@angular/core';
import { TaskList } from '../../task-list/task-list';
import { AddTask } from '../../add-task/add-task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskList, AddTask],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {}
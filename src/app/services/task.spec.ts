import { TestBed } from '@angular/core/testing';
import { TaskService } from './task';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add and return tasks', () => {
    service.addTask('Test');
    const tasks = service.getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Test');
    expect(tasks[0].completed).toBe(false);
  });

  it('should delete a task by id', () => {
    service.addTask('A');
    const id = service.getTasks()[0].id;
    service.deleteTask(id);
    expect(service.getTasks().length).toBe(0);
  });
});

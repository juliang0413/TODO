import { Component } from '@angular/core';
import { TODO } from '../../todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  tasks: Tasks[];
  completed = false;

  constructor() {
    this.tasks = TODO;
  }

  onTaskChange(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  saveTask(input) {
    if (input.value) {
      let idT = 1;
      if (this.tasks) {
        idT = this.tasks.slice(-1)[0].id;
      }
      const newTask = {
        id: idT,
        name: input.value,
        completed: false
      };
      this.tasks.push(newTask);
    }
    input.value = '';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => (task.id !== id));
  }

}

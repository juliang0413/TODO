import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countTask',
  pure: false
})
export class CountTaskPipe implements PipeTransform {

  transform(tasks: Tasks[], completed: boolean = false): any {
    let numTask = 0;
    numTask = tasks.filter(task => (task.completed === completed)).length;

    return numTask;
  }

}

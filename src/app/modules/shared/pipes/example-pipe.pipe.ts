import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'examplePipe',
  standalone: true
})
export class ExamplePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

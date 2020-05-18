import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'notEmpty',
})
export class NotEmptyPipe implements PipeTransform {
  transform(value: string): unknown {
    if (value) return value.replace(/\s/g, '').length > 0 ? value : false
  }
}

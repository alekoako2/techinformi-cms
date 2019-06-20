import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterOecd'
})
export class FilterOecdPipe implements PipeTransform {
  chars = [
    {'a': 'ა'},
    {'b': 'ბ'},
    {'c': 'ც'},
    {'C': 'ჩ'},
    {'d': 'დ'},
    {'e': 'ე'},
    {'f': 'ფ'},
    {'g': 'გ'},
    {'h': 'ჰ'},
    {'i': 'ი'},
    {'j': 'ჯ'},
    {'J': 'ჟ'},
    {'k': 'კ'},
    {'l': 'ლ'},
    {'m': 'მ'},
    {'n': 'ნ'},
    {'o': 'ო'},
    {'p': 'პ'},
    {'q': 'ქ'},
    {'r': 'რ'},
    {'R': 'ღ'},
    {'s': 'ს'},
    {'S': 'შ'},
    {'t': 'ტ'},
    {'T': 'თ'},
    {'u': 'უ'},
    {'v': 'ვ'},
    {'w': 'წ'},
    {'W': 'ჭ'},
    {'x': 'ხ'},
    {'y': 'ყ'},
    {'z': 'ზ'},
    {'Z': 'ძ'}
  ];

  transform(args: any, value: any): any {
    if (!value) {
      return args;
    }
    return args.filter(
      item =>
        item.code.includes(value) ||
        item.translatedData.name.toLowerCase().includes(value.toString().toLowerCase())
    );
  }

}

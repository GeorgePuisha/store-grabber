import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string, args: string): string {
    switch (args) {
      case "BYN": {
        return value;
      }
      case "USD": {
        return (parseFloat(value) / 2.02).toFixed(2).toString();
      }
      case "EUR": {
        return (parseFloat(value) / 2.4).toFixed(2).toString();
      }
      default: {
        return value;
      }
    }
  }

}

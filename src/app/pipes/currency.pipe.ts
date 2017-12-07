import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string, type: string, rate: number): string {
    switch (type) {
      case "BYN": {
        return value;
      }
      case "USD": {
        return (parseFloat(value) / rate).toFixed(2).toString();
      }
      case "EUR": {
        return (parseFloat(value) / rate).toFixed(2).toString();
      }
      default: {
        return value;
      }
    }
  }

}

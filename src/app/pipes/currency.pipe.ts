import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "currency"
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string, rate: number): string {
    return (parseFloat(value) / rate).toFixed(2).toString();
  }

}

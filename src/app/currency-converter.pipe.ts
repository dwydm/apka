import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(cena: string, waluta: string): unknown {
    cena = this.przelicz(parseFloat(cena), waluta).toString();
    return `${cena} ${waluta}`;
  }

  private przelicz (cena: number, waluta: String) {
    if (waluta == 'USD') {
      return cena * 9.1;
    } else {
      return cena * 2;
    }
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KalkulatorService {

  constructor() { }


  public suma(l1: number, l2: number): number {
    return l1 + l2;
  }

  public roznica(l1: number, l2: number): number {
    return l1 - l2;
  }

  public iloczyn(l1: number, l2: number): number {
    return l1 * l2;
  }

  public iloraz(l1: number, l2: number): number {
    return l1 / l2;
  }

  public tlumaczTryb(tryb: number): string {
    switch (tryb) {
      case 0:
        return "Suma";    
        break;
      case 1:
        return "Różnica";
        break;
      case 2:
        return "Iloczyn";
      case 3:
        return "Iloraz";
      default:
        break;
    }

    return "Operacja";
  }

  public operacja(li1: number, li2: number, tryb: number): number {
    let result = 0;
    switch (tryb) {
      case 0:
        result = this.suma(li1, li2);
        break;
      case 1:
        result = this.roznica(li1, li2);
        break;
      case 2:
        result = this.iloczyn(li1, li2);
        break;
      case 3:
        result = this.iloraz(li1, li2);
        break
      default:
        break;
    }
    return result;

  }

}

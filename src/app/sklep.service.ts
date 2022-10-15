import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class SklepService {
  public shoppingCart: BehaviorSubject<String[]> = new BehaviorSubject([] as String[]);
  public koszyk: String[] = [];

  //http!: HttpClient;
  constructor(public http: HttpClient) { }

  doKOszyka(id: String, name: String) {
    //this.koszyk.push(id, name);
    //this.shoppingCart.next(this.koszyk);
    let kosz = this.shoppingCart.value;
    kosz.push(id, name);
    this.shoppingCart.next(kosz);
    //this.shoppingCart.value;
    console.log(this.koszyk);

  }

  pobierzProdukty(): Observable<Produkt[]> {
    console.log('początek pobierania produktów');
   
    return this.http.get<Produkt[]>("https://6348369b0484786c6e94e473.mockapi.io/produkty");
  }
}

export interface Produkt {
  id: String;
  name: String;
  cena: String;
  kategoria: number;
}
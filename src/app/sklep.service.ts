import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SklepService {
  //http!: HttpClient;
  constructor(public http: HttpClient) { }



  pobierzProdukty() {
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
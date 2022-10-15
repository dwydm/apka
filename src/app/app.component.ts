import { Component } from '@angular/core';
import { Produkt, SklepService } from './sklep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public ladujeDane = true;
  public title = 'apka';
  public pobraneProdukty: Produkt[];


  constructor(private sklep: SklepService) {
    this.pobraneProdukty = [];
    console.log('przed');
    let produkty = this.sklep.pobierzProdukty();
    console.log('po');


    produkty.subscribe( (tablicaProduktow) => {
      this.ladujeDane = false;
      this.pobraneProdukty = tablicaProduktow;
      console.log('pobrano produkty');
      console.log(tablicaProduktow);
    }
    
    )
  }

  private todayDate() {
    const today = new Date(Date.now());
   return today;
  }

  public displayDate() {
    return this.todayDate();
  }


  dodajDoKOszyka(id: String, name: String) {
    console.log(id);
    this.sklep.doKOszyka(id, name);

  }

}

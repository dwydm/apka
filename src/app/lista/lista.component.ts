import { Component, OnInit } from '@angular/core';
import { Produkt, SklepService } from '../sklep.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  public ladujeDane = true;
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

  dodajDoKOszyka(id: String, name: String) {
    console.log(id);
    this.sklep.doKOszyka(id, name);

  }

  ngOnInit(): void {
  }

}

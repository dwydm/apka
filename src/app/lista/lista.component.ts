import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Produkt, SklepService } from '../sklep.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  public ladujeDane = true;
  public pobraneProdukty: Produkt[];
  //public v!: number;

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
    })

    //Przykłady subject a observable
    const subject2 = new BehaviorSubject<number>(1);

    subject2.next(4);

    subject2.subscribe( (v) => {
      console.log('subject' + v );
  
    })
  
    subject2.next(3);


    const subject4 = new ReplaySubject<number>();

    subject4.subscribe( (v) => {
      console.log('subject' + v );
  
    })


  }


  dodajDoKOszyka(id: String, name: String) {
    console.log(id);
    this.sklep.doKOszyka(id, name);

  }

  ngOnInit(): void {
  }

}

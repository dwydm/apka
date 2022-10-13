import { Component, Input, OnInit } from '@angular/core';
import { KalkulatorService } from '../kalkulator.service';
import { MultiserviceService } from '../multiservice.service';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.scss'],
  providers: [MultiserviceService]
})
export class SumaComponent implements OnInit {

  @Input()
  public liczba1!: number;
  @Input()
  public liczba2!: number;
  public tryb = -1;

  public tablica = [0,1,2,3,4,5];

  constructor(public ks: KalkulatorService) { }

  ngOnInit(): void {
  }

  // public suma2() {
  //   return this.liczba1 + this.liczba2;
  // }

   public ustawTryb(tryb: number): void {
    this.tryb = tryb;
  }

  public zmienTablice(): void {
    this.tablica[3] = this.tablica[3] + 1;
  }

  reset(mode = -1): void {
    this.tryb = mode;
  }

}

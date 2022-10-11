import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-naglowek',
  templateUrl: './naglowek.component.html',
  styleUrls: ['./naglowek.component.scss']
})
export class NaglowekComponent implements OnInit {

  @Input('nazwaFirmy')
  // public tytul = 'Tytul komponentu';
  public tytul!: string;
  // public tytul!: string | undefined;
  @Input('koszyk')
  public koszyk!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

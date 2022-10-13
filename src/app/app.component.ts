import { Component } from '@angular/core';
import { SklepService } from './sklep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'apka';
  constructor(sklep: SklepService) {
    sklep.pobierzProdukty();
  }

  private todayDate() {
    const today = new Date(Date.now());
   return today;
  }

  public displayDate() {
    return this.todayDate();
  }

}

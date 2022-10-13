import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MultiserviceService } from '../multiservice.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  providers: [MultiserviceService]
})
export class ResetComponent implements OnInit {

  @Output()
  doWywolania: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  resetuj(): void {
    this.doWywolania.emit(3);
  }

}

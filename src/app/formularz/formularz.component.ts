import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//Validator
class MyValidator {
  static nazwiskoReq( koncowka: string ): any {
    return function (control: FormControl) {
      if (control.value.endsWith(koncowka)) {
        return "";
      } else {
        return { 'nazwiskoreq' : "Nazwisko musi kończyć się na " + koncowka}
      }
    }
  }
}


@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})


export class FormularzComponent implements OnInit {

  public form = new FormGroup({
    imie: new FormControl('', {validators: [
    Validators.maxLength(16),
    Validators.minLength(3)
    ], updateOn: "change"}),
    nazwisko: new FormControl('', {validators: [MyValidator.nazwiskoReq('ski')], updateOn: "change"}),
    plec: new FormControl<string | null>(null, {validators: [], updateOn: "change"})
    
  });

  constructor() { 
    this.form.valueChanges.subscribe( (formState) => {
      if (formState.imie == "Ala") {
        // this.form.controls.nazwisko.setValue("Ma kota");
        this.form.controls.plec.setValue('K');
      }
    })  


  }

  ngOnInit(): void {
  }

  wartosciDomyslne() {
    this.form.controls.imie.setValue('imie'); 
  }

  przeslijDane() {
    const dane = {
      imie: this.form.controls.imie.value,
      nazwisko: this.form.controls.nazwisko.value,
      plec: this.form.controls.plec.value
    }

  console.log(dane);
  
  }

}

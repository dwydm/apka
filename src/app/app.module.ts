import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { SumaComponent } from './suma/suma.component';
import { ResetComponent } from './reset/reset.component';
import { MultiserviceService } from './multiservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NaglowekComponent,
    SumaComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MultiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

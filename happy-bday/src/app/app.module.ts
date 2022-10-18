import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgFireworksModule } from '@fireworks-js/angular'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { BdayMessageComponent } from './bday-message/bday-message.component';

@NgModule({
  declarations: [AppComponent, BdayMessageComponent],
  imports: [BrowserModule, NgFireworksModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
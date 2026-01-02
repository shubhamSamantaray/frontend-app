import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HealthStatusComponent } from './health-status/health-status.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HealthStatusComponent
  ],
  providers: [],
  bootstrap: [HealthStatusComponent]
})
export class AppModule { }
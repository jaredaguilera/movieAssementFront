import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from '../services/swaggerMovie/api.module';
import { BASE_PATH } from '../services/swaggerMovie/variables';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ {
    provide: BASE_PATH, useValue: environment.basePath
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

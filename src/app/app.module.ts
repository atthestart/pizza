import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzashopComponent } from './pizzashop/pizzashop.component';
import { PizzaListComponent } from './pizzashop/pizza-list/pizza-list.component';
import { PizzaAddComponent } from './pizzashop/pizza-add/pizza-add.component';
import { PizzaDeleteComponent } from './pizzashop/pizza-delete/pizza-delete.component';
import { AngularWebStorageModule } from 'angular-web-storage';
@NgModule({
  declarations: [
    AppComponent,
    PizzashopComponent,
    PizzaListComponent,
    PizzaAddComponent,
    PizzaDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

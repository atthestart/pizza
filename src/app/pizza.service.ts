import { Injectable } from '@angular/core';
import { pizzalist } from './pizzashop/pizza-list/pizza-list';
import { Pizza } from './pizzashop/pizza';
import { Observable , of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzas:Pizza[] = [];
  uri='http://localhost:4000/pizza'; 
  constructor(public httpClient:HttpClient) { }
  
 
  getPizzas():Observable<Pizza[]>{
    return this.httpClient.get<Pizza[]>(`${this.uri}`+'/pizza-list'); 
   }
   addToCart(pizza){
    this.pizzas.push(pizza);
    console.log(this.pizzas);
  }
  getCartPizzas(){
    return this.pizzas; 
  }

  public getitems():Observable<Pizza[]>
  {
      return of(this.pizzas);
  }

  deleteFromCart(orderName){
    this.pizzas.pop();
}

}

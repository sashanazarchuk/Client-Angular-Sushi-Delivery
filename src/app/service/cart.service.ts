import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFood } from '../model/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }
  
  getallfood() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(food: IFood) {
    this.cartItemList.push(food);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((food: IFood) => {
      grandTotal += food.price;
    })
    if(grandTotal<300)
    {
      grandTotal+=45;
    }
    else{
      grandTotal;
    }
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }

}

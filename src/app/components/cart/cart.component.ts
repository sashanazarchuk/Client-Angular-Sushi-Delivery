import { Component } from '@angular/core';
import { IFood } from 'src/app/model/food';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  foods: IFood[] = [];
  public grandTotal !: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getallfood()
      .subscribe(res => {
        this.foods = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }
  removeItem(food: IFood) {
    this.cartService.removeCartItem(food);
  }
}

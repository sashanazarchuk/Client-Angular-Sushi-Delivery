import { Component, OnInit } from '@angular/core';
import { IFood } from 'src/app/model/food';
import { CartService } from 'src/app/service/cart.service';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  foods: IFood[] = [];
  search: string;
  constructor(private foodService: FoodService, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.foodService.getallfood().subscribe(result => {
      this.foods = result;
    });
  }

  addtocart(food: IFood) {
    this.cartService.addtoCart(food);
  }

  increase() {
    this.foodService.increase().subscribe(result => {
      this.foods = result;
    });
  }

  decrease() {
    this.foodService.decrease().subscribe(result => {
      this.foods = result;
    });
  }

  category1() {
    this.foodService.category1().subscribe(result => {
      this.foods = result;
    })
  }

  category2() {
    this.foodService.category2().subscribe(result => {
      this.foods = result;
    })
  }

  category3() {
    this.foodService.category3().subscribe(result => {
      this.foods = result;
    })
  }

  category4() {
    this.foodService.category4().subscribe(result => {
      this.foods = result;
    })
  }
  
  category5() {
    this.foodService.category5().subscribe(result => {
      this.foods = result;
    })
  }
}
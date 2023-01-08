import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFood } from 'src/app/model/food';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {

  postForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.minLength(5)),
    description: new FormControl('', Validators.minLength(5)),
    price: new FormControl('', Validators.min(1)),
    image: new FormControl('', Validators.minLength(5)),
    weight: new FormControl('', Validators.min(1)),
    category: new FormControl('', Validators.minLength(2)),

  });
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
  }

  create(): void {
    if (this.postForm.invalid) {
      alert("Invalid data");
      return;
    }

    const food: IFood = this.postForm.value;
    this.foodService.create(food).subscribe();
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddresComponent {
  public grandTotal !: number;
  postForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.minLength(2)),
    lastname: new FormControl('', Validators.minLength(5)),
    street: new FormControl('', Validators.minLength(5)),
    city: new FormControl('', Validators.minLength(5)),
    phone: new FormControl('', Validators.minLength(5)),


  });

  constructor(private cartService: CartService,) { }
  ngOnInit(): void {
    this.cartService.getallfood()
      .subscribe(res => {
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }

  confirm(): void {
    if (this.grandTotal <= 45) {
      alert("Виберіть товар");
    }
    else {
      alert("Ваше замовлення прийнято!");

    }
  }
}

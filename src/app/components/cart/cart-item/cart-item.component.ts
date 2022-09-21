import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';

type data = {
  amount: number,
  name: string
};

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input () item: cartItem = {
    name: '',
    price: 1,
    url: '',
    amount: 1
  };
  @Output () data: EventEmitter<data> = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }

  onChange(amount: number, name: string): void {
    this.data.emit({
      amount: amount,
      name: name
    });
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  list: cartItem[] =[];
  username: string = '';
  address: string ='';
  cardNumber: string = '';
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.list = this.cartService.getCartList();
    this.total = this.cartService.calculateTotal();
  }

  ngOnDestroy(): void {
    this.total = 0;
    this.list = [];
  }

  onSubmit(): void {
    alert('Ok');
    this.username = '';
    this.address = '';
    this.cardNumber = '';
  }

  onChange(amount: number, name: string): void{
    this.cartService.updateList(amount, name);
    this.total = this.cartService.calculateTotal();
  }
}

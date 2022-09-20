import { Injectable } from '@angular/core';
import { cartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: cartItem[] = []
  total: number = 0;

  constructor() { }

  getCartList(): cartItem[] {
    return this.cartList;
  }

  addToCart(cart: cartItem): void {
    this.cartList.push(cart);
  }

  removeFromCart(name: string): void {}

  clearCart(): void {
    this.cartList = [];
  }

  calculateTotal(): number {
    this.total = 0;
    this.cartList.forEach(i => {
      this.total = this.total + i.amount*i.price;
    });

    return this.total;
  }

  updateList(amount: number, name: string): void {
    this.cartList.forEach(i => { (i.name === name) && (i.amount = amount) })
  }
}

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
    const check = this.cartList.filter(p => p.name === cart.name);
    if (check.length === 0) {
      this.cartList.push(cart);
    }else {
      this.cartList.forEach(p => {
        (p.name === cart.name) && (p.amount = p.amount + cart.amount);
      })
    }
  }

  removeFromCart(name: string): cartItem[] {
    this.cartList = this.cartList.filter(item => item.name !== name);
    return this.cartList;
  }

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

  updateList(amount: number, name: string): cartItem[] {
    this.cartList.forEach(i => { (i.name === name) && (i.amount = amount) });
    return this.cartList;
  }
}

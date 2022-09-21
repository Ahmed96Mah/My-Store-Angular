import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cartItem } from 'src/app/models/cartItem';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { data } from 'src/app/models/data';

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

  constructor(private cartService: CartService, private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.list = this.cartService.getCartList();
    this.total = this.cartService.calculateTotal();
  }

  ngOnDestroy(): void {
    this.total = 0;
    this.list = [];
    this.username = '';
    this.address = '';
    this.cardNumber = '';
  }

  onSubmit(user: string, address: string, card: string): void {
    this.user.saveUser(user, address, card);
    this.router.navigate(['/confirmation']);
  }

  onChange(data: data): void{
    if(data.amount < 1) {
      this.list = this.cartService.removeFromCart(data.name);
      alert('Removed from cart!');
    }else {
      this.list = this.cartService.updateList(data.amount, data.name);
    }
    this.total = this.cartService.calculateTotal();
  }
}

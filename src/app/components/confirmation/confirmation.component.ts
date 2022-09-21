import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit, OnDestroy {
  fullName: string = '';
  total: number = 0;
  constructor(private user: UserService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.total = this.cartService.calculateTotal();
    this.fullName = this.user.getUser();
  }

  onClick(): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.fullName = '';
    this.total = 0;
    this.cartService.clearCart();
  }
}

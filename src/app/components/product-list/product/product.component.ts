import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input () product: product = {
    id: 1,
    name: '',
    price: 1,
    url: '',
    description: ''
  };
  amount: string ='1';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onSubmit(product: product, amount: string): void {
    this.cartService.addToCart({
      name: product.name,
      price: product.price,
      url: product.url,
      amount: parseInt(amount)
    });
    alert('Added to cart!');
  }

}

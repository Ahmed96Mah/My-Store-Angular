import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  productList: product[] = [];
  id: number = 1;
  item: product = {
    id: 1,
    name: '',
    price: 1,
    url: '',
    description: ''
  };
  amount: string ='1';
  sub: Subscription = new Subscription;
  
  constructor(private productService: ProductService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe(product => {
      this.id = parseInt(this.router.url.split('/')[2]);
      this.productList = product;
      this.item = product.filter(p => p.id === this.id)[0];
    });
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

  ngOnDestroy(): void {
    this.productList = [];
    this.id = 1;
    this.item = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: ''
    };
    this.amount ='1';
    this.sub.unsubscribe();
  }
}

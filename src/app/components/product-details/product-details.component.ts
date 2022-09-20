import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
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
  
  constructor(private productService: ProductService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(product => {
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

}

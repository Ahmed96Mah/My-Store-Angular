import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  productList: product[] = [];
  sub: Subscription = new Subscription;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe(product => {
      this.productList = product;
    });
  }

  ngOnDestroy(): void {
    this.productList = [];
    this.sub.unsubscribe();
  }
}

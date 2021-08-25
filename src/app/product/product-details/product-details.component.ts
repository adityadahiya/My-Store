import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import {NotificationService} from '../../notification.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    category: '',
    price: 0,
    imageurl: '',
    quantity: 0
  } ;
  id: string;
  constructor(private productService: ProductService, private route: ActivatedRoute, private cartservice: CartService, private notificationService: NotificationService) {
    this.id = this.route.snapshot.paramMap.get('id')!;
    //this.product = this.productService.PRODUCT_LIST[this.id];
    this.productService.getProductById(this.id!).subscribe(res => {
      this.product = res;
    },
    error => this.notificationService.showError('Unexpected error occurred')); 
   }

  ngOnInit(): void {
  }
  addToCart(product: Product): void {
    this.cartservice.addToCart(product).subscribe(
      res=> this.notificationService.showSuccess('Item Added to Cart'),
       error => this.notificationService.showError('Unexpected error occurred'));
}
}

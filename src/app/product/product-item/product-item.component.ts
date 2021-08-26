import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../models/product.model';
import {NotificationService} from '../../notification.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Output() quantity = new EventEmitter();
  constructor(private router: Router, private cartservice: CartService, private notificationService: NotificationService) { 
    this.product = {
      id: 0,
      name: '',
      category: '',
      price: 0,
      imageurl: '',
      quantity: 0
    } 
  }

  ngOnInit(): void {
  }
  addToCart(product: Product): void {
      this.cartservice.addToCart(product).subscribe(
        res=> this.notificationService.showSuccess('Item Added to Cart'),
         error => this.notificationService.showError('Unexpected error occurred'));
  }
  onChange(product: Product){
    this.quantity.emit(product);
  }
}

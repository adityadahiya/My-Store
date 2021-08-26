import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import {NotificationService} from '../../notification.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private notificationService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        res[i].quantity = 0;
      }
      this.products = res;
    },
    error => this.notificationService.showError('Unexpected error occurred')
    )}

    onQuantityChange(product: Product){
      console.log('Product: ' + product.id + ' Quantity: ' + product.quantity);
    }

}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/models/product.model';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import {NotificationService} from '../../notification.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  orderComplete: boolean = false;
  cartTotal: number;
  customerDetails: Cart = {
    fullName : '',
    address : '',
    phone : 0,
    card : 0
  };
  cartData: Product[];
  cardTypes: {code: string, desc: string}[];
  selectedCard: string | null;
  constructor(private cartService: CartService, private notificationService: NotificationService) { 
    this.cartData = [];
    this.cartTotal = 0;
    this.selectedCard = null;
    this.cardTypes = [
      {code: 'CC', desc: 'Credit Card'},
      {code: 'DC', desc: 'Debit Card'}
    ];
  }
  getCartData(): void {
    this.cartService.getCartData().subscribe(res => {
      this.cartData = res;
    });
  }
  getCartTotal(): number {
    return this.cartService.getCartTotal();
  }
  removeItem(item: Product): void{
    this.cartService.removeItemFromCart(item.id!).subscribe(
      res=> this.notificationService.showSuccess('Item Removed from Cart'),
       error => this.notificationService.showError('Unexpected error occurred'));
    this.getCartData();
  }
  onSubmit() {
    this.cartTotal = this.getCartTotal();
    this.cartService.emptyCart();
  }
  onCardSelect(arg: any) {
    this.customerDetails.card = 0;
  }
  ngOnInit(): void {
    this.getCartData();
  }

}

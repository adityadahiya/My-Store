import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartData: Product[];
  cartTotal: number;
  constructor() { 
    this.cartData = [];
    this.cartTotal = 0;
  }

  addToCart(cart: Product): Observable<Number> {
    for (let i=0; i < this.cartData.length; i++) {
      if (this.cartData[i].id == cart.id) {
        this.cartData[i].quantity = this.cartData[i].quantity + cart.quantity;
        return of(1);
      }
    }
    return of(this.cartData.unshift(cart));
  }
  removeItemFromCart (id: number): Observable<Product[]> {
    this.cartData = this.cartData.filter(cartItem => id !== cartItem.id);
    return of(this.cartData)
  }
  getCartData(): Observable<Product[]> {
    return of(this.cartData);
  }
  getCartTotal(): number {
    let total = 0;
    for (let i = 0; i < this.cartData.length; i ++) {
      total = total + (this.cartData[i].price * this.cartData[i].quantity);
    }
    return total;
  }
  emptyCart(): void {
    this.cartData = [];
  }
}

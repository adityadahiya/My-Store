import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  PRODUCT_LIST: {[key: string]: Product;}
  constructor(private http: HttpClient) {
    this.PRODUCT_LIST = {};
   }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products');
  };
  getProductById(pid: string): Observable<Product>{
    return this.http.get<Product>('http://localhost:3000/products/' + pid);
  };
}

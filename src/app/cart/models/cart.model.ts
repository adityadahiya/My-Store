import { Product } from "src/app/product/models/product.model";

export class Cart {
    fullName: string;
    address: string;
    phone: number;
    card: number;
  
    constructor() {
    
      this.fullName = '';
      this.address = '';
      this.phone = 0;
      this.card = 0;
    }
}

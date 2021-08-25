export class Product {
    id?: number;
    name: string;
    price: number;
    category: string;
    imageurl?: string;
    quantity: number;
  
    constructor() {
      this.id = 0;
      this.name = '';
      this.category = '';
      this.price = 0;
      this.imageurl = '';
      this.quantity = 0;
    }
}

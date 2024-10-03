import { Component } from '@angular/core';
import { Products } from './product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {

  name = "";
  price = 0;
  type= "";

  products: Products[] =[]

  
  addProduct() { 

    const newProduct = {
          
      productName: this.name,
      productPrice: this.price,
      productType: this.type

    }

    this.products.push(newProduct);

    this.name = "";
    this.type = "";
    this.price;

  }


}


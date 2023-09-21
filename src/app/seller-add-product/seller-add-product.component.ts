import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductI } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
addProductMessage:string|undefined;

  constructor(private product:ProductService) {}


  add(data:ProductI){
    this.product.addProduct(data).subscribe((result)=>{
      if(result)
      {
        this.addProductMessage='Product is added successfully';
      }
      setTimeout(()=>(this.addProductMessage=undefined),3000);
      setTimeout(()=>location.reload(),2000);
    });
  }
}

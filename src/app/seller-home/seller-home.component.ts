import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductI } from '../data-type';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  constructor(private product:ProductService) {}

  productMessage:undefined | string;

  productList: ProductI[] | undefined;

  ngOnInit() {
    this.list();
  }

  del(id:number){
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="Product is Deleted";
        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage=undefined;
    }, 3000);
  }

  list(){
    this.product.productList().subscribe((result)=>{
      this.productList=result;
    })
  }
}

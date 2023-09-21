import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductI } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  productData:ProductI | undefined;
  updateProductMessage: string|undefined;
  constructor(private route:ActivatedRoute,private product:ProductService,private router:Router) {}

  ngOnInit(){
    let productId=this.route.snapshot.paramMap.get('id');
    //console.log(productId);
    productId && this.product.getProduct(productId).subscribe((result)=>{
      //console.log(result);
      this.productData=result;
    });
  }
  update(data:ProductI){
    if(this.productData){
      data.id=this.productData.id;
    }

    this.product.updateProduct(data).subscribe((result)=>{
      if(result)
        this.router.navigate(["/seller-home"]);
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductI } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(data:ProductI){
    return this.http.post('http://localhost:3000/products',data);
  }

  productList(){
    return this.http.get<ProductI[]>('http://localhost:3000/products');
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getProduct(id:string){
    return this.http.get<ProductI>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(productD:ProductI){
    return this.http.put<ProductI>(`http://localhost:3000/products/${productD.id}`,productD);
  }

}

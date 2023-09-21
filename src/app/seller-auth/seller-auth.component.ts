import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { LoginI, SignUp } from '../data-type';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller:SellerService,private router:Router) {}
  show=false;
  AuthError='';

  ngOnInit():void{
    this.seller.reloadSeller();
  }
  signUp(sign:SignUp) {
    console.log(sign);
    this.seller.userSignUp(sign);
  }
  openLogin(){
    this.show=true;
  }

  openSignUp(){
    this.show=false;
  }

  login(data:LoginI){
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.AuthError='Entered Wrong Email-id or Password';
      }
    });
  }
}

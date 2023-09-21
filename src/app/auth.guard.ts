import { CanActivateFn, Router } from '@angular/router';
 import { Observable } from 'rxjs';
import { SellerService } from './services/seller.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(SellerService);
  const router = inject(Router);
  console.log(authService.isSellerLoggedIn.value);
  if(localStorage.getItem('seller')){
    return true;
  }
  if(authService.isSellerLoggedIn.value)
    return true;
  return false;
};

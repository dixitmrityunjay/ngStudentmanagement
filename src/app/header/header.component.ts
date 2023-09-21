import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route:Router){}
  menuScript:String='default';
  SellerName:string='';
  ngOnInit():void{
    this.route.events.subscribe((dataV:any)=>{
      if(dataV.url)
      {
        if(localStorage.getItem('seller') && dataV.url.includes('seller')){
          this.menuScript='seller';
          var a=JSON.parse(localStorage.getItem('seller')||'default');
          this.SellerName=a[0].name;
        }
        else{
          this.menuScript='default';
        }
      }
    })
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
}

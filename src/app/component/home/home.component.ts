import { Component, OnInit } from '@angular/core';
import {MultisafepayService} from '../../services/multisafepay.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:{
    type: "redirect",
    order_id: "My-order-id-3",
    currency: "EUR",
    amount: 1000,
    gateway: '',
    description: "product description",
  }
  constructor(private paymentService:MultisafepayService) { }

  ngOnInit() {
    this.paymentRecords();
    this.gatewaysDetails(); 
  }
  gatewaysDetails(){
    this.paymentService.getGateways().subscribe(res=>{
      console.log("gateways",res);
      
    })
  }
  paymentRecords(){    
    this.paymentService.getRecords(this.data).subscribe(res=>{
      console.log("responsce",res);
    })
  }
}

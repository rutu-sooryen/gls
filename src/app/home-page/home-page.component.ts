import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit {
  errorMessage = '';
  deliveryId = new FormControl();
  deliveryList: any;
  constructor(public deliveryService: DeliveryService) { }

  ngOnInit(): void { }

  getDeliveryList() {
    this.deliveryService.getDeliveryList(this.deliveryId.value).subscribe((res: any) => {
      this.deliveryList = res;
      this.errorMessage = '';
    }, () => {
      this.deliveryList = null;
      this.errorMessage = "Please enter valid ID";
    });
  }

}

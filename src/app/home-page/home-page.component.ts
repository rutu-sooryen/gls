import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  errorMessage = '';
  deliveryId = new FormControl();
  displayDeliveryList: any;
  constructor(public deliveryService: DeliveryService) { }

  ngOnInit(): void {
  }

  onSeachDropdownValue() {
    if (this.deliveryId.value) {
      this.deliveryService.getDeliveryList(this.deliveryId.value).subscribe((res: any) => {
        console.log("res", res);
        this.errorMessage = '';
        this.displayDeliveryList = res;
      }, () => {
        this.displayDeliveryList = null;
        this.errorMessage = "Please enter valid ID";
      });
    }
  }

  clearList() {
    this.displayDeliveryList = null;
  }

  displayLayout() {
    this.displayDeliveryList = null;
    this.onSeachDropdownValue();
  }

}

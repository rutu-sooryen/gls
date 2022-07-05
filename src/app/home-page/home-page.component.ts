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
  deliveryList: any;
  constructor(public deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.deliveryList = null;
  }

  onSeachDropdownValue($event: any) {
    if ($event.target.value) {
      this.deliveryService.getDeliveryList($event.target.value).subscribe((res: any) => {
        this.deliveryList = null;
        this.errorMessage = '';
        this.deliveryList = res;
      }, () => {
        this.deliveryList = null;
        this.errorMessage = "Please enter valid ID";
      });
    }
  }

  onSelectDropdownValue(option: any) {
    // this.onSeachDropdownValue();
  }

}

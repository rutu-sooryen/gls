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
  dropDownList: any;
  selectedValue: any;
  constructor(public deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.displayDeliveryList = null;
    this.deliveryService.getDeliveryList().subscribe((res: any) => {
      console.log("res", res);
      this.errorMessage = '';
      this.selectedValue = '';
      this.dropDownList = res;
    }, () => {
      this.dropDownList = [];
      this.selectedValue = '';
      this.displayDeliveryList = null;
      this.errorMessage = "Please enter valid ID";
    });
  }

  onSeachDropdownValue() {
    this.displayDeliveryList = null;
    if (this.deliveryId.value) {
      this.displayDeliveryList = this.dropDownList;
      this.displayDeliveryList.filter((option: any) => {
        if (option.id == this.deliveryId.value) {
          this.selectedValue = option.reasonName;
          console.log("this.selectedValue", this.selectedValue);
        }
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

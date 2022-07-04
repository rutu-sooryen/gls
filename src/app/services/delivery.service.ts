import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  baseUrl = environment.baseUrl;
  deliveryList = 'deliveryOptions';

  constructor(public http: HttpClient) { }

  getDeliveryList(deliveryId: string): any {
    console.log("url", this.baseUrl + this.deliveryList + '/' + deliveryId);
    return this.http.get(this.baseUrl + this.deliveryList + '/' + deliveryId);
  }
}

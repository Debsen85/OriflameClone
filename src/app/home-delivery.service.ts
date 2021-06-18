import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeDeliveryService {

  constructor() { }

  Home(Choice: string): string
  {
    if (Choice=="Normal Customer")
    {
      return "Not Available";
    }
    else if (Choice=="VIP Customer")
    {
      return "Available for more than 10 products";
    }
    else if (Choice=="Brand Partner")
    {
      return "Available for more than 5 products";
    }
    else if (Choice=="Executives")
    {
      return "Available for any products";
    }
    else if (Choice=="Owner")
    {
      return "King";
    }
    else
    {
      return "N/A";
    }
  }
}

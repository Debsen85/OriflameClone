import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialOfferService {

  constructor() { }
  Offer(Choice: string): string
  {
    if (Choice=="Normal Customer")
    {
      return "Not Available";
    }
    else if (Choice=="VIP Customer")
    {
      return "Available with a discount upto 5% on every product";
    }
    else if (Choice=="Brand Partner")
    {
      return "Available with a discount upto 10% on every product";
    }
    else if (Choice=="Executives")
    {
      return "Available with a discount upto 15% on every product";
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

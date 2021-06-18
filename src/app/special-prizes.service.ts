import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialPrizesService {

  constructor() { }
  Prizes(Choice: string): string
  {
    if (Choice=="Normal Customer")
    {
      return "Not Available";
    }
    else if (Choice=="VIP Customer")
    {
      return "Not Available";
    }
    else if (Choice=="Brand Partner")
    {
      return "Available";
    }
    else if (Choice=="Executives")
    {
      return "Available";
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

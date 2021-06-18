import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TakeAwayService {

  constructor() { }
  Take(Choice: string): string
  {
    if (Choice=="Normal Customer")
    {
      return "Available";
    }
    else if (Choice=="VIP Customer")
    {
      return "Available";
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

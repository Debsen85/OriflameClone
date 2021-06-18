import { Component, OnInit } from '@angular/core';
import { HomeDeliveryService } from '../home-delivery.service';
import { TakeAwayService } from '../take-away.service';
import { SpecialOfferService } from '../special-offer.service';
import { SpecialPrizesService } from '../special-prizes.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [
    HomeDeliveryService,
    TakeAwayService,
    SpecialOfferService,
    SpecialPrizesService
  ]
})
export class ServicesComponent implements OnInit {

  Customer: string="Normal Customer";
  HD: string="N/A";
  TA: string="N/A";
  SO: string="N/A";
  SP: string="N/A";
  constructor(
    private myservice1: HomeDeliveryService,
    private myservice2: TakeAwayService,
    private myservice3: SpecialOfferService,
    private myservice4: SpecialPrizesService
  ) { }

  ngOnInit(): void {
  }

  But1()
  {
    this.Customer="Brand Partner";
  }
  But2()
  {
    this.Customer="VIP Customer";
  }
  OP1()
  {
    let Val=((document.getElementById("Inp1") as HTMLInputElement).value) || "N/A";
    this.HD=this.myservice1.Home(Val);
  }
  OP2()
  {
    let Val=((document.getElementById("Inp2") as HTMLInputElement).value) || "N/A";
    this.TA=this.myservice2.Take(Val);
  }
  OP3()
  {
    let Val=((document.getElementById("Inp3") as HTMLInputElement).value)  || "N/A";
    this.SO=this.myservice3.Offer(Val);
  }
  OP4()
  {
    let Val=((document.getElementById("Inp4") as HTMLInputElement).value)  || "N/A";
    this.SP=this.myservice4.Prizes(Val);
  }
}

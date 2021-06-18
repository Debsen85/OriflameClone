import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  Cost:number=0;
  cards1=[
    {
      title: 'Perfume',
      description: 'Women´s Collection Mysterial Oud Eau de Toilette',
      buttonText1: '+',
      price: 1649,
      buttonText2: '-',
      img: '../assets/P1.Jpeg'
    },
    {
      title: 'Perfume',
      description: 'Women´s Collection Sensual Jasmine Eau de Toilette',
      buttonText1: '+',
      price: 1799,
      buttonText2: '-',
      img: '../assets/P2.Jpeg'
    },
    {
      title: 'Body Spray',
      description: 'Women’s Collection Jasmine Perfumed Body Spray',
      buttonText1: '+',
      price: 249,
      buttonText2: '-',
      img: '../assets/P3.Jpeg'
    },
    {
      title: 'Skin Care',
      description: 'Purifying Clay Face Mask',
      buttonText1: '+',
      price: 449,
      buttonText2: '-',
      img: '../assets/P4.Jpeg'
    },
    {
      title: 'Skin Care',
      description: 'Purifying Corrective Stick',
      buttonText1: '+',
      price: 499,
      buttonText2: '-',
      img: '../assets/P5.Jpeg'
    },
    {
      title: 'Skin Care',
      description: 'Purifying Booster',
      buttonText1: '+',
      price: 899,
      buttonText2: '-',
      img: '../assets/P6.Jpeg'
    },
    {
      title: 'Perfume',
      description: 'Toujours Eau de Toilette',
      buttonText1: '+',
      price: 1599,
      buttonText2: '-',
      img: '../assets/Q1.Jpeg'
    },
    {
      title: 'Hair Care',
      description: 'Power Hold & Sleek Invisible Hair Gel',
      buttonText1: '+',
      price: 399,
      buttonText2: '-',
      img: '../assets/Q2.Jpeg'
    },
    {
      title: 'Skin Care',
      description: 'Men Purifying & Exfoliating Cleanser',
      buttonText1: '+',
      price: 1100,
      buttonText2: '-',
      img: '../assets/Q3.Jpeg'
    },
    {
      title: 'Full-Body',
      description: 'Subzero Hair & Body Wash',
      buttonText1: '+',
      price: 499,
      buttonText2: '-',
      img: '../assets/Q4.Jpeg'
    },
    {
      title: 'Skin Care',
      description: 'baby O Body Oil',
      buttonText1: '+',
      price: 899,
      buttonText2: '-',
      img: '../assets/R1.Jpeg'
    },
    {
      title: 'Full Body',
      description: 'baby O Hair & Body Wash',
      buttonText1: '+',
      price: 599,
      buttonText2: '-',
      img: '../assets/R2.Jpeg'
    },
    {
      title: 'Skin Care',
      description: 'baby O Multi-Purpose Balm',
      buttonText1: '+',
      price: 699,
      buttonText2: '-',
      img: '../assets/R3.Jpeg'
    }
  ]
  cards2 = [
    {
      title: 'Perfume',
      description: 'Women´s Collection Mysterial Oud Eau de Toilette',
      buttonText1: '+',
      price: 1649,
      buttonText2: '-',
      img: '../assets/P1.Jpeg'
    },
    {
      title: 'Perfume',
      description: 'Women´s Collection Sensual Jasmine Eau de Toilette',
      buttonText1: '+',
      price: 1799,
      buttonText2: '-',
      img: '../assets/P2.Jpeg'
    },
    {
      title: 'Body Spray',
      description: 'Women’s Collection Jasmine Perfumed Body Spray',
      buttonText1: '+',
      price: 249,
      buttonText2: '-',
      img: '../assets/P3.Jpeg'
    },
    {
      title: 'Skin Care',
      description: 'Purifying Clay Face Mask',
      buttonText1: '+',
      price: 449,
      buttonText2: '-',
      img: '../assets/P4.Jpeg'
    },
    {
      title: 'Skin Care',
      description: 'Purifying Corrective Stick',
      buttonText1: '+',
      price: 499,
      buttonText2: '-',
      img: '../assets/P5.Jpeg'
    },
    {
      title: 'Skin Care',
      description: 'Purifying Booster',
      buttonText1: '+',
      price: 899,
      buttonText2: '-',
      img: '../assets/P6.Jpeg'
    }
  ];
  cards3 = [
    {
      title: 'Perfume',
      description: 'Toujours Eau de Toilette',
      buttonText1: '+',
      price: 1599,
      buttonText2: '-',
      img: '../assets/Q1.Jpeg'
    },
    {
      title: 'Hair Care',
      description: 'Power Hold & Sleek Invisible Hair Gel',
      buttonText1: '+',
      price: 399,
      buttonText2: '-',
      img: '../assets/Q2.Jpeg'
    },
    {
      title: 'Skin Care',
      description: 'Men Purifying & Exfoliating Cleanser',
      buttonText1: '+',
      price: 1100,
      buttonText2: '-',
      img: '../assets/Q3.Jpeg'
    },
    {
      title: 'Full-Body',
      description: 'Subzero Hair & Body Wash',
      buttonText1: '+',
      price: 499,
      buttonText2: '-',
      img: '../assets/Q4.Jpeg'
    }    
  ];
  cards4 = [
    {
      title: 'Skin Care',
      description: 'baby O Body Oil',
      buttonText1: '+',
      price: 899,
      buttonText2: '-',
      img: '../assets/R1.Jpeg'
    },
    {
      title: 'Full Body',
      description: 'baby O Hair & Body Wash',
      buttonText1: '+',
      price: 599,
      buttonText2: '-',
      img: '../assets/R2.Jpeg'
    },
    {
      title: 'Skin Care',
      description: 'baby O Multi-Purpose Balm',
      buttonText1: '+',
      price: 699,
      buttonText2: '-',
      img: '../assets/R3.Jpeg'
    }    
  ];

  Items: number=0;
  Product:string="All";

  ngOnInit(): void {
  }
  B1()
  {
    this.Product="All";
  }
  B2()
  {
    this.Product="Female Products";
  }
  B3()
  {
    this.Product="Male Products";
  }
  B4()
  {
    this.Product="Baby Products";
  }
  Flag: boolean=false;
  Name: string="";
  Position: string="Normal customer";
  Discount: number=0;
  TI: number=0;
  TC: number=0;
  B5()
  {
    this.Name=(document.getElementById("Inp1") as HTMLInputElement).value;
    this.Position=((document.getElementById("Inp2") as HTMLInputElement).value) || "Normal Customer";

    if (this.Position=="Normal Customer")
    {
      this.Discount=0;
    }
    else if (this.Position=="VIP Customer")
    {
      this.Discount=5;
    }
    else if (this.Position=="Brand Partner")
    {
      this.Discount=10;
    }
    else if (this.Position=="Executives")
    {
      this.Discount=12.5;
    }
    else
    {
      this.Discount=15;
    }
    this.TI=this.Items;
    this.TC=this.Cost-((this.Cost*this.Discount)/100);
    this.Flag=true;
  }
  Inc(cards:number)
  {
    if (this.Items<15)
    {
      this.Items++;
      this.Cost+=cards;
    }
    else
    {
      alert("You cannot buy more than 15 products!")
    }
  }
  Dec(cards:number)
  {
    if (this.Items==0)
    {
      alert("You cannot delete more products!")
    }
    else
    {
      this.Cost-=cards;
      this.Items--;
    }
  }
}
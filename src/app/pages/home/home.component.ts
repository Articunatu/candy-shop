import { Component } from '@angular/core';
import { CandyCardComponent }  from '../../components/candy-card/candy-card.component';
import { GenericService, BASE_PATH } from '../..//service/generic.service'
import { mapApiResponseToCandy } from '../../service/mapping';
import { Candy } from '../../models/candy.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CandyCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    {
      provide: BASE_PATH,
      useValue: 'products'
    },
    {
      provide: GenericService,
      useClass: GenericService
    }
  ]
})

export class HomeComponent {
  candiesOnSale: Candy[] = [
    {
        id: 1,
        title: 'Chokladkaka',
        price: 29.99, // Svenskt pris
        imageThumbnailUrl: 'assets/images/candies/chocolate-bar.jpg',
        isOnSale: true,
        isInStock: true,
        categoryId: 1
    },
    {
        id: 2,
        title: 'Gummy Bears',
        price: 24.99, // Svenskt pris
        imageThumbnailUrl: 'assets/images/candies/gummy-bears.jpg',
        isOnSale: true,
        isInStock: true,
        categoryId: 2
    },
    {
        id: 3,
        title: 'Klubba',
        price: 10.99, // Svenskt pris
        imageThumbnailUrl: 'assets/images/candies/lollipop.jpg',
        isOnSale: false,
        isInStock: true,
        categoryId: 1
    },
    {
        id: 4,
        title: 'Sura Maskar',
        price: 19.99, // Svenskt pris
        imageThumbnailUrl: 'assets/images/candies/sour-worms.jpg',
        isOnSale: false,
        isInStock: false,
        categoryId: 2
    },
    {
        id: 5,
        title: 'Mintgodis',
        price: 14.99, // Svenskt pris
        imageThumbnailUrl: 'assets/images/candies/mint-candies.jpg',
        isOnSale: true,
        isInStock: true,
        categoryId: 3
    },
    {
        id: 6,
        title: 'Karameller',
        price: 19.99, // Svenskt pris
        imageThumbnailUrl: 'assets/images/candies/caramel-chews.jpg',
        isOnSale: true,
        isInStock: true,
        categoryId: 1
    },
    {
        id: 7,
        title: 'Gelégodisar',
        price: 17.49, // Svenskt pris
        imageThumbnailUrl: 'assets/images/candies/jelly-beans.jpg',
        isOnSale: false,
        isInStock: true,
        categoryId: 2
    },
    {
        id: 8,
        title: 'Mörk Choklad',
        price: 39.99, // Svenskt pris
        imageThumbnailUrl: 'assets/images/candies/dark-chocolate.jpg',
        isOnSale: true,
        isInStock: false,
        categoryId: 1
    }
];

    // constructor(private service : GenericService<Candy, Number>) { }
    // async listAllCandies(): Promise<void> {
    //   this.service.findValues().subscribe(response => {
    //     if (response.Success) {
    //       this.candiesOnSale = mapApiResponseToCandy(response.Data);
    //     } else {
    //       console.error('Failed to fetch candies.');
    //     }
    //   });
    // }
    

    // async getAllCandies(): Promise<void> {
    //   try {
    //       const observable = await this._service.findMany(); 
    //       observable.subscribe({
    //           next: (response: Response) => {
    //               if (response.status === 'success' && response.data) {
    //                   this.candiesOnSale = mapApiResponseToCandy(response.data); 
    //               } else {
    //                   console.error('Unexpected response structure:', response);
    //                   this.candiesOnSale = [];
    //               }
    //           },
    //           error: (error: unknown) => {
    //               console.error('Error fetching candies:', error);
    //               this.candiesOnSale = []; 
    //           }
    //       });
    //   } catch (error) {
    //       console.error('An unexpected error occurred:', error);
    //   }
  //}  
}

import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Orange',
        cookTime: '05-10',
        price: 20,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/product-1.png',
        tags: ['SlowFood','Juice']
      },
      {
        id: 2,
        name: 'Cutlat',
        cookTime: '10-20',
        price: 15,
        favorite: false,
        origins: ['india','us'],
        star: 3.7,
        imageUrl: '/assets/product-2.png',
        tags: ['SlowFood','Fry']
      },
      {
        id: 3,
        name: 'Meet Fry',
        cookTime: '20-30',
        price: 50,
        favorite: true,
        origins: ['india','germany'],
        star: 4.9,
        imageUrl: '/assets/product-3.png',
        tags: ['FastFood','Fry','Lunch'],
      },
      {
        id: 4,
        name: 'Cabgie',
        cookTime: '10-15',
        price: 40,
        favorite: false,
        origins: ['begium'],
        star: 3.5,
        imageUrl: '/assets/product-4.png',
        tags: ['SlowFood','soup'],
      },
      {
        id: 5,
        name: 'Potatos',
        cookTime: '30-45',
        price: 20,
        favorite: false,
        origins: ['chaina','France'],
        star: 4.5,
        imageUrl: '/assets/product-5.png',
        tags: ['FastFood','Fry'],
      },
      {
        id: 6,
        name: 'Papayo',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['india','asia'],
        star: 3.9,
        imageUrl: '/assets/product-6.png',
        tags: ['SlowFood','Juice','Cocktail'],
      },
      {
        id: 7,
        name: 'Carrotie',
        cookTime: '20-35',
        price: 30,
        favorite: false,
        origins: ['nepal','usa'],
        star: 4.9,
        imageUrl: '/assets/product-7.png',
        tags: ['SlowFood','Juice','Halwa'],
      },
      {
        id: 8,
        name: 'Lemonie',
        cookTime: '10-15',
        price: 10,
        favorite: true,
        origins: ['persia'],
        star: 4.1,
        imageUrl: '/assets/product-8.png',
        tags: ['SlowFood','Lime'],
      }

    ]
  }
}

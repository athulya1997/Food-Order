import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag:string):Foods[]{
    return tag == "All" ? 
    this.getAll(): this.getAll().filter(food => food.tags?.includes(tag));
    // if(tag == 'all')
    // return this.getAll()
    // else
    // return this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTag():Tag[]{
    return[
      { name: 'All', count: 14},
      { name: 'FastFood', count: 3},
      { name: 'Pizza', count: 2},
      { name: 'Lunch', count: 4},
      { name: 'SlowFood', count: 5},
      { name: 'Hamburger', count: 1},
      { name: 'Fry', count: 3},
      { name: 'Chicken', count: 4},

    ]
  }
  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Chik Burger',
        cookTime: '10-20',
        price: 20,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/product-1.jpg',
        tags: ['SlowFood','Hamburger']
      },
      {
        id: 2,
        name: 'Fried Biriyani',
        cookTime: '15-25',
        price: 50,
        favorite: false,
        origins: ['india','us'],
        star: 3.7,
        imageUrl: '/assets/product-2.jpg',
        tags: ['FastFood','Lunch','Chicken']
      },
      {
        id: 3,
        name: 'Club Sandwich',
        cookTime: '20-30',
        price: 30,
        favorite: true,
        origins: ['india','germany'],
        star: 4.9,
        imageUrl: '/assets/product-3.jpg',
        tags: ['SlowFood','Lunch'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        cookTime: '15-20',
        price:15,
        favorite: false,
        origins: ['begium'],
        star: 3.5,
        imageUrl: '/assets/product-4.jpg',
        tags: ['SlowFood','Fry'],
      },
      {
        id: 5,
        name: 'Sanndwich Bros Chicken',
        cookTime: '30-45',
        price: 20,
        favorite: false,
        origins: ['chaina','France'],
        star: 4.5,
        imageUrl: '/assets/product-5.jpg',
        tags: ['SlowFood','Fry','Chicken'],
      },
      {
        id: 6,
        name: 'Vegie Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['india','asia'],
        star: 3.9,
        imageUrl: '/assets/product-6.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },
      {
        id: 7,
        name: 'Chicken Nuggut',
        cookTime: '20-35',
        price: 30,
        favorite: false,
        origins: ['nepal','usa'],
        star: 4.9,
        imageUrl: '/assets/product-7.jpg',
        tags: ['SlowFood','Fry','Chicken'],
      },
      {
        id: 8,
        name: 'Pizza Chicken Tika',
        cookTime: '10-15',
        price: 10,
        favorite: true,
        origins: ['persia'],
        star: 4.1,
        imageUrl: '/assets/product-8.jpg',
        tags: ['FastFood','Pizza','Lunch','Chicken'],
      }

    ]
  }
}

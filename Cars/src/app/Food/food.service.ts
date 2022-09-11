import { Injectable } from '@angular/core';
import { Food } from './Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood(): Food[] {
    return [
      {
        id: 1,
        price: 100,
        name: 'Portobello Mushroom Burgers',
        favorite: false,
        star: 0,
        tags: ['burger', 'FastFood'],
        imageUrl: './assets/1.jpg'
      },
      {
        id: 2,
        price: 130,
        name: 'Vegan salad bowl',
        favorite: true,
        star: 3,
        tags: ['veg', 'FastFood'],
        imageUrl: './assets/2.jpg'
      },
      {
        id: 3,
        price: 64,
        name: 'I scream You Scream',
        favorite: true,
        star: 4,
        tags: ['Icecreem', 'FastFood'],
        imageUrl: './assets/3.jpg'
      },
      {
        id: 4,
        price: 200,
        name: 'fresh veggies, drizzled with sesame oil',
        favorite: true,
        star: 4.5,
        tags: ['Veg', 'FastFood'],
        imageUrl: './assets/4.jpg'
      },
      {
        id: 5,
        price: 220,
        name: 'Avocado and Egg Toast',
        favorite: true,
        star: 4,
        tags: ['Nonveg', 'FastFood'],
        imageUrl: './assets/5.jpg'
      },
      {
        id: 6,
        price: 64,
        name: 'Veg pizza',
        favorite: true,
        star: 3.5,
        tags: ['Pizza', 'FastFood'],
        imageUrl: './assets/6.jpg'
      }
    ]
  }
}

import { Component, OnInit } from '@angular/core';
import { FoodService } from '../Food/food.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  foods!:any[];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    this.foods = this.fs.getAllFood();
  }

}

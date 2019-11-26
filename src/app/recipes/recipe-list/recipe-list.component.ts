import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A Test Recipe', 'This is simply a test','https://assets3.thrillist.com/v1/image/2797371/size/tl-horizontal_main_2x.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test','https://assets3.thrillist.com/v1/image/2797371/size/tl-horizontal_main_2x.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
      new Ingredient('Mangos', 8),
      new Ingredient('Pineapple', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

}

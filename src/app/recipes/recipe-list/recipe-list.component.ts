import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Taquitos', 'Yummy goodness', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVpLC1CxENS9BTF_zaV7bML21TGM6GvljpSIGLHttaf_eEJQC')
  ];

  constructor() { }

  ngOnInit() {
  }

}

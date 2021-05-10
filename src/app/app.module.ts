import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponentComponent } from './shoppinglist-component/shoppinglist-component.component';
import { RecipebookComponentComponent } from './recipebook-component/recipebook-component.component';
import { RecipeDetailComponent } from './recipebook-component/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipebook-component/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipebook-component/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shoppinglist-component/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponentComponent,
    RecipebookComponentComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ShoppingCart } from '../../models/shopping-cart.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {

  shoppingCartTotal = 0;
  
  shoppingCart: ShoppingCart = {
    id: '',
    shoppingCartItems: []
  }
  
  addToShoppingCart(): void {
    
  }

  removeFromShoppingCart(): void {

  }
  
  clearCart(): void {

  }
}

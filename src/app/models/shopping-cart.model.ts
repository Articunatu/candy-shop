import { ShoppingCartItem } from "./shopping-cart-item.model"

export interface ShoppingCart {
    id : string,
    shoppingCartItems : ShoppingCartItem[]
}
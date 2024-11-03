import { ShoppingCart } from "../models/shopping-cart.model"

export interface ShoppingCartViewModel {
    shoppingCart : ShoppingCart,
    shoppingCartTotal : number
}
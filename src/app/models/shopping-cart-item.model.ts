import { Candy } from "./candy.model"

export interface ShoppingCartItem {
    id : number,
    shoppingCartId : string,
    candy : Candy,
    amount : number
}
import { Candy } from "./candy.model"

export interface Category {
    id: number,
    title: string,
    description: string,
    candies: Candy[]
}
import { Candy } from "../models/candy.model"

export interface CandyList {
    candies : Candy[],
    currentCategory : string
}

// (Candy[] | string)
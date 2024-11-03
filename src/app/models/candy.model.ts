export interface Candy {
    id: number;
    title: string;
    price: number;
    imageThumbnailUrl: string;
    isOnSale: boolean;
    isInStock: boolean;
    categoryId: number;
}

export interface CandyExtended extends Omit<Candy, "imageThumbnailUrl"> {
    description: string;
    imageUrl: string;
}

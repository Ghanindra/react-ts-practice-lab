export interface Product{
    id:number;
    name:string;
    category:string
    price:number;
    inStock:boolean
}
export interface Cart{
    productId:number
    quantity:number,
}
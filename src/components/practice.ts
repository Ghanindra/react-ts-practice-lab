

type status="pending"|"approved"|"rejected"
// let currentStatus:status="approved"
// let currentStatus:status="hello"
// console.log(currentStatus);

export interface Product{
    id:number;
    name:string;
    price:number;
    discount?:number;
}
const products:Product={
    "id":1,
    "name":"bibash",
    "price":22



}
console.log(products);

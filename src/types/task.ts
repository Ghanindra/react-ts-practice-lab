import { JSX } from "react";

export type Status="pending"|"in-progress"|"completed"

export enum Role{
    Admin="Admin",
    User="User"
}

export interface Task{
    id:number;
    title:string;
    status:Status
}

export interface ListProps<T>{
    items:T[];
    renderItem:(item:T)=>JSX.Element
}
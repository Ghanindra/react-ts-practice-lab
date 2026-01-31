import {useState} from 'react'
export function useStorage<T extends{id:number}>(){
    const[items,setItems]=useState<T[]>([])

function add(item:T):void
{
    setItems(prev=>[...prev,item])
}

function remove(id:number):void
{
    setItems(prev=>prev.filter(item=>item.id!==id))
}
function find(id:number):T|undefined
{
  return  items.find(item=>item.id===id)
}
function getAll():T[]{
    return items;
}
return{items,add,remove,find,getAll}
}
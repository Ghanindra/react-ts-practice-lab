

// import React, { useState ,useEffect} from 'react'
// import {userData} from './components/ProfileCard'
// import {Role} from './components/ProfileCard'
// import ProfileCard from './components/ProfileCard'
// import InputBox from './components/InputBox'

// const App = () => {
//   const[users,setUsers]=useState<userData[]>(()=>{
    
//     const storeUser=localStorage.getItem("users");
//     return storeUser?JSON.parse(storeUser):[];
//   });
//   const [search, setSearch] = useState<string>(() => {
//   const storedSearch = localStorage.getItem('searchTerm');
//   return storedSearch ? storedSearch : '';
// });
  



//     const [edit,setEdit]=useState<userData|null>(null)

//     const[roleFilter,setRoleFilter]=useState<""|Role>(()=>{
//       const filterstore=localStorage.getItem("roleFilter")as Role|null
//       return filterstore?filterstore:'';
//     })

// useEffect(() => {
//    localStorage.setItem("users",JSON.stringify(users))
//   }, [users])
//   useEffect(() => {
//   localStorage.setItem('searchTerm', search);
// }, [search,roleFilter]);
// const handleDltUser=((name:string)=>{
//  setUsers(prev=>prev.filter(user=>user.name!==name))
// })
// const handleEditUser=((user:userData)=>{
// setEdit(user)
// })

// const toggles=((name:string)=>{
//   setUsers(prev=>prev.map(user=>user.name===name?{...user,isAdmin:!user.isAdmin}:user))
// })
// const searchName= users.filter(user=> {
//   const matchSearch=user.name.toLowerCase().includes(search.toLowerCase())||user.email.includes(search.toLowerCase())
//   const matchRole=roleFilter===""||user.role.toLowerCase()===roleFilter.toLowerCase();
// return matchSearch && matchRole;
// });
//   return (
//     <div>
//       <h1> User Management</h1>
//             <input type="text" value={search} placeholder="search by name or email" onChange={e=>setSearch(e.target.value)}/>
//     <select value={roleFilter} onChange={(e)=>setRoleFilter(e.target.value as ''|Role)}>
//       <option value="">All</option>
//       <option value="user">User</option>
//       <option value="admin">Admin</option>
//     </select>
//        <InputBox setUser={setUsers} edit={edit} clearEdit={()=>setEdit(null)}/>
//    {searchName.map((user,index)=> (
//     <ProfileCard key={index}{...user} toggleAdmin={toggles} handleDltUser={handleDltUser}  handleEditUser={handleEditUser} />))}

    

   
//     </div>
//   )
// }

// export default App;


// import React from 'react'

// import UserManager from './components/UserManager'
// const App = () => {
//   return (
//     <div>
//       <UserManager/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Products from './components/Products'
const App = () => {
  return (
    <div>
      <Products/>
    </div>
  )
}

export default App
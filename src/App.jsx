import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import AddUsers from './AddUsers'
import UserEdit from './UserEdit'
import AddUser from './crudoperation/AddUser'
import GetUser from './crudoperation/GetUser'
import UpdateUser from './crudoperation/UpdateUser'
const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addusers" element={<AddUsers />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
      </Routes>
      {/* <AddUser/> */}
      {/* <GetUser/> */}


    </>

  )
}

export default App

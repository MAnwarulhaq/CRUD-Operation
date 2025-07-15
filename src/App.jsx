import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import AddUsers from './AddUsers'
import UserEdit from './UserEdit'

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addusers" element={<AddUsers />} />
        <Route path="/edit/:id" element={<UserEdit />} />
      </Routes>


    </>

  )
}

export default App

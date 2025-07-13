// AddUsers.jsx
import React from 'react';

const AddUsers = () => {
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [email, setEmail] = React.useState('');
  const handleAddUser = async() => {
    const url= "http://localhost:3000/users";
    const response = await fetch(url, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json"
      // },
      body: JSON.stringify({ name,lastName, age, email })
    });
    const data = await response.json();
    if(data) {
      alert("User Added Successfully");
      setName('');
      setAge('');
      setEmail('');
    }

  };
  return (
    <div style={{ textAlign: "center"}}>
      <h1>Add New Users</h1>
      <input type="text" name="" id="" placeholder='Enter Your First Name' onChange={(e)=>setName(e.target.value)} /> 
      <br /><br />
      <input type="text" name="" id="" placeholder='Enter Your last Name' onChange={(e)=>setLastName(e.target.value)} /> 
      <br /><br />
      <input type="text" name="" id="" placeholder='Enter Your Age' onChange={(e)=>setAge(e.target.value)} />
      <br /><br />
      <input type="text" name="" id="" placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} />
      <br /><br />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUsers;

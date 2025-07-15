import React, { use } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';

const UserEdit = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams();
    console.log("User ID to edit:", id);

    useEffect(() => {
        getUserData()
    }, []);

    const getUserData = async () => {
        const response = await fetch(`http://localhost:3000/users/${id}`);
        const data = await response.json();
        console.log("User data:", data);
        setName(data.name)
        setLastName(data.lastName)
        setAge(data.age)
        setEmail(data.email)
        // You can set this data to state if you want to pre-fill the form
    }



    return (
        <div style={{ width: '100%', backgroundColor: "orange", textAlign: 'center' }}>
            <h2>Edit User Details</h2>
            <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
            <input type="text" name="" id="" value={lastName}  onChange={(e)=>setName(e.target.value)}/> <br /><br />
            <input type="text" name="" id="" value={age}  onChange={(e)=>setName(e.target.value)}/> <br /><br />
            <input type="text" name="" id="" value={email}  onChange={(e)=>setName(e.target.value)}/> <br /><br />
            <button>Update user</button>
        </div>
    )
}

export default UserEdit
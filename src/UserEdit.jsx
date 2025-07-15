import React, { use } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';

const UserEdit = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams();
    // console.log("User ID to edit:", id);

    useEffect(() => {
        getUserData()
    }, []);

    const getUserData = async () => {
        const response = await fetch(`http://localhost:3000/users/${id}`);
        const data = await response.json();
        // console.log("User data:", data);
        setName(data.name)
        setLastName(data.lastName)
        setAge(data.age)
        setEmail(data.email)
        // You can set this data to state if you want to pre-fill the form
    }
    const updateUser = async () => {
        console.log(name, lastName, age, email);
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                lastName,
                age,
                email
            })

        });
        const data = await response.json();
        if (data) {
            alert("User updated successfully");
            setName('');
            setLastName('');
            setAge('');
            setEmail('');
        }
    }



    return (
        <div style={{ width: '100%', backgroundColor: "orange", textAlign: 'center' }}>
            <h2>Edit User Details</h2>
            <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
            <input type="text" name="" id="" value={lastName}  onChange={(e)=>setLastName(e.target.value)}/> <br /><br />
            <input type="text" name="" id="" value={age}  onChange={(e)=>setAge(e.target.value)}/> <br /><br />
            <input type="text" name="" id="" value={email}  onChange={(e)=>setEmail(e.target.value)}/> <br /><br />
            <button onClick={updateUser}>Update user</button>
        </div>
    )
}

export default UserEdit
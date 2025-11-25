import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router'
const UpdateUser = () => {
    const navigator=useNavigate()
    const { id } = useParams()
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    // console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then((res) => {
                // console.log(res)
                setName(res.data.name)
                setLastname(res.data.lastname)
                setAge(res.data.age)
                setEmail(res.data.email)
            })
            .catch((error) => console.log(error))
    },[id])

    // console.log(name,lastName,age,email)
    function updateuser(id) {
        axios.put(`http://localhost:3000/users/${id}`,
            {
                name: name,
                lastname: lastname,
                age: age,
                email: email
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then((res) => {
                console.log("Update successful!", res)
                alert("update user")
                navigator('/')
            })
            .catch((error) => console.log(error));
    }


    return (
        <div>
            <h1>Update the User</h1><br />
            <input type="text" name="" id="" value={name} placeholder='' onChange={(e) => setName(e.target.value)} />
            <br /><br />
            <input type="text" name="" id="" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <br /><br />
            <input type="number" name="" id="" value={age} onChange={(e) => setAge(e.target.value)} />
            <br /><br />
            <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br /><br />
            <button onClick={()=>updateuser(id)}>Update The users</button>

        </div>
    )
}

export default UpdateUser
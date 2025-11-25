import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetUser = () => {
    const [userData, setUserData] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        displayuser()
    },[])

    function displayuser(){
        setTimeout(() => {
            axios.get("http://localhost:3000/users")
                .then((res) => {
                    setUserData(res.data)
                    setLoader(false)
                })
                .catch((error) => {
                    console.log(error)
                    setLoader(false)
                })
        },2000)

    }

    // console.log(userData)

    function deleteuser(id){
        alert("User delete successfull!")
        axios.delete(`http://localhost:3000/users/${id}`)
        .then((res)=>console.log(res))
        .catch((error)=>console.log(error))

        displayuser()
    }

    return (
        <div>
            <h1>Display User</h1>
            {loader ? (
                <h2>Data loading...</h2>
            ) : (
                <table border="1" cellPadding="5">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Delete Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.lastname}</td>
                                <td>{item.age}</td>
                                <td>{item.email}</td>
                                <td><button onClick={()=>deleteuser(item.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default GetUser

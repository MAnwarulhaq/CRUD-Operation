import React, { useState } from 'react'
import axios from 'axios'

const AddUser = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    lastname: "",
    age: "",
    email: ""
  })

  const handleform = (e) => {
    e.preventDefault()

    axios.post("http://localhost:3000/users", formdata, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        console.log(res)
        alert("Form Data added successfully ✅")

        // ✅ Clear all input fields after success
        setFormdata({
          name: "",
          lastname: "",
          age: "",
          email: ""
        })
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleform}>
        <label htmlFor="name">First Name</label><br />
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formdata.name}
          onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })}
        />
        <br /><br />

        <label htmlFor="lastname">Last Name</label><br />
        <input
          type="text"
          name="lastname"
          placeholder="Enter Your Last Name"
          value={formdata.lastname}
          onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })}
        />
        <br /><br />

        <label htmlFor="age">Age</label><br />
        <input
          type="text"
          name="age"
          placeholder="Enter Your Age"
          value={formdata.age}
          onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })}
        />
        <br /><br />

        <label htmlFor="email">Email</label><br />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formdata.email}
          onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddUser

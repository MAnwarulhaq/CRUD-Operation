import React, { useEffect } from 'react';
import { Link } from 'react-router';
const url = 'http://localhost:3000/users'
const Home = () => {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        displayUsers();
    }, []);

    const displayUsers = async () => {
        // const url='http://localhost:3000/users'
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setUsers(data);

    }
    const deleteUser = async (id) => {
        const response = await fetch(url + '/' + id, {
            method: "DELETE",

        })
        const data = await response.json();
        if (data) {
            alert("User Deleted Successfully");
            displayUsers(); // Refresh the user list after deletion
        }

    }
    return (
        <div style={{ width: '100%', backgroundColor: "orange", textAlign: 'center', }}>
            <h1>Users List </h1>
            {
                users.length > 0 ? (
                    <table style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    {/* <td>{user.id}</td> */}
                                    <td>{user.name}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                                    <td><Link to={`/edit/${user.id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    // <ul>
                    //     {users.map((user) => (
                    //         <li key={user.id}>{user.name}</li>
                    //     ))}
                    // </ul>
                ) : (
                    <p>No users found</p>
                )
            }

        </div>
    )
}

export default Home
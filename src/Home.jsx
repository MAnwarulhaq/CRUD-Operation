// import React, { useEffect } from 'react';
// import { Link } from 'react-router';
// const url = 'http://localhost:3000/users'
// const Home = () => {
//     const [users, setUsers] = React.useState([]);
//     const [loading, setLoading] = React.useState(true);

//     useEffect(() => {
//         displayUsers();
//     }, []);

//     const displayUsers =  () => {
//         // const url='http://localhost:3000/users'

//         setTimeout(async () => {
//             const response = await fetch(url);
//             const data = await response.json();
//             setLoading(false);
//             // console.log(data);
//             setUsers(data);
//         }, 2000)


//     }
//     const deleteUser = async (id) => {
//         const response = await fetch(url + '/' + id, {
//             method: "DELETE",

//         })
//         const data = await response.json();
//         if (data) {
//             alert("User Deleted Successfully");
//             displayUsers(); // Refresh the user list after deletion
//         }

//     }
//     return (
//         <div style={{ width: '100%', backgroundColor: "orange", textAlign: 'center', }}>
//             <h1>Users List </h1>
//             {
//                 loading ? <h2>Loading...</h2> :
//                 users.length > 0 ? (
//                     <table style={{ width: '100%' }}>
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Last Name</th>
//                                 <th>Age</th>
//                                 <th>Email</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.map((user) => (
//                                 <tr key={user.id}>
//                                     {/* <td>{user.id}</td> */}
//                                     <td>{user.name}</td>
//                                     <td>{user.lastName}</td>
//                                     <td>{user.age}</td>
//                                     <td>{user.email}</td>
//                                     <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
//                                     <td><Link to={`/edit/${user.id}`}>
//                                         <button>Edit</button>
//                                     </Link>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     // <ul>
//                     //     {users.map((user) => (
//                     //         <li key={user.id}>{user.name}</li>
//                     //     ))}
//                     // </ul>
//                 ) : (
//                     <p>No users found</p>
//                 )
//             }

//         </div>
//     )
// }

// export default Home
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const url = 'http://localhost:3000/users';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🌗 Step 1: Theme state (check localStorage first)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // 🌗 Step 2: Apply theme when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#222';
    document.body.style.color = theme === 'light' ? '#000' : '#fff';
  }, [theme]);

  // 🌗 Step 3: Toggle function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // 🧩 Fetch users
  useEffect(() => {
    displayUsers();
  }, []);

  const displayUsers = () => {
    setTimeout(async () => {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setUsers(data);
    }, 2000);
  };

  // 🗑 Delete user
  const deleteUser = async (id) => {
    const response = await fetch(url + '/' + id, {
      method: 'DELETE',
    });
    const data = await response.json();
    if (data) {
      alert('User Deleted Successfully');
      displayUsers(); // Refresh user list
    }
  };

  return (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        minHeight: '100vh',
        backgroundColor: theme === 'light' ? '#f6f6f6' : '#1a1a1a',
        color: theme === 'light' ? '#000' : '#fff',
        transition: '0.3s',
        paddingBottom: '40px'
      }}
    >
      <h1>Users List</h1>

      {/* 🌙☀️ Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          marginBottom: '20px',
          cursor: 'pointer',
          backgroundColor: theme === 'light' ? '#333' : '#eee',
          color: theme === 'light' ? '#fff' : '#000',
          transition: '0.3s',
        }}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      {/* 🧍‍♂️ Users Table */}
      {loading ? (
        <h2>Loading...</h2>
      ) : users.length > 0 ? (
        <table
          style={{
            width: '90%',
            margin: 'auto',
            borderCollapse: 'collapse',
            backgroundColor: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#000' : '#fff',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: theme === 'light' ? '#ddd' : '#444' }}>
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
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
                <td>
                  <Link to={`/edit/${user.id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default Home;

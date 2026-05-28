import { useEffect, useRef, useState } from "react";

const UserList = () => {
    
    const [users ,setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => setUsers(json))
          .catch((err)=>{
            console.log(err)
          })
    }, [])


    return (
        <>
        <h1>사용자 목록</h1>

        <ul>
        {users.map((user)=>(
                <li key={user.id}>{user.id}, {user.name}, {user.email}</li>
            ))}
        </ul>
        </>
    );
};

export default UserList;
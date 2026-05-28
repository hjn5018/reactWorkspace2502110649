import { useEffect, useRef, useState } from "react";

const UserList = () => {
    
    const [users ,setUsers] = useState([]);

    useEffect(()=>{
        // console.log("1111"); // mount
        fetch('https://jsonplaceholder.typicode.com/users')
        // fetch('https://jsonplaceholder.typicode.com/users/2')
          .then(response => response.json())
          .then(json => setUsers(json))
        //   .then(json => console.log(json))
          .catch((err)=>{
            console.log(err)
          })
        // return () => {console.log("2222")} // clean up function: unmount
    }, [])


    return (
        <>
        <h1>사용자 목록</h1>

        <ul>
        {users.map((user)=>(
                // <li>{user.id}, {user.name}, {user.email}</li> // key 없으면 console창에 에러 있음
                <li key={user.id}>{user.id}, {user.name}, {user.email}</li>
            ))}
        </ul>

        {/* {users.map((user)=>{
            return(
            <ul>
                <li>{user.name}</li>
            </ul>
            )
        })} */}
        </>
    );
};

export default UserList;
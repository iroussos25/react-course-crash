import { useEffect, useState } from "react";
import axios from "axios";
import User from "../Components/user.jsx";

function Home() {
    const [users,  setUsers] = useState([])
    async function fetchUsers() {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data);
    }
    
    useEffect(() => {
        setTimeout(() => {
            
            fetchUsers();
        }, 500);
    }, []);

const pixels = "3px";

    return (
     <div>

        {users.map((user)=> {
        <User id={user.id} name={user.name} email={user.email} username={user.username}/>
      })}
      </div>
    )
    }

export default Home;
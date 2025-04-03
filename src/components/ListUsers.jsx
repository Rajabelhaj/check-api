import React, { useEffect, useState } from 'react';
import CardUser from './CardUser';
import axios from 'axios';
import "./style.css";
const ListUsers = () => {
    //héberger mon tableau(api)
    const [users, setUsers] = useState([]);
    //useeffect me permet de consommer mon api une fois le component:listusers est appelé(render)
   
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error));
    },[]);
    console.log(users);
     
    
  return (
    <div className="Liste"> 
        {users.map((user) => (
            <CardUser user={user} key={user.id} />))}
    </div>
  );
};

export default ListUsers;
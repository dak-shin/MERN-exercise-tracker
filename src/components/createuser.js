import React from 'react';
import {useState} from 'react'
import axios from 'axios';

const CreateUser = () => {
    
    const [user, setUser] = useState({
        username:''
    });

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setUser({...user, [name]:value});

    }

    const handleSubmit = (event) =>{
       
        event.preventDefault();
        // console.log(user);
        axios.post('http://localhost:5000/users/add',user)
        .then((res) => {
            console.log(res.data);
            
        })

        setUser({username:''});
    }

    return(

        <div className="form">
            <form action="/">
                <div className="form-group">
                    <label htmlFor="username">Username : </label>
                    <input 
                    type="text" 
                    name="username"
                    id="username"
                    value={user.username}
                    onChange={handleChange} />
                </div>

                <br/>
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
                <br/>
            </form>
        </div>

    );
};

export default CreateUser;
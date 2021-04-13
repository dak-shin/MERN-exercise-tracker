import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';

const CreateExercise = () => {
    
    const [exercise, setExercise] = useState({
        username:'',
        description:'',
        duration:0,
        date: ''
    });

    const [users, setUsers] = useState([]);

    const handleChange = (event) => {

        const name = event.target.name;
        var value = event.target.value;

        if(name === 'date'){
            value = value.toString()
        }

        setExercise({...exercise, [name]:value});

    }

    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .then((res)=>{
            
            if(res.data.length > 0 ){
                const temp = res.data.map(user => {
                    return user.username
                })
                setUsers(temp);
                // console.log(temp);
            }
            else{
                console.log('No Users');
            }
        })
        console.log(users);
        return () => {

        }
    }, []);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add',exercise)
        .then((res) => {
            console.log(res.data);
            
        })

        setExercise({
            username:'',
            description:'',
            duration:0,
            date: new Date().getDate().toString()
        });

    }

    return(

        <div className="form">
            <form action="/">
                <div className="form-group">
                    <label htmlFor="username">Username : </label>
                    {/* <input 
                    type="text" 
                    name="username"
                    id="username"
                    value={exercise.username}
                    onChange={handleChange} /> */}
                    <select name="username" id="username" value={exercise.username} onChange={handleChange} >
                        {users.map(user =>{
                            return (
                                <option value={user}>{user}</option>
                            );
                        })}
                    </select>
                </div>

                <br/>

                <div className="form-group">
                    <label htmlFor="description">Description : </label>
                    <input 
                    type="text" 
                    name="description"
                    id="description"
                    value={exercise.description}
                    onChange={handleChange} />
                </div>

                <br/>

                <div className="form-group">
                    <label htmlFor="duration">Duration : </label>
                    <input 
                    type="number" 
                    name="duration"
                    id="duration"
                    value={exercise.duration}
                    onChange={handleChange} />
                </div>

                <br/>

                <div className="form-group">
                    <label htmlFor="date">Date : </label>
                    <input 
                    type="date" 
                    name="date"
                    id="date"
                    value={exercise.date}
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

export default CreateExercise;
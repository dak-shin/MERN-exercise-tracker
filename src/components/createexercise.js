import React from 'react';
import {useState} from 'react'
const CreateExercise = () => {
    
    const [exercise, setExercise] = useState({
        username:'',
        description:'',
        duration:0,
        date: ''
    });

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setExercise({...exercise, [name]:value});

    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(exercise);
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
                    <input 
                    type="text" 
                    name="username"
                    id="username"
                    value={exercise.username}
                    onChange={handleChange} />
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
            </form>
        </div>

    );
};

export default CreateExercise;
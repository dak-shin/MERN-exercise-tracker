import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {MAIN_URL} from './url.js';

const EditExercise = () => {
    const obj = useParams();
    console.log(obj.id);

    const [newEx, setnewEx] = useState({});

    useEffect(() => {
        
        axios.get(`${MAIN_URL}/exercises/${obj.id}`)
        .then((res)=>{
            if(res.data)
            // console.log(res.data);
            {

                const temp = res.data;
                setnewEx(temp);
                console.log(temp);
            }
            else {
                console.log('No Exercises')
            }
                
        })
        // console.log('Inside useEffect');
        return () => {

        }

    },[]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setnewEx({...newEx, [name]:value});

    };

    const handleSubmit = () => {
        axios.post(`${MAIN_URL}/exercises/update/${obj.id}`, newEx)
        .then((res) => {
            console.log(res.data);
        })
    };

    return(

        <div className="form">
            <form action="/">
                <div className="form-group">
                    <label htmlFor="username">Username : </label>
                    <select name="username" id="username"  onChange={handleChange} autoComplete='off' >
                        <option value={newEx.username}>{newEx.username}</option>
                    </select>
                </div>

                <br/>

                <div className="form-group">
                    <label htmlFor="description">Description : </label>
                    <input 
                    type="text" 
                    name="description"
                    id="description"
                    value={newEx.description}
                    onChange={handleChange} />
                </div>

                <br/>

                <div className="form-group">
                    <label htmlFor="duration">Duration : </label>
                    <input 
                    type="number" 
                    name="duration"
                    id="duration"
                    value={newEx.duration}
                    onChange={handleChange} />
                </div>

                <br/>

                <div className="form-group">
                    <label htmlFor="date">Date : </label>
                    <input 
                    type="date" 
                    name="date"
                    id="date"
                    value={newEx.date}
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

export default EditExercise;
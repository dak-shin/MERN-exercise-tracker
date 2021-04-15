import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {MAIN_URL} from './url.js';

const ExerciseList = () => {

    const [newExercises, setnewExercise] = useState([])
    useEffect(() => {
        
        axios.get(`${MAIN_URL}/exercises`)
        .then((res)=>{
            
            if(res.data.length > 0 ){
                // console.log(res.data);
                const temp = res.data;
                setnewExercise(temp);
                console.log(temp);
            }
            else{
                console.log('No Exercerises');
            }
        })
        // console.log('Inside useEffect');
        return () => {

        }

    },[]);

    

    const deleteExercise = (id) => {
        axios.delete(`${MAIN_URL}/exercises/${id}`)
        .then(res =>{console.log(res.data)});
        window.location.reload();
        
    };

    const renderExerciseTableRow = (exerciseobj) => {
        // console.log(exerciseobj);
        return (
            <tr>
                <td>{exerciseobj.username}</td>
                <td>{exerciseobj.description}</td>
                <td>{exerciseobj.duration}</td>
                <td>{exerciseobj.date}</td>
                <td>
                    <button type="button" >
                        <Link to={'/edit/'+exerciseobj._id} style={{textDecoration:'none',color: 'white', backgroundColor:'rgb(80, 112, 255)'}}>
                            Edit
                        </Link>
                    </button>
                    
                    <button type="button"  onClick={() => {deleteExercise(exerciseobj._id)}}> Delete</button>
                    
                </td>
            </tr>
        );
    };
        
    return(
        <div className="list">

            <table>
                <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                {newExercises.map(ex => {return renderExerciseTableRow(ex)})}
            </table>

        </div>
    );
};

export default ExerciseList;
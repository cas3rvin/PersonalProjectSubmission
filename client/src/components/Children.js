import React, {useEffect, useState} from 'react';
import {useNavigate, Link, useParams} from "react-router-dom";
import axios from "axios";




const Children = (_props)=>{

    const {id} = useParams();
    const navigate = useNavigate({});
    const [Children, setChildren] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/children/${id}`)
            .then((res)=>{
                console.log(res.data);
                setChildren(res.data);
            })
            .catch((err)=> {
                console.log(err);
            });
    },[id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/children/${id}`)
            .then((res) => {

                console.log(res);
                console.log(res.data);

                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return( 
        <div className="Children-component">
            <Link to="/">Go Back Home</Link>
            <h2>Child Name: {Children.name}</h2>
            <h2>Child's Age: {Children.age}</h2> 
            <h2>Hobbies: {Children.hobbies}</h2> 
            <h2>Intake Date: {Children.date}</h2>
            <h2>Room Number: {Children.room}</h2>
            <button onClick={deleteHandler}>Delete</button>
            <Link to={`/edit/${Children._id}`}>
            <button className="btn btn-primary">Edit</button>
            </Link> <br /> <br /> <br />

            

            <h1>Activity Log</h1>



            
            <div className="container">
        <div className="row">
            <div className="col-8">
            <p className="purple-text">Children Activity Log</p>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Child Name</th>
                <th scope="col">Child Age</th>
                <th scope="col">Hobbies?</th>
                <th scope="col">Intake Date</th>
                <th scope="col">Room Number</th>
                <th scope="col">Actions Available</th>
                </tr>
            </thead>

            </table>
            <Link to="/add">Add a child?</Link>
            </div>
        </div>
    </div>
            {/* <tbody>
                {allChildren.map((children, _index) => {
                return (
                    <tr key={Children._id}>
                    <td>
                        <Link to={`/children/${children._id}`}>
                        {children.name}
                        </Link>
                    </td>

                    <td>
                        {Children.age}
                    </td>
                    
                    <td>
                        {Children.hobbies}
                    </td>

                    <td>
                        {Children.date}
                    </td>

                    <td>
                        {Children.room}
                    </td>

                    <td>
                        <Link to={`/edit/${children._id}`}>
                        <button className="btn btn-primary">Edit</button>
                        </Link>

                        <button
                        onClick={() => handleDeleteChildren(children._id)}
                        className="btn btn-danger"
                        >
                        Delete
                        </button>
                    </td>
                    
                    </tr>
                );
                })}
            </tbody>
            </table>
            <Link to="/add">Add a child?</Link>
            </div>
        </div>
    </div>
    ); */}


        </div>
        
        


    );

};

export default Children;
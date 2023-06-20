import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";




const Children = (_props)=>{

    const {id} = useParams();
    // const navigate = useNavigate({});
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

    // const deleteHandler = () => {
    //     axios.delete(`http://localhost:8000/api/children/${id}`)
    //         .then((res) => {

    //             console.log(res);
    //             console.log(res.data);

    //             navigate("/");
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };


    return( 
        <div className="Children-component">
            <Link to="/">Go Back Home</Link> <br /> <br /> <br />
            
            <h2>Name: {Children.name}</h2>
            <h2>Date of Birth: {Children.birthdate}</h2>
            <h2>Age: {Children.age}</h2> 
            {/* <h2>Hobbies: {Children.hobbies}</h2>  */}
            <h2>Intake Date: {Children.date}</h2>
            <h2>Room Number: {Children.room}</h2>
            <br /> 
            {/* <button onClick={deleteHandler}>Delete</button> */}
            <Link to={`/edit/${Children._id}`}>
            <button className="btn btn-primary">Edit</button>
            </Link> <br /> <br /> <br />

            

            <h1>Profile</h1>

            {/* <Link to="/addActivity">Add an activity?</Link> <br /> <br /> */}

            
            <div className="container">
        <div className="row">
            <div className="col-8">
            <p className="purple-text"></p>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Country of Birth</th>

                <th scope="col">Favorite Music Genre/Artist</th>

                <th scope="col">Hobbies</th>

                <th scope="col">Favorite Sport Activity</th>

                <th scope="col">Favorite Foods</th>

                <th scope="col">Favorite Movies/TvShows</th>

                </tr>
                
            </thead>




            {/* </table>
            // <Link to="/addActivity">Add an activity?</Link>
            </div>
        </div>
    </div> */}

            <tbody>
                {/* {allChildren.map((children, _index) => {
                return ( */}
                    <tr key={Children._id}>
                    {/* <td>
                        <Link to={`/children/${children._id}`}>
                        {children.name}
                        </Link>
                    </td> */}

                    <td>
                        {Children.country}
                    </td>
                    
                    <td>
                        {Children.music}
                    </td>

                    <td>
                        {Children.hobbies}
                    </td>

                    <td>
                        {Children.sport}
                    </td>

                    <td>
                        {Children.food}
                    </td>
                    <td>
                        {Children.tv}
                    </td>

                    {/* <td>
                        <Link to={`/edit/${children._id}`}>
                        <button className="btn btn-primary">Edit</button>
                        </Link>

                        <button
                        onClick={() => handleDeleteChildren(children._id)}
                        className="btn btn-danger"
                        >
                        Delete
                        </button>
                    </td> */}
                    
                    </tr>
                
                
            </tbody>
            </table>
            {/* <Link to="/add">Add a child?</Link> */}
            </div>
        </div>
    </div>
    




        </div>
        
        


    );

};

export default Children;
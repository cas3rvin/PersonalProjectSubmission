import { useEffect, useState } from "react";

import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
const DisplayAll = () => {
    const [allChildren, setAllChildren] = useState([]);
    useEffect(() => {
    axios
        .get("http://localhost:8000/api/children")
        .then((response) => {
            console.log(response.data);
            setAllChildren(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);

    const handleDeleteChildren = (idFromBelow) => {
        axios
        .delete(`http://localhost:8000/api/children/${idFromBelow}`)
        .then((response) => {
        console.log("success deleting child");
        console.log(response);
        const filteredChildren = allChildren.filter((children) => {
            return children._id !== idFromBelow;
        });
        setAllChildren(filteredChildren);
        })
        .catch((err) => {
        console.log("error deleting child", err.response);
        });
    };
    return (
    <div className="container">
        <div className="row">
            <div className="col-8">
            <p className="purple-text">Children in program!</p>
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
            <tbody>
                {allChildren.map((children, _index) => {
                return (
                    <tr key={children._id}>
                    <td>
                        <Link to={`/children/${children._id}`}>
                        {children.name}
                        </Link>
                    </td>

                    <td>
                        {children.age}
                    </td>
                    
                    <td>
                        {children.hobbies}
                    </td>

                    <td>
                        {children.date}
                    </td>

                    <td>
                        {children.room}
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
    );
};

export default DisplayAll;




// {


            
//     storeList.map((store, index) => (
//         <div key={index}>

//             <Link to={`/store/${store._id}`}>{store.title}</Link>

//             <br />

//             <button onClick={() => navigate(`/store/edit/${store._id}`)}>
//                 Edit
//             </button>


//             <button onClick={() => deleteFilter(store._id)}>
//                 Delete
//             </button>
//         </div>
//     ))

// }
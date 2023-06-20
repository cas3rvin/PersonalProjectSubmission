import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChildrenForm = () => {
    // const { id } = useParams();
    const [name, setChildrenName] = useState("");
    const [age, setChildrenAge] = useState(""); 
    const [hobbies, setChildrenHobbies] = useState(""); 
    const [date, setChildrenDate] = useState("");
    const [room, setChildrenRoom] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/children", { 
            name,
            age, 
            hobbies,
            date,
            room,
        })
        .then((response) => {
            console.log(response);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };
    return (
        <div className="container">
            <Link to="/">Go Back Home</Link>
        <div className="row">
        <div className="col-4">
            
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <p className="purple-text">Add a new child!</p>

                <label htmlFor="name">Child's Name</label>
                <input
                type="text"
                className="form-control"
                onChange={(e) => setChildrenName(e.target.value)}
                value={name}
                />
                {errors.name ? <p>{errors.name.message}</p> : null}
            </div>
            </form>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <p className="purple-text"></p>

                <label htmlFor="age">Child's Age</label>
                <input
                type="number"
                className="form-control"
                onChange={(e) => setChildrenAge(e.target.value)}
                value={age}
                />
                {errors.age ? <p>{errors.age.message}</p> : null}
            </div>
            </form>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <p className="purple-text"></p>

                <label htmlFor="hobbies">Hobbies?</label>
                <input
                type="text"
                id="hobbies"
                value={hobbies}
                onChange={(e) => setChildrenHobbies(e.target.value)}   
                />
                {errors.hobbies ? <p>{errors.hobbies.message}</p> : null}
            </div>
            </form>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <p className="purple-text"></p>

                <label htmlFor="date">Intake Date</label>
                <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setChildrenDate(e.target.value)}   
                />
                {errors.date ? <p>{errors.date.message}</p> : null}
            </div>
            </form>


            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <p className="purple-text"></p>

                <label htmlFor="room">Room Number</label>
                <input
                type="room"
                id="room"
                value={room}
                onChange={(e) => setChildrenRoom(e.target.value)}   
                />
                {errors.room ? <p>{errors.room.message}</p> : null}
            
            
            
            </div>

            <br />






            <button className="btn btn-primary" type="submit" >
                SUBMIT
            </button>
            </form>
        </div>
        </div>
    </div>
    );
};

export default ChildrenForm;





// return (
//     <div className="container">
//         <div className="row">
//             <div className="col-8">
//             <p className="purple-text">Find stores in your area!</p>
//             <table className="table">
//             <thead>
//                 <tr>
//                 <th scope="col">Store</th>
//                 <th scope="col">Actions Available</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {allStores.map((store, index) => {
//                 return (
//                     <tr key={store._id}>
//                     <td>
//                         <Link to={`/store/${store._id}`}>
//                         {store.name}
//                         </Link>
//                     </td>
                    
//                     <td>
//                         <Link to={`/edit/${store._id}`}>
//                         <button className="btn btn-primary">Edit</button>
//                         </Link>

//                         <button
//                         onClick={() => handleDeleteStores(store._id)}
//                         className="btn btn-danger"
//                         >
//                         Delete
//                         </button>
//                     </td>
                    
//                     </tr>
//                 );
//                 })}
//             </tbody>
//             </table>
//             <Link to="/add">Can't find your store?</Link>
//             </div>
//         </div>
//     </div>
//     );
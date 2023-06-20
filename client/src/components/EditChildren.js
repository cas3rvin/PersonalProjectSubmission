import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const EditChildren = (props) => {
    const { id } = useParams();
    const [childrenName, setChildrenName] = useState("");
    const [childrenAge, setChildrenAge] = useState("");
    const [childrenHobbies, setChildrenHobbies] = useState("");
    const [childrenDate, setChildrenDate] = useState("");
    const [childrenRoom, setChildrenRoom] = useState("");

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [childrenNotFoundError, setChildrenNotFoundError] = useState("");
        console.log(id);
        useEffect(() => {
        axios
        .get(`http://localhost:8000/api/children/${id}`)
        .then((response) => {
        console.log(response.data);
        setChildrenName(response.data.name);
        setChildrenAge(response.data.age);
        setChildrenHobbies(response.data.hobbies);
        setChildrenDate(response.data.date);
        setChildrenRoom(response.data.room);
        })
        .catch((err) => {
        console.log(err.response);
        setChildrenNotFoundError(`Child not found using that ID`);
        });
    }, [id]);

    const submitHandler = (e) => {
    e.preventDefault();

        axios
        .put(`http://localhost:8000/api/children/${id}`, { 
            name: childrenName,
            age: childrenAge,
            hobbies: childrenHobbies,
            date: childrenDate,
            room: childrenRoom,
        })
        .then((response) => {
        console.log(response);
        console.log(response.data);
        navigate("/");
        })
        .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
        });
    };
    return (
        <form onSubmit={submitHandler}>
            {childrenNotFoundError ? (
        <h2>
            {childrenNotFoundError} <Link to="/add">Click here to add a child</Link>
        </h2>
        ) : null}
        <Link to="/">Go Back Home</Link>
        <div className="form-group">
        <label htmlFor="name">Child Name</label>
        <input
            type="text"
            id="name"
            value={childrenName}
            onChange={(e) => setChildrenName(e.target.value)}

            
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
        </div>

        <div className="form-group">
        <label htmlFor="age">Child Age</label>
        <input
            type="age"
            id="age"
            value={childrenAge}
            onChange={(e) => setChildrenAge(e.target.value)}

            
        />
        {errors.age ? <p>{errors.age.message}</p> : null}
        </div>

        <div className="form-group">
        <label htmlFor="hobbies">Hobbies?</label>
        <input
            type="hobbies"
            id="hobbies"
            value={childrenHobbies}
            onChange={(e) => setChildrenHobbies(e.target.value)}   
        />

        </div>


        <div className="form-group">
        <label htmlFor="date">Intake Date</label>
        <input
            type="date"
            id="date"
            value={childrenDate}
            onChange={(e) => setChildrenDate(e.target.value)}   
        />

        </div>


        <div className="form-group">
        <label htmlFor="room">Room number</label>
        <input
            type="room"
            id="room"
            value={childrenRoom}
            onChange={(e) => setChildrenRoom(e.target.value)}   
        />

        </div>

        <button type="submit" className="btn btn-primary">
        SUBMIT
        </button>
    </form>
    );
};

export default EditChildren;



import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const EditChildren = (props) => {
    const { id } = useParams();
    const [childrenName, setChildrenName] = useState("");
    const [childrenBirthdate, setChildrenBirthdate] = useState("");
    const [childrenAge, setChildrenAge] = useState("");
    const [childrenDate, setChildrenDate] = useState("");
    const [childrenRoom, setChildrenRoom] = useState("");
    const [childrenCountry, setChildrenCountry] = useState("");
    const [childrenHobbies, setChildrenHobbies] = useState("");
    const [childrenMusic, setChildrenMusic] = useState("");
    const [childrenSport, setChildrenSport] = useState("");
    const [childrenFood, setChildrenFood] = useState("");
    const [childrenTv, setChildrenTv] = useState("");

    // const [childrenActivitydate, setChildrenActivitydate] = useState("");

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
        setChildrenBirthdate(response.data.birthdate);
        setChildrenAge(response.data.age);
        setChildrenDate(response.data.date);
        setChildrenRoom(response.data.room);
        setChildrenCountry(response.data.country);
        setChildrenHobbies(response.data.hobbies);
        setChildrenMusic(response.data.music);
        setChildrenSport(response.data.sport);
        setChildrenFood(response.data.food);
        setChildrenTv(response.data.tv);

        // setChildrenActivitydate(response.data.activitydate);
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
            birthdate: childrenBirthdate,
            age: childrenAge,
            date: childrenDate,
            room: childrenRoom,
            country: childrenCountry,
            hobbies: childrenHobbies,
            music: childrenMusic,
            sport: childrenSport,
            food: childrenFood,
            tv: childrenTv,


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
        <Link to="/">Go Back Home</Link> <br /> <br /> <br /> <br />


        <div className="form-group">
        <label htmlFor="name">Child Full Name</label>
        <input
            type="text"
            id="name"
            value={childrenName}
            onChange={(e) => setChildrenName(e.target.value)}

            
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
        </div>

        <div className="form-group">
        <label htmlFor="birthdate">Child's Date of Birth</label>
        <input
            type="date"
            id="birthdate"
            value={childrenBirthdate}
            onChange={(e) => setChildrenBirthdate(e.target.value)}

            
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
        </div>


        <div className="form-group">
        <label htmlFor="age">Child's Age</label>
        <input
            type="age"
            id="age"
            value={childrenAge}
            onChange={(e) => setChildrenAge(e.target.value)}

            
        />
        {errors.age ? <p>{errors.age.message}</p> : null}
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


        <div className="form-group">
        <label htmlFor="country">Country</label>
        <input
            type="country"
            id="country"
            value={childrenCountry}
            onChange={(e) => setChildrenCountry(e.target.value)}   
        />

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
        <label htmlFor="music">Favorite Music Genre/Artist</label>
        <input
            type="music"
            id="music"
            value={childrenMusic}
            onChange={(e) => setChildrenMusic(e.target.value)}   
        />
        </div>


        <div className="form-group">
        <label htmlFor="sport">Favorite Sport Activity</label>
        <input
            type="sport"
            id="sport"
            value={childrenSport}
            onChange={(e) => setChildrenSport(e.target.value)}   
        />

        </div>

        <div className="form-group">
        <label htmlFor="food">Favorite Food</label>
        <input
            type="food"
            id="food"
            value={childrenFood}
            onChange={(e) => setChildrenFood(e.target.value)}   
        />

        </div>

        <div className="form-group">
        <label htmlFor="tv">Favorite Movies/TV Show</label>
        <input
            type="tv"
            id="tv"
            value={childrenTv}
            onChange={(e) => setChildrenTv(e.target.value)}   
        />
        </div>



        <button type="submit" className="btn btn-primary">
        SUBMIT
        </button>
    </form>
    );
};

export default EditChildren;



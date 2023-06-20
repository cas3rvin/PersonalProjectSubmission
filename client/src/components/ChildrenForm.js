import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChildrenForm = () => {
    // const { id } = useParams();
    const [name, setChildrenName] = useState("");
    const [birthdate, setChildrenBirthdate] = useState("");
    const [age, setChildrenAge] = useState(""); 
    const [date, setChildrenDate] = useState("");
    const [room, setChildrenRoom] = useState("");
    const [country, setChildrenCountry] = useState("");
    const [hobbies, setChildrenHobbies] = useState(""); 
    const [music, setChildrenMusic] = useState("");
    const [sport, setChildrenSport] = useState("");
    const [food, setChildrenFood] = useState(""); 
    const [tv, setChildrenTv] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/children", { 
            name,
            birthdate,
            age, 
            date,
            room,
            country,
            hobbies,
            music,
            sport,
            food,
            tv,
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
                <h2 className="purple-text">Add a new child</h2>

                <label htmlFor="name">Child's Full Name</label>
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

                <label htmlFor="birthdate">Date of Birth</label>
                <input
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setChildrenBirthdate(e.target.value)}   
                />
                {errors.birthdate ? <p>{errors.birthdate.message}</p> : null}
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
            </form>


            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <p className="purple-text"></p>

                <label htmlFor="country">Country of Origin</label>
                <input
                type="country"
                id="country"
                value={country}
                onChange={(e) => setChildrenCountry(e.target.value)}   
                />
                {errors.country ? <p>{errors.country.message}</p> : null}

            </div>
            </form>


            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <p className="purple-text"></p>

                <label htmlFor="hobbies">Hobbies?</label>
                <input
                type="hobbies"
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
                
                <label htmlFor="music">Favorite Music Genre/Artist</label>
                <input
                type="music"
                id="music"
                value={music}
                onChange={(e) => setChildrenMusic(e.target.value)}   
                />
                {errors.music ? <p>{errors.music.message}</p> : null}

            </div>
            </form>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <p className="purple-text"></p>

                <label htmlFor="sport">Favorite Sport Activity</label>
                <input
                type="sport"
                id="sport"
                value={sport}
                onChange={(e) => setChildrenSport(e.target.value)}   
                />
                {errors.sport ? <p>{errors.sport.message}</p> : null}

            </div>
            </form>


            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <p className="purple-text"></p>

                <label htmlFor="food">Favorite Food</label>
                <input
                type="food"
                id="food"
                value={food}
                onChange={(e) => setChildrenFood(e.target.value)}   
                />
                {errors.food ? <p>{errors.food.message}</p> : null}
            </div>
            </form>

                <form onSubmit={handleSubmit}>
                <div className="form-group">
                <p className="purple-text"></p>
                
                <label htmlFor="tv">Favorite Movies/TV Shows</label>
                <input
                type="tv"
                id="tv"
                value={tv}
                onChange={(e) => setChildrenTv(e.target.value)}   
                />
                {errors.tv ? <p>{errors.tv.message}</p> : null}

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
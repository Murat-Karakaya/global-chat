import { useDispatch } from "react-redux";
import { userActions } from "../../features/red-source";
import { useState } from "react";
import "./SignIn&Register.css";

const Register = ({setRoute}) => {
    const dispatch = useDispatch()
    const [credentials, setCredentials] = useState({name: "",  password: ""})
    const [information, setInformation] = useState({message: "", color: "black"})
    let [loading, setLoading] = useState(false);

    const setUser = (user) => {
        if (!user.name || !user.password) {
            setInformation({message: "Username and password are required", color: "rgb(130, 0, 0)"})
            return;
        }
        if (user.name.length > 30) {
            setInformation({message: "Keep the username under 30 characters", color: "rgb(130, 0, 0)"})
            return;
        }
        setLoading(true)
        setInformation({message: "Processing, please wait", color: "black"})
        fetch("http://localhost:1234/register", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: user.name,
                password: user.password
            })
        })
        .then(response => response.json())
        .then((data) => {
            if (data.id) {
                const userInfo = {username: data.name, id: data.id}
                dispatch(userActions.setUser(userInfo))
                setLoading(false);
                setInformation({message: "", color: "black"})
                setRoute("home page")
                return;
            }
            setLoading(false);
            setInformation({message: "That username allready exists", color: "rgb(130, 0, 0)"})
        })
        .catch(err => {
            setLoading(false);
            setInformation({message: "That username allready exists", color: "rgb(130, 0, 0)"})
        })
    }

    return(
        <div className="form-container">
        <div className="blurry-form grid-form">

            <p className="form-p">name:</p>
            <input
             onChange={(e) => setCredentials({...credentials, name: e.target.value})} 
             type="text" 
             className="form-input" 
            />

            <p className="form-p">password:</p>
            <input
             onChange={(e) => setCredentials({...credentials, password: e.target.value})}
             type="password" 
             className="form-input" 
            />

            <button
             onClick={() => setUser(credentials)}
             className="submit-button"
            >Register</button>
            <div style={{display: "flex", justifyContent: "center", marginTop: "15px"}}>
                <div style={{display: loading ? "block" : "none"}} className="loading-blue"></div>
                <p className="form-p" style={{color: information.color, marginTop: 0}}>{information.message}</p>
            </div>
        </div>
        </div>
    )
}

export default Register;
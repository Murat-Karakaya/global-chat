import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { messageActions } from "../../features/red-source";
import "./StartUp.css"

const StartUp = ({setRoute}) => {
    const dispatch = useDispatch()

    useEffect(()=>{
        fetch("http://localhost:1234/")
            .then(response => response.json())
            .then((data) => {
                dispatch(messageActions.setMessages(data))
            })
            .catch(err => console.error("failed to fetch"))
    }, [])
        

    return(
        <div id="startup-container">
        <div id="startup" className="blurry-form">
            <h1 className="startup-title">Global Chat</h1>
            <p className="startup-p">  Global Chat is a non-profit platform where you can post questions for everyone to see. Don't hesitate to lend a helping hand or ask for assistance when you're feeling stuck. <br/><br/>
            This project is open to all, so if you're interested in seeing it grow, you can check out <a href="#" target="_blank">this website's GitHub repository</a>.
            <br/><br/> Also, you can go to this page to see <a href="https://github.com/Murat-Karakaya" target="_blank">my github account</a>.</p>
            <button
             onClick={() => setRoute("sign in")}
             className="startup-button"
            >Sign In</button>
            <button
             onClick={() => setRoute("register")}
             className="startup-button"
            >Register</button>
        </div>
        </div>
    )
}

export default StartUp;
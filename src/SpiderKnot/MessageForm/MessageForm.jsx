import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { messageActions} from "../../features/red-source";
import "./MessageForm.css"

const MessageForm = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)

    const [messageInput, setMessageInput] = useState("");

    const addMessage = () => {
        fetch("https://global-chat-api.onrender.com/messages", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                publisher: user.username,
                text: messageInput,
                id: user.id
            })
        })
        .then(response => response.json())
        .catch(err => console.log(err))
        dispatch(messageActions.addMessage({text: messageInput, publisher: user.username}))
        setMessageInput("")
    }

    return (
    <div className="blackish-form very-bottom">
        <textarea
         value={messageInput} 
         onChange={(e) => setMessageInput(e.target.value)}
         placeholder="Send a message!" rows="3">
        </textarea>

        <button onClick={() => addMessage()} className="send-button">
            <img src="/send.svg" height={35} width={"auto"}/>
        </button>
    </div>
    )
}

export default MessageForm;
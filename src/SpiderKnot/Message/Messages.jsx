import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Messages.css"
import { useEffect, useRef } from "react";
import { messageActions } from "../../features/red-source";

const Message = ({text, publisher}) => {
    const currentUser = useSelector((state) => state.user.username)

    const trimming = (str) => {
        if (str.length > 15) {
            return str.slice(0, 13) + "...";
        }
        return str;
    }


    const trimmedName= trimming(publisher)
    const isMadeByUser = currentUser === publisher

    return(
        <div style={{display: "flex", justifyContent: isMadeByUser ? "flex-end" : "flex-start"}}>
        <div
         style={{borderRadius: isMadeByUser ? "1em 0 1em 1em" :"0 1em 1em 1em"}}
         className="message-container">
            <p className="publisher">{trimmedName}</p>
            <pre className="pre-message">{text}</pre>        
        </div>
        </div>
    )
}

const Messages = () => {
    const dispatch = useDispatch()
    let messageList = useSelector((state) => state.messages)
    const scrollableDivRef = useRef();

    useEffect(() => {
        const scrollableDiv = scrollableDivRef.current;
        if (scrollableDiv) {
            scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
        }
    })

    const reloadMessages = () => {
        fetch("https://global-chat-api.onrender.com")
            .then(response => response.json())
            .then((data) => {
                dispatch(messageActions.setMessages(data))
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="scrollable-div-container">
            <button onClick={() => reloadMessages()} className="reload-button">
                reload
                messages
            </button>
            <div ref={scrollableDivRef} className="scrollable-div">
                {messageList.map((message, id) => <Message key={id} text={message.text} publisher={message.publisher}/>)}
            </div>
        </div>
    )
}

export default Messages;
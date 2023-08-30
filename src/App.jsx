import { useState } from 'react';
import Navigation from './SpiderKnot/Navigation/Navigation';
import MessageForm from './SpiderKnot/MessageForm/MessageForm';
import Messages from './SpiderKnot/Message/Messages';
import SignIn from './SpiderKnot/SignIn&Register/SignIn';
import Register from './SpiderKnot/SignIn&Register/Register';
import StartUp from './SpiderKnot/StartUp/StartUp';
import { messageActions } from './features/red-source';
import { useDispatch } from 'react-redux';
import './App.css';


function App() {
  const [route, setRoute] = useState("start up")
  const dispatch = useDispatch()

  if (route === "home page") {
    return (
      <>
        <Navigation route={route} setRoute={setRoute}/>
        <Messages />
        <MessageForm />
      </>
    )  
  }
  if (route === "sign in") {
    return (
      <>
        <Navigation route={route} setRoute={setRoute}/>
        <SignIn setRoute={setRoute}/>
      </>
    ) 
  }
  if (route === "register") {
    return (
      <>
        <Navigation route={route} setRoute={setRoute}/>
        <Register setRoute={setRoute}/>
      </>
    ) 
  }
  return (
    <StartUp setRoute={setRoute} />
  ) 
  
}

export default App;
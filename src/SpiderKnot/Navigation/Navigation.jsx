import muratLogo from '/Logo.svg'
import "./Navigation.css"


const Navigation = ({route, setRoute}) => {
    if (route === "home page") {
        return(
        <nav className='home-page-selections'>
            <h1>Global Chat</h1>
            <div style={{display: "flex", alignItems:"center"}}>
                <button className='sign-out' onClick={()=>setRoute("sign in")}>sign out</button>    
                <img src={muratLogo} className="logo" alt="global chat" height={50}/>        
            </div>
        </nav>
        )    
    }
    return(
    <nav className='submit-selections'>
        <h1>Super Chat</h1>
        <div>
            <button className='nav-button button-left' style={{backgroundColor: route==="sign in" ? "rgb(105, 0, 255)" : "rgb(80, 0, 200)"}} onClick={()=>setRoute("register")}>register</button>
            <button className='nav-button button-right' style={{backgroundColor: route==="register" ? "rgb(105, 0, 255)" : "rgb(80, 0, 200)"}} onClick={()=>setRoute("sign in")}>sign in</button>
        </div>
        <img src={muratLogo} className="logo" alt="global chat" height={50}/>
    </nav>
    ) 
    
}

export default Navigation;
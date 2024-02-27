/* conditional rendering - allows you to control what gets rendered 
    in your application based on certain conditions
    (show/hide/change components)  */

function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>
    return (props.isLoggedIn ? welcomeMessage : loginPrompt
    );
    
}

export default UserGreeting
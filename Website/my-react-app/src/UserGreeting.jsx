/* conditional rendering - allows you to control what gets rendered 
    in your application based on certain conditions
    (show/hide/change components)  */

function UserGreeting(props){
    return (props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2>
                             : <h2 className="login-prompt">Please log in to continue</h2>
    );
    
}

export default UserGreeting
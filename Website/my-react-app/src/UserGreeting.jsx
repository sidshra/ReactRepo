/* conditional rendering - allows you to control what gets rendered 
    in your application based on certain conditions
    (show/hide/change components)  */

function UserGreeting(props){
    return (props.isLoggedIn ? <h2>Welcome {props.username}</h2>
                             : <h2>Please log in to continue</h2>
    );
    
}

export default UserGreeting
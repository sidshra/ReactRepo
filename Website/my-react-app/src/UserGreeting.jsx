/* conditional rendering - allows you to control what gets rendered 
    in your application based on certain conditions
    (show/hide/change components)  */

function UserGreeting(props){
    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else {
        return <h2>Please log in to continue</h2>
    }
}

export default UserGreeting
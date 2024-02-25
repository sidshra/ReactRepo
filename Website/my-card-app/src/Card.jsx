import profilePic from './assets/developer-woman-1024.png'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile pic" ></img>
            <h2 className="card-title">Dev Girl</h2>
            <p className='card-text'>I am a software developer</p>
        </div>
    );

}

export default Card
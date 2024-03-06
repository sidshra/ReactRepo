import RandomColor from "randomcolor"

    

function Quotes(){

    const quotesList = [
        { id: 1, quotes: "Read a thousand books, and your words will flow like a river.", author: "Lisa See" },
        { id: 2, quotes: "Ideas are cheap.It’s the execution that is all important.", author: "George R.R.Martin" },
        { id: 3, quotes: "Focus more on your desire than on your doubt, and the dream will take care of itself.", author: "Mark Twain" },
        { id: 4, quotes: "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.", author: "William Faulkner" },
        { id: 5, quotes: "You can fix anything but a blank page.", author: "Nora Roberts" }

    ];

    
    const randomIndex = Math.floor(Math.random() * 5)
    
    const colorbg = RandomColor()
    
    const answer = quotesList[randomIndex]; 
    
    
    const newBgColor = {
        backgroundColor: colorbg
    };
    function refreshPage() {
        window.location.reload(false);
    }
    
    return(
        
    <div id="Wrapper" style={newBgColor} >
        
    <div id="quote-box" >
            <h4>{answer.quotes}</h4>
            <p>- {answer.author} </p>
                <span> <a href="https://twitter.com/?lang=en-nz"><img alt="Twitter" src=".\twitter.png"></img></a>
                    <a href="https://www.tumblr.com/login"><img alt="tumblr" src=".\tumblr.png"></img></a>
                
                <button className="new-quote" style={newBgColor} onClick={refreshPage} >New quote</button>
                    </span></div></div>
    
    );
}
    
export default Quotes
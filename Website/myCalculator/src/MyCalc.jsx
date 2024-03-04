

function myCalc(){


    const displayVal= 0;

    const reset = () => {
        displayVal= 0;
    }
    
    return(
    <div>    <main>
        <span><h3 id="display">{displayVal}</h3></span>
        <span><button id="clear" onClick={reset}>AC</button><button id="divide" >/</button><button id="multiply">X</button></span>
        
        <span><button id="seven" value="7">7</button><button id="eight">8</button><button id="nine">9</button><button id="minus">-</button></span>
            <span><button id="four">4</button><button id="five">5</button><button id="six">6</button><button id="plus">+</button></span>
            
            <div className="secdiv"><div><span><button id="one">1</button><button id="two">2</button><button id="three">3</button></span>
                
                <span><button id="zero">0</button><button id="decimal">.</button></span>
            </div>
                <span id="a"><button id="equals">=</button></span></div>
            
        </main>    
        <footer>Designed & Coded By<br />
                        Priya
        </footer>
           

    
    
    </div>

);
}

export default myCalc
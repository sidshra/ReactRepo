function myCalc(){


const displayVal= 0;

return(
    <div><h2>My Calculator</h2>
    <main>
        <span><h3 id="display">0</h3></span>
        <span><button id="clear">AC</button><button id="divide">/</button><button id="multiply">X</button></span>
        
        <span><button id="seven">7</button><button id="eight">8</button><button id="nine">9</button><button id="minus">-</button></span>
            <span><button id="four">4</button><button id="five">5</button><button id="six">6</button><button id="plus">+</button></span>
            <span><span><div id="secdiv"><span><span><button id="one">1</button><button id="two">2</button><button id="three">3</button></span>
                
                <span><button id="zero">0</button><button id="decimal">.</button></span>
            </span></div></span>
            <span><button id="equals">=</button></span></span>
           

    
    </main>
    </div>

);
}

export default myCalc
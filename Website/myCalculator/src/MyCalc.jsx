import React, { useState } from 'react';

function myCalc(){
   
    const [expn, setExpn] = useState(0);
    const [optor,setOptor] = useState('');
    const [fval,setFval] = useState(0)
    
    const [result, setResult] = useState(0);
    const [lent, setLent] = useState(0);


    const handleButtonClick = (value) => {
        //setResult(result + value)
        setLent(result.length);
        if(result === 0){
            
        setResult(value)
        } else{
            setResult(result + value) 
        }
    }

    const handleOperClick = (value) => {
        setFval(result)
        setExpn(value)
        setResult('')
    }

    const handleResult = () => {
        if(expn === "+"){
        setResult(Number(fval) + Number(result));
        } else if(expn === "-") {
            setResult(fval - result);
        } else if(expn === "/"){
            setResult(fval / result);
        } else if(expn === "*"){
            setResult(fval * result)
        }
        setExpn('')
    };

    const reset = () => {
        setResult(0);
    };

    return(
    <div>    <main>
            <div id="display"><h4>{lent}</h4><h1 >{result}</h1></div>
            <span><button id="clear" onClick={reset}>AC</button><button id="divide" onClick={() => handleOperClick('/')} >/</button><button id="multiply" onClick={() => handleOperClick('x')}>x</button></span>
        
            <span><button id="seven" value="7" onClick={() => handleButtonClick('7')}>7</button><button id="eight" onClick={() => handleButtonClick('8')}>8</button><button id="nine" onClick={() => handleButtonClick('9')}>9</button><button id="minus" onClick={() => handleOperClick('-')}>-</button></span>
            <span><button id="four" onClick={() => handleButtonClick('4')}>4</button><button id="five" onClick={() => handleButtonClick('5')}>5</button><button id="six" onClick={() => handleButtonClick('6')}>6</button><button id="plus" onClick={() => handleOperClick('+')}>+</button></span>
            
            <div className="secdiv"><div><span><button id="one" onClick={() => handleButtonClick('1')}>1</button><button id="two" onClick={() => handleButtonClick('2')}>2</button><button id="three" onClick={() => handleButtonClick('3')}>3</button></span>
                
                <span><button id="zero" onClick={() => handleButtonClick('0')}>0</button><button id="decimal" onClick={() => handleButtonClick('.')}>.</button></span>
            </div>
                <span id="a"><button id="equals" onClick={handleResult}>=</button></span></div>
            
        </main>    
        <footer>Designed & Coded By<br />
                        Priya
        </footer>
           

    
    
    </div>

);
}

export default myCalc
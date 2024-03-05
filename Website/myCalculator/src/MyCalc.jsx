import React, { useState } from 'react';

function myCalc(){
    let decVal = false;
    let eqCall = false
    const [expn, setExpn] = useState(0);
    const [optor,setOptor] = useState('');
    const [fval,setFval] = useState(0)
    
    const [result, setResult] = useState(0);
    const [lent, setLent] = useState(0);


    const handleButtonClick = (value) => {
        //setResult(result + value)
        if(eqCall === true){
            setResult('')
            eqCall = false;
        }
        if(value === '.'){
            decVal = true;
        }
        setLent(result.length);
        if(result === 0){
            
        setResult(value)
        } else{
            setResult(result + value) 
        }
        if(optor !== ''){
            setExpn(expn + result.toString())
        }
    }

    const handleOperClick = (value) => {
        setFval(result)
        setExpn(result.toString() + value)
        setOptor(value)
        setResult('')
        decVal=false
    }

    const handleResult = () => {
        if(optor === "+"){
        setResult(Number(fval) + Number(result));
        } else if(optor === "-") {
            setResult(fval - result);
        } else if(optor === "/"){
            setResult(fval / result);
        } else if(opton === "*"){
            setResult(fval * result)
        }
        setOptor('')
        eqCall = true
    };

    const reset = () => {
        setResult(0);
        setExpn('')
    };

    return(
    <div>    <main>
            <div id="display"><h4>{expn}{eqCall}</h4><h1 >{result}</h1></div>
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
import React, { useState } from 'react';

function myCalc(){
    
    const [deci,setDeci] = useState('false')
    const [eqcall, setEqcall] = useState('false');
    
    const [expn, setExpn] = useState('');
    const [optor,setOptor] = useState('');
    const [fval,setFval] = useState(0)
    
    const [result, setResult] = useState(0);
    const [disresult, setDisresult] = useState(0);
    const [lent, setLent] = useState(0);


    const handleButtonClick = (value) => {
        
        if(eqcall === 'true'){
            setResult(value)
            setEqcall('false');
            setExpn('')
        } else {
        
   
        if(result === 0){
            
         setResult(value)
        } else{
            
            setResult(result + value) 
        
        }
    }
        setExpn(expn + value)
        
    }

    const handleOperClick = (value) => {
        setOptor(value)
        if(fval === 0){
        setFval(result)
        } else{
            if (optor === "+") {
                setFval(Number(fval) + Number(result));
            } else if (optor === "-") {
                setFval(Number(fval) - Number(result));
            } else if (optor === "/") {
                setFval(Number(fval) / Number(result));
            } else if (optor === "x") {
                setFval(Number(fval) * Number(result));
            }
            setExpn(expn + value + result) 
        }

        setExpn(expn + value)
        
        setResult('')
        setDeci('false')
    }

    const handleResult = () => {
        let displayResult;
        if(optor === "+"){
            displayResult = Number(fval) + Number(result);
        } else if(optor === "-") {
            displayResult = Number(fval) - Number(result);
        } else if(optor === "/"){
            displayResult = Number(fval) / Number(result);
        } else if(optor === "x"){
            displayResult = Number(fval) * Number(result);
        }
        setResult(displayResult);
        setExpn(expn + '=' + displayResult)
        setOptor('');
        setEqcall('true');
        setFval(0)
                
    };

    const reset = () => {
        setResult(0);
        //setDisresult(0)
        setFval(0);
        setExpn('');
        setEqcall('false');
    };

    return(
    <div>    <main>
            <div id="display"><h4>{expn}</h4><h1 >{result}</h1></div>
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
import React, { useState } from 'react';

function myCalc(){
    const [input0, setInput0] = useState(0);
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [input3, setInput3] = useState(0);
    const [input4, setInput4] = useState(0);
    const [input5, setInput5] = useState(0);
    const [input6, setInput6] = useState(0);
    const [input7, setInput7] = useState(0);
    const [input8, setInput8] = useState(0);
    const [input9, setInput9] = useState(0);
    const [result, setResult] = useState(0);


    const handleButtonClick = (value) => {
        // Check which input to update based on the button clicked
        if (value === 'input1') {
            setInput1(input1 + 1);
            result=input1
        } else if (value === 'input2') {
            setInput2(input2 + 2);
            setResult(input2)
        }
    };
    const displayVal= 0;

    const reset = () => {
        displayVal= 0;
    }
    
    const handleAddition = () => {
        setResult(input1 + input2);
    };
    return(
    <div>    <main>
        <span><h3 id="display">{result}</h3></span>
        <span><button id="clear" onClick={reset}>AC</button><button id="divide" >/</button><button id="multiply">X</button></span>
        
            <span><button id="seven" value="7" onClick={() => handleButtonClick('input7')}>7</button><button id="eight">8</button><button id="nine">9</button><button id="minus">-</button></span>
            <span><button id="four" onClick={() => handleButtonClick('input4')}>4</button><button id="five" onClick={() => handleButtonClick('input5')}>5</button><button id="six" onClick={() => handleButtonClick('input6')}>6</button><button id="plus">+</button></span>
            
            <div className="secdiv"><div><span><button id="one" onClick={() => handleButtonClick('input1')}>1</button><button id="two" onClick={() => handleButtonClick('input2')}>2</button><button id="three" onClick={() => handleButtonClick('input3')}>3</button></span>
                
                <span><button id="zero" onClick={() => handleButtonClick('input0')}>0</button><button id="decimal">.</button></span>
            </div>
                <span id="a"><button id="equals" onClick={handleAddition}>=</button></span></div>
            
        </main>    
        <footer>Designed & Coded By<br />
                        Priya
        </footer>
           

    
    
    </div>

);
}

export default myCalc
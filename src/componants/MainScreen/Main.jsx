// // import {React, useState} from 'react'

// // import './Main.css'
// // import Numbers from '../Buttons/Numbers'
// // import Function from '../Buttons/Function'

// // const Main = () => {

// //   const [inputScreen, setInputScreen] = useState(0)
  
// //   const [answerValue, setAnswerValue] = useState(0)

// //     const onClick = (eve) =>{
// //     let screen = eve.target.value
// //     setInputScreen(screen)
// //   }

// //   const calculator = () =>{
    
// //       let Sum = 5 + 6;
// //       console.log(Sum)
      
// //       setAnswerValue(Sum)
// //   }

// //   const empty = () =>{
// //     setInputScreen(0)
// //     setAnswerValue(0)
// //   }

  

// //   return (
// //     <div className='main-container'>
// //       <div className="screen-display">

// //         <div className="input-display">
// //             <span> {inputScreen} </span>
// //         </div>
// //         <div className="output-display">
// //           <span>{answerValue}</span>
// //         </div>

// //       </div>
// //       <div className="button-section">
// //         <div className="function-btns">
// //             <Function value={'sum'} functionSet={onClick} title={'+'}  />
// //             <Function value={'sub'} functionSet={onClick} title={'-'} />
// //             <Function value={'mul'} functionSet={onClick} title={'*'} />
// //             <Function value={'div'} functionSet={onClick} title={'/'} />
// //         </div>
// //         <div className="number-btns">
// //             <div className="three-btns">
// //                 <Numbers title={9} value={9} onClick={onClick} />
// //                 <Numbers title={8} value={8} onClick={onClick} />
// //                 <Numbers title={7} value={7} onClick={onClick} />
// //             </div>
// //             <div className="three-btns">
// //                 <Numbers title={6} value={6}  />
// //                 <Numbers title={5} value={5}  />
// //                 <Numbers title={4} value={4}  />
// //             </div>
// //             <div className="three-btns">
// //                 <Numbers title={3} value={3}  />
// //                 <Numbers title={2} value={2}  />
// //                 <Numbers title={1} value={1}  />

// //             </div>
// //             <div className="three-btns">
// //             <Numbers title={0} value={0}  />
// //             <Function value={'sum'} functionSet={empty} title={'Clear'} />
// //             <Function value={'sum'} functionSet={calculator} title={'='} />

// //             </div>

// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Main



import React, { useState } from 'react';
import './Main.css';
import Numbers from '../Buttons/Numbers';
import FunctionButton from '../Buttons/Function'; // Renamed Function to avoid conflicts

const Main = () => {
  const [inputScreen, setInputScreen] = useState('');
  const [answerValue, setAnswerValue] = useState(0);

  const handleNumberClick = (value) => {
    setInputScreen((prevInput) => prevInput + value);
  };

  const handleFunctionClick = (value) => {
    switch (value) {
      case '+':
        setInputScreen((prevInput) => prevInput + '+');
        break;
      case '-':
        setInputScreen((prevInput) => prevInput + '-');
        break;
      case '*':
        setInputScreen((prevInput) => prevInput + '*');
        break;
      case '/':
        setInputScreen((prevInput) => prevInput + '/');
        break;
      case '=':
        calculateResult();
        break;
      case 'C':
        clearInput();
        break;
      default:
        break;
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(inputScreen); // Note: eval() can be risky, use cautiously in real applications
      if (result !== undefined) {
        setAnswerValue(result);
      } else {
        setAnswerValue(0);
      }
    } catch (error) {
      setAnswerValue('Error');
    }
  };

  const clearInput = () => {
    setInputScreen('');
    setAnswerValue(0);
  };

  const square = () =>{
    setAnswerValue(inputScreen * inputScreen)
  }
  const deleteValue = () =>{
    setInputScreen(inputScreen.substring(0, inputScreen.length - 1))
    // console.log(inputScreen, typeof inputScreen, typeof answerValue)
    
  }
  const squareRoot = () =>{
    setAnswerValue(Math.sqrt(inputScreen))
    // console.log(typeof answerValue)
  }


  return (
    <div className='main-container'>
      <div className="screen-display">
        <div className="input-display">
          <span>{inputScreen}</span>
        </div>
        <div className="output-display">
          <span>{answerValue}</span>
        </div>
      </div>
      <div className="button-section">
        <div className="function-btns">
            <FunctionButton value={'+'} onClick={handleFunctionClick} title={'+'} />
            <FunctionButton value={'-'} onClick={handleFunctionClick} title={'-'} />
            <FunctionButton value={'*'} onClick={handleFunctionClick} title={'*'} />
            <FunctionButton value={'/'} onClick={handleFunctionClick} title={'/'} />
        </div>
        <div className="number-btns">
          <div className="three-btns">
            <Numbers title={9} onClick={handleNumberClick} />
            <Numbers title={8} onClick={handleNumberClick} />
            <Numbers title={7} onClick={handleNumberClick} />
          </div>
          <div className="three-btns">
            <Numbers title={6} onClick={handleNumberClick} />
            <Numbers title={5} onClick={handleNumberClick} />
            <Numbers title={4} onClick={handleNumberClick} />
          </div>
          <div className="three-btns">
            <Numbers title={3} onClick={handleNumberClick} />
            <Numbers title={2} onClick={handleNumberClick} />
            <Numbers title={1} onClick={handleNumberClick} />
          </div>
          
          <div className="three-btns">
            <Numbers title={'.'} onClick={handleNumberClick} />
            <Numbers title={0} onClick={handleNumberClick} />
            <FunctionButton value={'delete'} onClick={deleteValue} title={'del'} />
            
          </div>

        </div>
        <div className="function-btns">
            <FunctionButton value={'C'} onClick={handleFunctionClick} title={'Clear'} />
            <FunctionButton value={'square'} onClick={square} title={'X^2'} />
            <FunctionButton value={'squareRoot'} onClick={squareRoot} title={'√'} />
            <FunctionButton value={'='} onClick={handleFunctionClick} title={'='} />
            
          </div>
      </div>
    </div>
  );
};

export default Main;

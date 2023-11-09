// import React from 'react'

// const Function = ({title, value, functionSet}) => {
//   return (
//     <div>
//       <button type="button" value={value} onClick={functionSet}>{title}</button>
//     </div>
//   )
// }

// export default Function



import React from 'react';

const FunctionButton = ({ value, onClick, title }) => {
  return (
    <button onClick={() => onClick(value)}>
      {title}
    </button>
  );
};

export default FunctionButton;






// import React from 'react'
// import './Number.css'

// const Numbers = ({title, value, onClick}) => {

  
//   return (
//     <div>
//       <button type="button"  value={value} onClick={onClick}> {title} </button>
//     </div>
//   )
// }

// export default Numbers


import React from 'react';
import './Number.css'

const Numbers = ({ title, onClick }) => {
  return (
    <button onClick={() => onClick(title)}>
      {title}
    </button>
  );
};

export default Numbers;
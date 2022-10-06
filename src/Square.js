import React from 'react';

function Square(props) {
    return (
        <button
          className="square"onClick={() => props.onClick()}
        >
          {props.value}
        </button>
    );
    
//     render() {
//       return (
//         <button
//           className="square"onClick={() => this.props.onClick()}
//         >
//           {this.props.value}
//         </button>
//       );
//     }
   }

  export default Square;
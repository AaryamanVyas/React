// function Btn() {
//     const clickHandler = 
//         () => console.log('clicked')
//     return (
//         <button onClick={clickHandler}>
//             Click Me
//         </button>
//     );
// }

// export default Btn;
import React from 'react';

function Btn() {
    const hoverHandler = () => {
        console.log('mouse over');
    };

    return (
        <button onMouseOver={hoverHandler}>
            Hover Over Me
        </button>
    );
}

export default Btn;
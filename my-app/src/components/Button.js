import { useState } from 'react';

function MyButton({ count, onClick }){
    /*const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }*/

    /*return (
        <button onClick={handleClick}>
            Clicked {count} times!
        </button>
    );*/

    return (
        <button onClick={onClick}>
            Clicked {count} times!
        </button>
    );
}

export default MyButton
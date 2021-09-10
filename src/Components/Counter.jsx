import {useState} from 'react';

const Counter = () => {
    const [steps, setSteps] = useState(0);

    const increment = () => {
        setSteps(prev => prev + 1)

    }
        return(
            <>
                <p>Today you've taken {steps} steps!</p>
                <br/>
                <button onClick={increment}>I took another step </button>
            </>
        );
}
export default Counter;
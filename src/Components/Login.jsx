import {useState} from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const printVals = (e) => {
        e.preventDefault();
        console.log(`${username}, ${password}`);
    }

    return(
        <>
            <form onSubmit= {printVals}>
                <label for="user">Username:</label>
                <input type="text" id="user" onChange={e => setUsername(e.target.value)}></input>
                <br/>
                <label for="pw">Password:</label>
                <input type="password" id="pw" onChange={e => setPassword(e.target.value)}></input>
                <br/>
                <button>Submit</button>
            </form>
        </>
    );
};

export default Login;
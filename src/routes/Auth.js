import userEvent from '@testing-library/user-event';
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    } from 'firebase/auth';
import React, { useState } from 'react';
    

const Auth =() => {
    const [inputs, setInputs] =useState({
        email: '',
        password: '',
    });
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const {email, password} =inputs;

    const onChange = (event) => {
        const {
            name, value
        } =event.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            let data;
            const auth = getAuth();
            if(newAccount){
                data = await createUserWithEmailAndPassword(
                    auth, email, password
                )
            }else {
                data = await signInWithEmailAndPassword(
                    auth,email, password
                )
            }
            console.log(data);
        } catch(error){
            setError(error.message);
        }
        
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);

    return(
    <div>
        <form onSubmit={onSubmit}>
            <input name="email" type="email" placeholder="Email" require value={email} onChange={onChange}/>
            <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
            <input type="submit" value={newAccount ? " Create Account " : "Sign In"} />
            {error}
        </form>
        <span onClick={toggleAccount}>{newAccount ? "Sign In" :"Create Account"}</span>
    </div>
    );
};
export default Auth;
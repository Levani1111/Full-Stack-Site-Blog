import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';



const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }



    return (

        <div id="login-form">
            <h1>Create Account</h1>
            {error && <p className="error">{error}</p>}
            <input
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            <input
                type="password"
                placeholder="Re-enter Your password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} />
            <button onClick={createAccount}>Create Account</button>
            <div className='create-account'><Link to="/login">Already have an account? Log in here</Link></div>
        </div>

    );
}

export default CreateAccountPage;
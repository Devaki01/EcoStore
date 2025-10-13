import React, { useState } from 'react';
import './SignupSigninPage.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const res = await fetch('http://localhost:5001/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.message || 'Signup failed');
            } else {
                setSuccess('Signup successful! You can now sign in.');
                setUsername('');
                setEmail('');
                setPassword('');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        }
    };

    return (
        <div className="signup-signin-bg">
            <div className="signup-signin-card">
                <div className="signup-signin-title">Sign Up</div>
                {error && <div className="signup-signin-error">{error}</div>}
                {success && <div className="signup-signin-success">{success}</div>}
                <form className="signup-signin-form" onSubmit={handleSubmit}>
                    <div className="signup-signin-input-group">
                        <label className="signup-signin-label" htmlFor="username">Username</label>
                        <input
                            className="signup-signin-input"
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="signup-signin-input-group">
                        <label className="signup-signin-label" htmlFor="email">Email</label>
                        <input
                            className="signup-signin-input"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="signup-signin-input-group">
                        <label className="signup-signin-label" htmlFor="password">Password</label>
                        <input
                            className="signup-signin-input"
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="signup-signin-button" type="submit">SIGN UP</button>
                </form>
                <div className="signup-signin-or">Or sign up with</div>
                <div className="signup-signin-socials">
                    <button className="signup-signin-social-btn" type="button">
                        Facebook
                    </button>
                    <button className="signup-signin-social-btn" type="button">
                        Google
                    </button>
                </div>
                <div className="signup-signin-switch-link">
                    Already a member? <a href="/signin">Sign in now</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
import { useState } from "react";
import { attemptLogin } from "../../utils/backendAPI";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [passwordHash, setPasswordHash] = useState("");

    const hashPassword = (password) => {
        return password; // TODO: implement hash function
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const result = attemptLogin(email, hashPassword(passwordHash));
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={(event) => setPasswordHash(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    );
};

export default Login;
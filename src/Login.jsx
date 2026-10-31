import { useState } from "react";

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSignUp && password !== confirmPassword) {
            setMessage("The passwords do not match. Please check and try again.");
            return;
        }

        setMessage(
            isSignUp
                ? `Thanks for signing up, ${name}! This is a demo; no account was created.`
                : `Welcome back, ${email}! This is a demo login; no account was accessed.`
        );
        setPassword("");
        setConfirmPassword("");
    };

    const toggleMode = () => {
        setIsSignUp(!isSignUp);
        setMessage("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <main className="LoginPage">
            <section className="LoginCard">
                <p className="LoginCard__eyebrow">Welcome to Dastarkhwan</p>
                <h1>{isSignUp ? "Join us at the table." : "Good to see you again."}</h1>
                <p className="LoginCard__intro">
                    {isSignUp
                        ? "Create an account to keep your food favourites close."
                        : "Sign in to continue to your food favourites."}
                </p>

                <form className="LoginForm" onSubmit={handleSubmit}>
                    {isSignUp && (
                        <>
                            <label htmlFor="signup-name">Name</label>
                            <input
                                id="signup-name"
                                type="text"
                                autoComplete="name"
                                placeholder="Your name"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                    setMessage("");
                                }}
                                required
                            />
                        </>
                    )}
                    <label htmlFor="login-email">Email address</label>
                    <input
                        id="login-email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                            setMessage("");
                        }}
                        required
                    />

                    <label htmlFor="login-password">Password</label>
                    <input
                        id="login-password"
                        type="password"
                        autoComplete={isSignUp ? "new-password" : "current-password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                            setMessage("");
                        }}
                        minLength="6"
                        required
                    />

                    {isSignUp && (
                        <>
                            <label htmlFor="signup-confirm-password">Confirm password</label>
                            <input
                                id="signup-confirm-password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Enter your password again"
                                value={confirmPassword}
                                onChange={(event) => {
                                    setConfirmPassword(event.target.value);
                                    setMessage("");
                                }}
                                minLength="6"
                                required
                            />
                        </>
                    )}

                    <button className="LoginForm__submit" type="submit">
                        {isSignUp ? "Create account" : "Sign in"}
                    </button>
                </form>

                {message && (
                    <p className="LoginForm__message" role="status">
                        {message}
                    </p>
                )}
                <p className="LoginCard__note">
                    Demo only — credentials are not sent or stored.
                </p>
                <p className="LoginCard__switch">
                    {isSignUp ? "Already have an account?" : "New to Dastarkhwan?"}
                    {" "}
                    <button type="button" onClick={toggleMode}>
                        {isSignUp ? "Sign in" : "Sign up"}
                    </button>
                </p>
            </section>
        </main>
    );
};

export default Login;

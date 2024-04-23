import React, { useState } from "react";
import {Link,  Outlet } from "react-router-dom";

function Login(){
	const [username, setUsername ] = useState('');
	const [password, setPassword] = useState('');	
	const [LoggedIn, setLoggedIn] = useState(false);

	const handleLogin = () =>{
		//Here i am performing Authentication logic
		if(username === 'user' && password === 'password'){
			setLoggedIn(true);
			console.log('LoggedIn in successfully');
		}else{
			alert('Invalid username or password');
		}
	};
	const handleLogout = () => {
		setLoggedIn(false);
		setUsername('');
		setPassword('');
	}
    return(
        <>
        <div>
        {LoggedIn ? (
			<div>
				<h1>Welcome to {username}!</h1>
				<button onClick={handleLogout}></button>
			</div>
		):(
			<div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="User name / Email" />
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
				</div>
				<button className="button login__submit">
					<span className="button__text" onClick={handleLogin} >Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="button login__submit">
				<h3 className="button__text">
					<Link to="/Signup">Signup</Link>
				</h3>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
	<Outlet />
	</div>
		)}
	</div>
        </>
    )
}
export default Login;



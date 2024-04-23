import React, { useState } from "react";

function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
   
    const handleSignup = (e) => {
        e.preventDefault();
        // Here you can add your validation logic
        if (password === confirmPassword) {
            alert("Signup successful");
            // Here you can add code to submit the form data to the server
            console.log("Full Name:", fullName);
            console.log("Email:", email);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);
        } else {
            alert("Passwords do not match");
        }
    };
  
    return (
        <>
            <div className="">
                <div className="d-flex signup">
                    <div className="signup-inner">
                        <form className="signup-form" onSubmit={handleSignup}>
                            <h1 className="text-center">Sign Up</h1>
                            <label>Full Name:</label><br/>
                            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} /><br/>

                            <label>E-mail:</label><br/>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>

                            <label>Password:</label><br/>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>

                            <label>Confirm Password</label><br/>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br/>
                            <button type="submit">Next</button>
                        </form>
                    </div>
                    <div className="info">
                        <div className="filter"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup;

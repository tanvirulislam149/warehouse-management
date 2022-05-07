import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    let navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    }
    return (
        <div className='text-center'>
            <h1 className='text-center fw-bold text-color mt-5 item-header'>Please Register</h1>
            <hr className='mb-5 mx-auto' style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
            <input className='input-field mx-auto my-1 border-0 py-1 px-2' style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }} placeholder="Enter Your Email" type="email" name="email" /> <br />
            <input className='input-field mx-auto my-1 border-0 py-1 px-2' style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }} placeholder="Enter Your Password" type="password" name="password" /> <br />
            <button onClick={goToLogin} className='bg-white border-0 text-color fw-bold'>Already Have An Account? Click Here</button> <br />
            <button className='update-btn mt-1 input-field'>Register</button>
        </div>
    );
};

export default Register;
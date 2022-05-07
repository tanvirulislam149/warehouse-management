import React, { useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import google from "../../images/google.png"
import twitter from "../../images/twitter.png"
import auth from '../firebase.init';
import Loading from '../Loading/Loading';

const LogIn = () => {
    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const [user, loading, error] = useAuthState(auth);

    const [email, setEmail] = useState();

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])





    if (loading) {
        return (
            <div>
                <Loading></Loading>;
            </div>
        )
    }

    if (user) {

    }

    const customId = "custom-id-yes";


    const handlePasswordReset = async () => {
        await sendPasswordResetEmail(email);
    }

    if (signInError) {
        if (signInError?.message === "Firebase: Error (auth/wrong-password).") {
            toast(<button className='bg-white border-0 text-primary' onClick={handlePasswordReset}>Wrong Password. Click Here To Reset Password</button>, { toastId: customId })
        }
        else {
            toast(signInError?.message, { toastId: customId });
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        setEmail(email);
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }



    const goToRegister = () => {
        navigate("/register")
    }
    return (
        <div className='text-center'>
            <h1 className='text-center fw-bold text-color mt-5 item-header'>Please Login</h1>
            <hr className='mb-5 mx-auto' style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
            <form onSubmit={handleSubmit} id="form">
                <input className='input-field mx-auto my-1 border-0 py-1 px-2' style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }} placeholder="Enter Your Email" type="email" name="email" /> <br />
                <input className='input-field mx-auto my-1 border-0 py-1 px-2' style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }} placeholder="Enter Your Password" type="password" name="password" /> <br />
                <button onClick={goToRegister} className='bg-white border-0 text-color fw-bold'>New Here? Create An Account</button>
                <br />
                <button className='update-btn mt-1 input-field'>Login</button>
            </form>
            <div className='d-flex justify-content-center align-items-center my-3'>
                <hr className='mb-2 mt-2 mx-2' style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
                <p className='mb-0'>OR</p>
                <hr className='mb-2 mt-2 mx-2' style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
            </div>
            <button className='bg-white border-1 px-5 py-3 mb-3 fw-bold' style={{ borderRadius: "50px", color: "#002266" }}> <img style={{ width: "30px", marginRight: "10px" }} src={google} alt="" /> Continue With Google</button><br />
            <button className='bg-white border-1 px-5 py-3 fw-bold' style={{ borderRadius: "50px", color: "#002266" }}> <img style={{ width: "30px", marginRight: "10px" }} src={twitter} alt="" /> Continue With Twitter</button>
            <ToastContainer />
        </div>
    );
};

export default LogIn;
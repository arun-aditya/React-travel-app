import React from 'react';

function FormSignUp() {
    return (
        <div className='form-content-right'>
            <form className='form'>
                <h1>
                    Get Started with us! Create your account by filling the information provided below.
                </h1>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>
                        Username
                    </label>
                    <input 
                        id='username'
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder='Enter Username'/>
                </div>

                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                       email
                    </label>
                    <input 
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter Email'/>
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                       Password
                    </label>
                    <input 
                        id='password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter Password'/>
                </div>

                <div className='form-inputs'>
                    <label htmlFor='confirmpassword' className='form-label'>
                       Confirm Password
                    </label>
                    <input 
                        id='confirmpassword'
                        type='password'
                        name='confirmpassword'
                        className='form-input'
                        placeholder='Enter Password again'/>
                </div>

                <button className='form-input-btn'
                type='submit'>
                    SignUp
                </button>
                <span className='form-input-login'>
                    ALreadyh have an account? login<a href="#">here</a>
                </span>

            </form>
        </div>
    );
}

export default FormSignUp;

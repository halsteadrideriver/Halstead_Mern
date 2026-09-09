import React, { useState } from 'react'
import './FormValidationApp.css'

const FormValidationApp = () => {
    const [name,setname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');
    const [errors,setErrors] = useState('');

    const validateForm = () =>{
        const errors = {};

        if(!name){
            errors.name = 'Name is Required';
        }
        if(!email){
            errors.email = 'Email is required';
        }else if(!/\S+@\S+\.\S/.test(email)){
            errors.email = 'Email is invalid';
        }
        if (!password){
            errors.password = 'Password is required';
        }else if(password.length < 6){
            errors.password = 'Password length is shorter than 6 .'
        }
        if(!confirmPassword){
            errors.confirmPassword = 'Confirm Password is required ';
        }
        if(confirmPassword !== password){
            errors.confirmPassword = 'Password mismatch';
        }
        if(confirmPassword !== password){
            errors.confirmPassword = 'Password mismatch';
        }
        if(!age || isNaN(age)){
            errors.age = 'Age not correct';
        }
        if(!gender){
            errors.gender = 'Gender is required.';
        }

        return errors

    }
    


    function handleSubmit(e){
        e.preventDefault()
        const validationErrors = validateForm();

        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        }else{
            alert("Form submitted successfully");
        }
    }
  return (
    <div className='container'>
        
        <form onSubmit={handleSubmit}>
            <h1>Form Validation</h1>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e)=> setname(e.target.value)}/>
                {errors.name}
            </div>
            <div>
                <label>Email:</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                {errors.email}
            </div>
            <div>
                <label>Password:</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                {errors.password}
            </div>
            <div>
                <label>Re-test Password:</label>
                <input type='password'value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}></input>
                {errors.confirmPassword}
            </div>
            <div>
                <label>Age:</label>
                <input type='number' value={age} onChange={(e) => setAge(e.target.value)}></input>
                {errors.age}
            </div>
            <div>
                <label>Gender:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidationApp
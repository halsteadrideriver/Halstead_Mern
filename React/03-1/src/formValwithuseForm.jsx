import React from 'react';
import { useForm } from "react-hook-form";
import './FormValidationApp.css'

const FormValwithuseForm = () => {
    const {register,handleSubmit,watch,formState: { errors }} = useForm();
    
    const password = watch("password");


    // function handleSubmit(e){
    //     e.preventDefault()
    //     // const validationErrors = validateForm();

    //     if(Object.keys(validationErrors).length > 0){
    //         setErrors(validationErrors);
    //     }else{
    //         alert("Form submitted successfully");
    //     }
    // }

    const onSubmit = data => console.log(data)
  return (
    <div className='container'>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Form Validation</h1>
            <div>
                <label>Name:</label>
                <input type='text' name='name' {...register('name',{required:'Name is required.'})}/>
                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type='email' name='email' {...register('email',{required:'email is required' , pattern:{value:/\S+@\S+\.\S+/, message:'Email is invalid'}})}></input>
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input type='password' name='password' {...register('password',{required:'No password',minLength:{value:6,message:'morethan 6 letters required'}})}></input>
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div>
                <label>Re-test Password:</label>
                <input type='password'name='confirmPassword' {...register('confirmPassword',{required:'No password',validate:value=> value === password || 'Password not match' })}></input>
                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
            </div>
            <div>
                <label>Age:</label>
                <input type='number' name='age' {...register('age',{required:'No age',min:{value:18,message:'Should be above 18'}})}></input>
                {errors.age && errors.age.message}
            </div>
            <div>
                <label>Gender:</label>
                <select name='gender' {...register('gender',{required:'No gender'})}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender && errors.gender.message}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValwithuseForm
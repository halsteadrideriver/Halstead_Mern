import React, { useState } from "react";

const Form = () => {
    //Multiple States:
    // const[name,setname] = useState("");
    // const[email,setemail] = useState("");

    // Multiple States to single state:
    const[formData,setformData] = useState({
        name : '',
        email: ''
    })
    // multiple States functions:
    // const handleName = (e) => {
    //     console.log(e.target.value);
    //     setname(e.target.value)
    // }
    // const handleEmail = (e) => {
    //     console.log(e.target.value);
    //     setemail(e.target.value)
    // }
    // Multiple States to single States function:
    const handleInput = (e) =>{
        const {name,value} = e.target;
        setformData({...formData,[name]:value})
    }

    const handleSubmit = (e)=> {
        e.preventDefault();  // prevents the values filled in the labels from going to default values.
    }
    return (
        
        <form onSubmit={handleSubmit}>
            <label>
            Name: 
            <br/>            
            <input type='text' name="name" value={formData.name} onChange={handleInput}/>
            </label>
            <br/>
            <label>
            Email:
            <br/>
            <input type='text' name="email" value={formData.email} onChange={handleInput}/>
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>

    )
}

export default Form;
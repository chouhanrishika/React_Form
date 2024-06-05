import React, { useState } from "react";
import './Forminput.css' 


const FormInput=(props)=> {
    const [focused,setFocused] = useState(false)
    const {label,errorMessage, onChange, id, ...inputProps}= props;
    const handelFocus=(e)=>{
        setFocused(true);
    }
    return ( 
        <div className="FormInput">
            <label>{label}</label>
        <input {...inputProps} onChange={onChange}
        onBlur={handelFocus} focused={focused.toString()}
        />
        <span>{errorMessage}</span>
        </div>
     );
}

export default FormInput;
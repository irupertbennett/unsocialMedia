import CapitalizeFirstLetter from "./CapitalizeFirstLetter"
import { useState } from 'react'

const Form = (props) => {
    
    const [formData, setFormData] = useState(props.formData)
    const [dataObject, setDataObject] = useState({})
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        formData.formItems.map((item) => {
            setDataObject(prevOD => ({...prevOD, [Object.values(item)[2]]:item.value}))
        })
        if(formData.role === "Sign Up"){
            if(validate()){
                props.returnObject(dataObject)
            } else {
                props.returnObject(dataObject)
            }
        }
    }

    const getNewFormData = (index, value) => {
        let newFormData = {
            title: formData.title,
            role: formData.role,
            submitAction: formData.submitAction,
            formItems: [...formData.formItems]
        }
        newFormData.formItems[index].value = value
        setFormData(newFormData)
    }

    const validate = () => {
        setErrors([])
        let isValid = true;
    
        if (formData.formItems.filter((item) => item.name === "email")[0].value === ""){
          isValid = false;
          setErrors({
              ...errors,
              "email": "Please enter your email Address."
          })
        }
    
        if (typeof email !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(formData.formItems.filter((item) => item.name === "email")[0].value)) {
            isValid = false;
            setErrors({
                ...errors,
                "email": "Please enter a valid email address."
            })
          }
        }
    
        if (formData.formItems.filter((item) => item.name === "password")[0].value === "") {
            isValid = false;
            setErrors({
                ...errors,
                "password": "Please enter a password."
            })
        }
    
        if (formData.formItems.filter((item) => item.name === "password")[0].value.length < 6) {
          isValid = false;
          setErrors({
            ...errors,
            "password": "Your password must be at least 6 characters"
        })
        }
    
        if (formData.formItems.filter((item) => item.name === "confirmpassword")[0].value === "") {
          isValid = false;
          setErrors({
            ...errors,
            "confirmPassword": "Please confirm your password."
        })
        }
    
        if (typeof password !== "undefined" && typeof confirmPassword !== "undefined") {
            
          if (formData.formItems.filter((item) => item.name === "password")[0].value !== formData.formItems.filter((item) => item.name === "confirmpassword")[0].value) {
            isValid = false;
            setErrors({
                ...errors,
                "password": "Your passwords don't match."
            })
          }
        } 
    
        return isValid;
    }

    const data = (formData.formItems.map((item, index) => {
        var data = ""
        switch (item.inputType) {
            case "input":
                    data = <div className="form-group col-md-10 offset-md-1" key={item.type + item.name}>
                        <label htmlFor={item.name}><span className="auth-error">*</span><CapitalizeFirstLetter word={item.name}/></label>
                        <input 
                            required={item.required}
                            className="form-control" 
                            value={item.value}
                            type={item.type}
                            id={item.name}
                            autoComplete="on" 
                            onChange={(e) => getNewFormData(index, e.target.value)}
                        />
                    </div>
                break;
            case "select":
                    data = <div className="form-group col-md-10 offset-md-1" key={item.type + item.name}>
                        <label htmlFor={item.name}><span className="auth-error">*</span>{item.name}</label>
                        <select 
                            required={item.required}
                            className="form-control" 
                            value={item.value} 
                            type={item.type}
                            id={item.name} 
                            autoComplete="on" 
                            onChange={(e) => getNewFormData(index, e.target.value)}
                        />
                    </div>
                break;
            default:
                break;
        }
        return data
    }))
    return ( 
        <form onSubmit={ (e) => handleSubmit(e) }>
            <h3 className="text-center">{ props.formData.title }</h3>
            { data }
            <button className="btn">{ props.formData.role }</button>
        </form>
     );
}
 
export default Form;
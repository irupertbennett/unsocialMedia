import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../ReduxStore/Actions/authActions'
import { useState } from 'react'
import Form from '../Form'

const SignUp = () => {

    const [formData, setFormData] = useState({
        title: "Welcome! Register an account to get started",
        role: "Sign Up",
        submitAction: "signUp",
        formItems: [
            { inputType: "input", required: true, type: "email", name: "email", value: ""},
            { inputType: "input", required: true, type: "password", name: "password", value: ""},
            { inputType: "input", required: true, type: "password", name: "confirmpassword", value: ""},
            { inputType: "input", required: false, type: "text", name: "firstname", value: ""},
            { inputType: "input", required: false, type: "text", name: "lastname", value: ""}
        ]
    })

    const returnObject = (obj) => {
        if(obj){
            signUp(obj);
        }
    }

    return (
        <div className="container pt-5">
            <Form formData={formData} returnObject={(data) => returnObject(data)} />
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)

import { useState } from 'react'
import Form from '../Form'

const ForgottenPassword = () => {

    const [formData] = useState({
        title: "Forgotten your password?",
        role: "Reset Password",
        submitAction: "resetPassword",
        formItems: [
            { inputType: "input", type: "email", required: true, name: "email", value: ""}
        ]
    })

    return (
        <div className="container pt-5">
            <Form formData={formData}/>
        </div>
     );
}
 
export default ForgottenPassword;
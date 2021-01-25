import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return ( 
        <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 justify-content-center">  
                <li className="nav-item"><NavLink className="nav-link text-md-center" to='/'><i className="fas fa-home fa-3x" aria-hidden="true"></i></NavLink></li>
            </ul>
            <ul className="navbar-nav ml-auto w-100 justify-content-end">
                <li className="nav-item"><NavLink className="nav-link text-md-center" to='/register'><i className="far fa-edit fa-3x" aria-hidden="true"></i></NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-md-center" to='/SignIn'><i className="fas fa-sign-in-alt fa-3x" aria-hidden="true"></i></NavLink></li>
            </ul>
        </div>
     );
}
 
export default SignedOutLinks;
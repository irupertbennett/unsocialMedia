import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../ReduxStore/Actions/authActions'

const SignedInLinks = (props) => {
    function action() {
        props.action()
    }

    return ( 
        <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 justify-content-center">  
                <li className="nav-item" onClick={action}><NavLink className="nav-link px-4 text-md-center" to='/account'><i className="fa fa-user fa-3x" aria-hidden="true"></i></NavLink></li>
                <li className="nav-item" onClick={action}><NavLink className="nav-link px-4 text-md-center" to='/forum'><i className="fas fa-book-open fa-3x"></i></NavLink></li>
            </ul>
            <ul className="navbar-nav ml-auto w-100 justify-content-end">
                <li className="nav-item" onClick={action}><a className="nav-link px-4 text-md-center text-white" onClick={ props.signOut }><i className="fa fa-sign-out fa-3x" aria-hidden="true"></i></a></li>
            </ul>
        </div>
     );
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
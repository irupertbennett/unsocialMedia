import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {

    function closeNav() { 
        var elements = document.getElementById('navbarSupportedContent')
        if(elements)
        elements.classList.remove('show') 
    }
    
    const { auth, profile } = props
    var links = auth.emailVerified ? <SignedInLinks profile={profile} action={closeNav}/> : <SignedOutLinks action={closeNav}/>


    return (  
        <nav className="navbar navbar-expand-md">
            <Link className="navbar-brand d-flex w-50 mr-auto" to="/">
                <i className="fab fa-medium-m fa-3x"></i>
                {/* <img id="togglenavimage" src="apple-touch-icon-57x57.png" alt="UnsocialMedia" ></img> */}
            </Link>
           <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            { links }    
        </nav>
    );
}

const mapStateToProps = ( state ) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
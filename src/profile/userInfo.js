import { Component } from 'react'
import { connect } from 'react-redux'
import { updateDetails } from '../ReduxStore/Actions/authActions'
import firebase from 'firebase/app'

class UserInfo extends Component {
    state = {
        editDetails: false,
        city: "",
        email: "",
        relationshipStatus: "",
        id: ""
    }
    
    toggleDetails = () => {
        this.setState({
            editDetails: !this.state.editDetails
        })
    }

    updateState = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitDetails = () => {
        var newDetails = {
            city: this.state.city,
            email: this.state.email,
            relationshipStatus: this.state.relationshipStatus,
            id: this.state.id
        }
        console.log("submit")
        console.log(newDetails)
        this.props.updateDetails(newDetails)
        this.toggleDetails()
    }

    componentDidMount() {
        this.setState({
            city: this.props.profile.city,
            email: this.props.profile.email,
            relationshipStatus: this.props.profile.relationshipStatus,
            id: this.props.profile.id,
        })
    }
    getDetailsDisplay(profile){
        if(this.state.editDetails === true){
            return (
                <div id={ profile.id } className="user-info px-5 py-4 text-center">
                    <div className="text-center">
                        <input id="city" className="form-control" defaultValue={profile.city} onChange={ (e) => this.updateState(e)}></input>
                        <p>City</p>
                    </div>
                    <div className="text-center">
                        <input id="email" className="form-control" value={this.state.email} onChange={ (e) => this.updateState(e)}></input>
                        <p>E-mail</p>
                    </div>
                    <div className="text-center">
                        <input id="relationshipStatus" className="form-control" value={this.state.relationshipStatus} onChange={ (e) => this.updateState(e)}></input>
                        <p>Relationship Status</p>
                    </div>
                    <div className="text-center pt-3">
                        <button className="btn" onClick={this.toggleDetails}>Cancel</button>
                        <button className="btn" onClick={this.submitDetails}>Save</button>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div id={ profile.id } className="user-info px-5 py-4 text-center">
                    <div className="text-center">
                        <h5>{ profile.city ? profile.city : "Unknown" }</h5>
                        <p>City</p>
                    </div>
                    <div className="text-center">
                        <h5>{ profile.email ? profile.email : "Unknown"  }</h5>
                        <p>E-mail</p>
                    </div>
                    <div className="text-center">
                        <h5>{ profile.relationshipStatus ? profile.relationshipStatus : "Unknown"  }</h5>
                        <p>Relationship Status</p>
                    </div>
                    <div className="text-center pt-3">
                        <button className="btn" onClick={this.toggleDetails}>Edit details</button>
                    </div>
                </div>
            )
        }
    }

    render(){
        const { profile } = this.props
        if(profile){
            return ( 
                <div>
                    { this.getDetailsDisplay(profile) }
                </div>
            );
        } else {
            return <p>Loading...</p>
        }
    }
}
 
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        updateDetails: (newDetails) => dispatch(updateDetails(newDetails))
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(UserInfo)
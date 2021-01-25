import { Component } from 'react'
import { connect } from 'react-redux'
import { updateBio } from '../ReduxStore/Actions/authActions'

class Bio extends Component{
    state = {
        bio: ""
    }

    handleChange = (e) => {
        this.setState({
            bio: e.target.value
        })
    }
    handleSubmit = () => {
        if(this.state.bio !== ""){
            this.props.updateBio(this.state.bio)
            this.props.toggleBio()
        }
        
    }
    render(){
        const { toggleBio } = this.props
        
        return ( 
            <div className="bio">
                <div className="row col-md-12">
                    <textarea className="form-control" value={this.state.bio} placeholder="Write something about yourself" onChange={(e) => this.handleChange(e)}></textarea>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <button className="btn" onClick={this.handleSubmit}>Save</button>
                        <button className="btn" onClick={toggleBio}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBio: (bio) => dispatch(updateBio(bio))
    }
}

export default connect(null, mapDispatchToProps)(Bio);
import { connect } from 'react-redux'
import { Component } from 'react'
import { createPost } from '../ReduxStore/Actions/postActions'

class CreatePost extends Component {

    state = {
        post: ""
    }

    handleChange = (e) =>{
        this.setState({
            post: e.target.value
        })
    }

    submitPost = () => {
        if(this.post !== ""){
            this.props.createPost(this.state.post)
            this.setState({
                post: ""
            })
        }
    }

    render(){
        return ( 
            <div className="create-post px-4 py-2">
                <h2 className="text-center">Create New Post</h2>
                <textarea className="form-control" onChange={this.handleChange} value={this.state.post} placeholder="Whats on your mind?"></textarea>
                <button onClick={ this.submitPost } className="btn mt-5">Post</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);
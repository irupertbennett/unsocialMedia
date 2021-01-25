import moment from 'moment'
import { Component } from 'react'
import { connect } from 'react-redux'
import { updatePost, deletePost } from '../ReduxStore/Actions/postActions'

class Post extends Component {

    state = {
        likes: 0,
        loves: 0,
        laughs: 0,
        hates: 0,
        post: "",
        createdBy: "",
        postCreated: "",
        id: ""
    }

    componentDidMount() {
        this.setState({
            likes: this.props.post.likes,
            loves: this.props.post.loves,
            laughs: this.props.post.laughs,
            hates: this.props.post.hates,
            post: this.props.post.post,
            createdBy: this.props.post.createdBy,
            postCreated: this.props.post.postCreated,
            id: this.props.post.id
        })
        window.scrollTo(0, 0)
    }

    updateReactions = (e) => {
        this.setState({
            [e.target.id]: this.state.[e.target.id]+1
        },() => {
            this.submitNewDetails()
        })
    }

    submitNewDetails = () => {
        var newPostDetails = {
            likes: this.state.likes,
            loves: this.state.loves,
            laughs: this.state.laughs,
            hates: this.state.hates,
            post: this.state.post,
            createdBy: this.state.createdBy,
            postCreated: this.state.postCreated,
            id: this.state.id
        }
        this.props.updatePost(newPostDetails)
    }

    deletePost = (e) => {
        this.props.deletePost(this.state.id)
    }

    render(){
    const { post, auth } = this.props
    const postedTimeUTC = new Date(Date(post.postCreated)).toUTCString()

    return (
        <div id={ post.id } className="card mt-2">
            <div className="card-header text-muted">
                <div className="float-left">
                    <p><b>Posted:</b> {postedTimeUTC}</p>
                </div>
                    <div className="float-right"><b>Posted By:</b> {post.createdBy}
                </div>   
            </div>
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">{post.post}</p>
            </div>
            <div className="card-footer row">
                <p className="col reaction-icon"><span><i className="far fa-thumbs-up fa-2x" id="likes" onClick={(e) => this.updateReactions(e)}></i></span>{ post.likes }</p>
                <p className="col reaction-icon"><span><i className="far fa-thumbs-down fa-2x"  id="hates" onClick={(e) => this.updateReactions(e)}></i></span>{ post.hates }</p>
                <p className="col reaction-icon"><span><i className="far fa-heart fa-2x"  id="loves" onClick={(e) => this.updateReactions(e)}></i></span>{ post.loves }</p>
                <p className="col reaction-icon"><span><i className="far fa-grin-squint-tears fa-2x"  id="laughs" onClick={(e) => this.updateReactions(e)}></i></span>{ post.laughs }</p>
                { auth && auth.uid === post.authorId ? <p className="col reaction-icon"><span><i className="far fa-trash-alt fa-2x" id="bin" onClick={(e) => this.deletePost(e)}></i></span></p> : <p className="col"></p> }
            </div>
        </div> 
     );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        updatePost: (post) => dispatch(updatePost(post)),
        deletePost: (post) => dispatch(deletePost(post))
    }
}

export default connect(null, mapDispatchToProps)(Post);
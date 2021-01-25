import { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import CreatePost from './CreatePost';
import PostList from './PostList'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Forum extends Component {
    render(){
        const { posts } = this.props
        const { auth } = this.props
        if(!auth.emailVerified) return <Redirect to='/signIn' />
        return ( 
            <div className="offset-md-2 col-md-8 py-4">
                <CreatePost/>
                <PostList posts={posts} auth={auth} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        posts: state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts', orderBy: ['postCreated', 'asc']}
    ])
)(Forum);
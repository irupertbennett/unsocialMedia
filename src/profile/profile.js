import ProfileCard from './ProfileCard'
import { connect } from 'react-redux'
import CreatePost from '../forum/CreatePost'
import PostList from '../forum/PostList'
import ProfileIntro from './profileIntro'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Profile extends Component{
    
    render(){
        const { posts, auth, profile } = this.props
        if(!auth.emailVerified) return <Redirect to='/signIn' />
        console.log(profile)
        return ( 
            <div className="offset-md-2 col-md-8 pb-4">
                <div className="row">
                    <div className="col mt-2">
                        <div className="profile-card">
                            <img id="togglenavimage" className="rounded-circle responsive-image img-fluid" src="userImage.png" alt="unsocialMedia" ></img>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col pt-2">
                        <ProfileIntro />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ProfileCard profile={ profile }/>
                    </div>
                    <div className="col py-2">
                        <CreatePost />
                    </div>
                </div>
                <div className="row">
                    <div className="col py-2">
                        <PostList posts={ posts } auth={ auth }/>
                    </div>
                </div>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    console.log(state)
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile,
      posts: state.firestore.ordered.posts
    }
  }

  export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        const id = props.auth.uid? props.auth.uid : null
        return[
        { 
            collection: 'posts',
            where:[
                ['authorId', '==', id]
            ]
        }
      ]})
    )(Profile)
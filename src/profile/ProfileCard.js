import { Component } from 'react'
import UserInfo from './userInfo'

class ProfileCard extends Component {
    
    render() {
        const { profile } = this.props
        console.log(profile)
        return ( 
            <div className="py-2">
                <UserInfo profile={profile}/>
            </div>
        );
    }
}
 
export default ProfileCard;
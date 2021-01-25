import { useState } from 'react'
import Bio from './bio'

const ProfileIntro = () => {
    
    const [showBio, setShowBio] = useState(false)

    const toggleBio = () => {
        setShowBio(!showBio)
    }
    return ( 
        <div className="profile-intro px-5 py-4">
            <h2>Rupert Bennett</h2>
            { false ? <p>This is my bio</p> : showBio ? <Bio toggleBio={toggleBio}/> : <h5 onClick={toggleBio}>Add Bio</h5> }
        </div>
     );
}
 
export default ProfileIntro;
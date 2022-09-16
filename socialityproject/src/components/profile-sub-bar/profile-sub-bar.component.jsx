import './profile-sub-bar.styles.css';
import ProfileButton from '../profile-button/profile-button.component';

import PROFILE_BUTTONS_DATA from '../../data/profile-buttons-data';

const ProfileSubBar = () => {
  return (
    <div className="profile-sub-bar">
      {PROFILE_BUTTONS_DATA.map(button => (
        <ProfileButton key={button.text} button={button}/>
      ))}
    </div>
  )
}

export default ProfileSubBar
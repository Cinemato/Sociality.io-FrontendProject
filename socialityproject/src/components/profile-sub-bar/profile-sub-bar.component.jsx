import './profile-sub-bar.styles.css';
import { ReactComponent as Bell } from '../../assets/bell.svg';

const ProfileSubBar = () => {
  return (
    <div className="profile-sub-bar">
        <div className='profile-dropdown'>
            <div className="sub-title">
              <Bell /> 
              <span>NOTIFICATIONS</span>
            </div>
            <span className='dropdown-button'>+</span>
        </div>
        <div className='profile-dropdown'>
            <div className="sub-title">
              <Bell /> 
              <span>SUMMARY</span>
            </div>
            <span className='dropdown-button'>+</span>
        </div>
        <div className='profile-dropdown'>
            <div className="sub-title">
              <Bell /> 
              <span>PUBLISH</span>
            </div>
            <span className='dropdown-button'>+</span>
        </div>
    </div>
  )
}

export default ProfileSubBar
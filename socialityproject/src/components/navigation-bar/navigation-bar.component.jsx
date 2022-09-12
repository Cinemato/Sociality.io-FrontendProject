import './navigation-bar.styles.css';
import CompanySubBar from '../company-sub-bar/company-sub-bar.component';
import ProfileSubBar from '../profile-sub-bar/profile-sub-bar.component';

const NavigationBar = () => {
  return (
    <div className="navigation-bar-container">
        <CompanySubBar />
        <ProfileSubBar />
    </div>
  )
}

export default NavigationBar
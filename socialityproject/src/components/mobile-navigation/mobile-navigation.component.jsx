import './mobile-navigation.styles.css';

import { useState } from 'react';

import { ReactComponent as MobileMenu } from '../../assets/mobile-menu.svg';
import { ReactComponent as CloseMenu } from '../../assets/close-menu.svg';

import Logo from '../logo/logo.component';
import CompanySubBar from '../company-sub-bar/company-sub-bar.component';
import ProfileSubBar from '../profile-sub-bar/profile-sub-bar.component';

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="mobile-navigation-container">
        <div className="mobile-navigation-info">
            <Logo className="mobile-logo" />
            {isMenuOpen ? <CloseMenu onClick={mobileMenuToggle} /> : <MobileMenu onClick={mobileMenuToggle} />}
        </div>
        <div className={`mobile-navigation ${isMenuOpen ? 'mobile-navigation-open' : ''}`}>
              <CompanySubBar />
              <ProfileSubBar />
        </div>
    </div>
  )
}

export default MobileNavigation
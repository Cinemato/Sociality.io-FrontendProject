import './mobile-navigation.styles.css';

import Logo from '../logo/logo.component';
import { ReactComponent as MobileMenu } from '../../assets/mobile-menu.svg';

const MobileNavigation = () => {
  return (
    <div className="mobile-navigation-container">
        <div className="mobile-navigation-info">
            <Logo className="mobile-logo" />
            <MobileMenu />
        </div>
    </div>
  )
}

export default MobileNavigation
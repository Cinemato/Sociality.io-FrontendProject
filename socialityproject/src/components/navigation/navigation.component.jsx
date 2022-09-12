import './navigation.styles.css';
import Logo from '../logo/logo.component';
import NavigationBar from '../navigation-bar/navigation-bar.component';

const Navigation = () => {
  return (
    <div className='navigation-container'>
      <Logo />
      <NavigationBar />
    </div>
  )
}

export default Navigation;
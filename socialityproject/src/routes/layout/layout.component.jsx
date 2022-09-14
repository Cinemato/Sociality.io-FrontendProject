import './layout.styles.css';
import Navigation from "../../components/navigation/navigation.component"
import ProfilePhoto from '../../components/profile-photo/profile-photo.component';
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="layout-container">
        <ProfilePhoto />
        <Navigation />
        <Outlet />
    </div>
  )
}

export default Layout
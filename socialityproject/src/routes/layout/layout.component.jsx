import './layout.styles.css';
import Navigation from "../../components/navigation/navigation.component"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="layout-container">
        <Navigation />
        <Outlet />
    </div>
  )
}

export default Layout
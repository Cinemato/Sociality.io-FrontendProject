import './company-sub-bar.styles.css';
import companyLogo1 from '../../assets/Logo1.png'
import companyLogo2 from '../../assets/Logo2.png'
import companyLogo3 from '../../assets/Logo3.png'
import { Link } from 'react-router-dom';

const CompanySubBar = () => {
  return (
    <div className="company-sub-bar">
        <Link className='company-link' to='/'>
            <img src={companyLogo1} alt="logo" />
        </Link>
        <Link className='company-link' to='/'>
            <img src={companyLogo2} alt="logo" />
        </Link>
        <Link className='company-link' to='/'>
            <img src={companyLogo3} alt="logo" />
        </Link>
    </div>
  )
}

export default CompanySubBar
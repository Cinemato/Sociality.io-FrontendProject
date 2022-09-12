import './company-button.styles.css';
import { Link } from 'react-router-dom';

const CompanyButton = ({ companyLogo }) => {
  return (
    <Link className='company-button' to='/'>
        <img src={companyLogo} alt="companylogo" />
    </Link>
  )
}

export default CompanyButton
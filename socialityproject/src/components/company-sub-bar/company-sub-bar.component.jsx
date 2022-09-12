import './company-sub-bar.styles.css';

import companyLogo1 from '../../assets/Logo1.png'
import companyLogo2 from '../../assets/Logo2.png'
import companyLogo3 from '../../assets/Logo3.png'

import CompanyButton from '../company-button/company-button.component';

const CompanySubBar = () => {
  return (
    <div className="company-sub-bar">
        <CompanyButton companyLogo={companyLogo1}/>
        <CompanyButton companyLogo={companyLogo2}/>
        <CompanyButton companyLogo={companyLogo3}/>
    </div>
  )
}

export default CompanySubBar
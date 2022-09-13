import './company-sub-bar.styles.css';

import companyLogo1 from '../../assets/company-logos/Logo1.png'
import companyLogo2 from '../../assets/company-logos/Logo2.png'
import companyLogo3 from '../../assets/company-logos/Logo3.png'
import companyLogo4 from '../../assets/company-logos/Logo4.png'
import companyLogo5 from '../../assets/company-logos/Logo5.png'
import companyLogo6 from '../../assets/company-logos/Logo6.png'

import CompanyButton from '../company-button/company-button.component';

const CompanySubBar = () => {
  return (
    <div className="company-sub-bar">
        <CompanyButton companyLogo={companyLogo1} id={1} />
        <CompanyButton companyLogo={companyLogo2} id={2} />
        <CompanyButton companyLogo={companyLogo3} id={3} />
        <CompanyButton companyLogo={companyLogo4} id={4} />
        <CompanyButton companyLogo={companyLogo5} id={5} />
        <CompanyButton companyLogo={companyLogo6} id={6} />
    </div>
  )
}

export default CompanySubBar
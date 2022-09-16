import './company-sub-bar.styles.css';

import CompanyButton from '../company-button/company-button.component';

import COMPANY_BUTTONS_DATA from '../../data/company-buttons-data';

const CompanySubBar = () => {
  return (
    <div className="company-sub-bar">
        {COMPANY_BUTTONS_DATA.map(button => (
          <CompanyButton key={button.id} button={button} />
        ))}
    </div>
  )
}

export default CompanySubBar
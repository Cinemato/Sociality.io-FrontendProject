import './company-button.styles.css';
import { useState, useEffect } from 'react';

const CompanyButton = ({ companyLogo, id}) => {
  const [isSelected, setIsSelected] = useState(false);

  // Selecting default company logo (for displaying purposes)
  useEffect(() => {
    id === 4 && setIsSelected(true)
  }, [id])

  const selectedToggle = () => {
    setIsSelected(!isSelected);
  }

  return (
    <div className={`company-button ${isSelected ? 'company-selected' : ''}`} onClick={selectedToggle}>
        <img src={companyLogo} alt="companylogo" />
    </div>
  )
}

export default CompanyButton
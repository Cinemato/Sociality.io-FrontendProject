import './company-button.styles.css';
import { useState, useEffect } from 'react';

const CompanyButton = ({ button }) => {
  const [isSelected, setIsSelected] = useState(false);

  // Selecting default company logo (for matching the design and desplaying purposes)
  useEffect(() => {
    button.id === 3 && setIsSelected(true)
  }, [button.id])

  const selectedToggle = () => {
    setIsSelected(!isSelected);
  }

  return (
    <div className={`company-button ${isSelected ? 'company-selected' : ''}`} onClick={selectedToggle}>
        <img src={button.logo} alt="companylogo" />
    </div>
  )
}

export default CompanyButton
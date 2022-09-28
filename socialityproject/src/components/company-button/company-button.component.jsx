import './company-button.styles.css';
import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts.context';

const CompanyButton = ({ button }) => {
  const {currentBrand, setCurrentBrand} = useContext(PostsContext);

  const selectedToggle = () => {
    setCurrentBrand(button.id);
  }

  return (
    <div className={`company-button ${currentBrand === button.id ? 'company-selected' : ''}`} onClick={selectedToggle}>
        <img src={button.logo} alt="companylogo" />
    </div>
  )
}

export default CompanyButton
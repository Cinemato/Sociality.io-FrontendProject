import './profile-button.styles.css';
import { ReactComponent as PlusSign } from '../../assets/button-icons/plus.svg';
import { ReactComponent as MinusSign } from '../../assets/button-icons/minus.svg';
import { ReactComponent as Arrow } from '../../assets/button-icons/arrow.svg';
import { useState, useEffect } from 'react';

import ButtonDropdownList from '../button-dropdown-list/button-dropdown-list.component';

const ProfileButton = ({ ButtonIcon, buttonName}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {text, dropdownButtons} = buttonName;

  // Selecting default profile button (for matching the design and desplaying purposes)
  useEffect(() => {
    text === "PUBLISH" && setIsDropdownOpen(true);
  }, [text])

  const dropdownToggle = () => {
    if(dropdownButtons)
      setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <>
      <div className={`profile-button ${isDropdownOpen ? 'profile-button-open' : ''}`} onClick={dropdownToggle}>
          <div className="sub-title">
              <ButtonIcon className='button-icon'/>
              <span>{text}</span>
          </div>
          {dropdownButtons ? 
            (isDropdownOpen ? <MinusSign className='dropdown-symbol' /> : <PlusSign className='dropdown-symbol' />) : 
            (<span className='notification-count'>29</span>)}
          <Arrow className='arrow' />
      </div>
      <ButtonDropdownList isDropdownOpen={isDropdownOpen} dropdownButtons={dropdownButtons}/>
    </>
  )
}

export default ProfileButton
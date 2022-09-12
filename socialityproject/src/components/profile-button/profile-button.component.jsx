import './profile-button.styles.css';
import { ReactComponent as PlusSign } from '../../assets/plus.svg';
import { ReactComponent as MinusSign } from '../../assets/minus.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { useState } from 'react';

import ButtonDropdownList from '../button-dropdown-list/button-dropdown-list.component';

const ProfileButton = ({ ButtonIcon, buttonName}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {text, dropdownButtons} = buttonName;

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
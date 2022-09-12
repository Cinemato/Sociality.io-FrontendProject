import './button-dropdown-list.styles.css';
import DropdownButton from '../dropdown-button/dropdown-button.component';

const ButtonDropdownList = ({isDropdownOpen, dropdownButtons}) => {
  return (
    <div className={`dropdown-container ${isDropdownOpen ? 'dropdown-open' : ''}`}>
        {dropdownButtons && dropdownButtons.map(({text, color, url}) => (
          <DropdownButton key={text} text={text} color={color} url={url} />
        ))}
    </div>
  )
}

export default ButtonDropdownList
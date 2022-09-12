import './dropdown-button.styles.css';
import { useNavigate } from 'react-router-dom';

const DropdownButton = ({text, color, url}) => {
    const navigate = useNavigate();
    
    const onNavigateHandle = () => {
        navigate(url);
    }

    return (
        <div className="dropdown-button" style={{color: `${color}`}} onClick={onNavigateHandle}>
            <span className='dropdown-button-icon'>&#9679;</span>
            <span>{text}</span>
        </div>
    )
}

export default DropdownButton
import './status.styles.css';

const Status = ({text, color}) => {
  return (
    <div className="status-container">
        <span className='status-color' style={{color: `${color}`}}>&#9679;</span>
        <span>{text}</span>
    </div>
  )
}

export default Status
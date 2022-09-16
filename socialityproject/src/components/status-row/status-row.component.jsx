import './status-row.styles.css'
import Status from '../status/status.component'
import STATUS_DATA from '../../data/status-data'

const StatusRow = () => {
  return (
    <div className="status-row">
        {STATUS_DATA.map(({id, text, color}) => (
            <Status key={id} text={text} color={color}/>
        ))}
    </div>
  )
}

export default StatusRow
import './status-row.styles.css'
import Status from '../status/status.component'
import Post from '../post/post.component'

const STATUS_DATA = [
    {
        id: 0,
        text: "Need Approval",
        color: "#f7bf38"
    },
    {
        id: 1,
        text: "Scheduled",
        color: "#3ac183"
    },
    {
        id: 2,
        text: "Publishing",
        color: "#67b1f2"
    },
    {
        id: 3,
        text: "Published",
        color: "#acacac"
    },
    {
        id: 4,
        text: "Error",
        color: "#fb6450"
    }
]

const StatusRow = () => {
  return (
    <>
    <div className="status-row">
        {STATUS_DATA.map(({id, text, color}) => (
            <Status key={id} text={text} color={color}/>
        ))}
    </div>
    <Post />
    </>
    
  )
}

export default StatusRow
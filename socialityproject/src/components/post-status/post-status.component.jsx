import './post-status.styles.css';
import SOCIAL_MEDIA_DATA from '../../data/social-media-data';

const PostStatus = ({status, channel}) => {
  return (
    <div className="post-status" style={{backgroundColor: `${status.color}`}}>
        {SOCIAL_MEDIA_DATA[channel].logo}
    </div>
  )
}

export default PostStatus
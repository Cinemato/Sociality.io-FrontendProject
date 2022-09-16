import './post.styles.css';

import PostStatus from '../post-status/post-status.component';
import PostDetails from '../post-details/post-details.component';

import STATUS_DATA from '../../data/status-data';

const Post = ({post}) => {
  const status = STATUS_DATA.find(s => s.id === post.status);

  return (
    <div className="post-container">
      <PostStatus status={status} channel={post.account.channel} />
      <PostDetails post={post} status={status} />
    </div>
  )
}

export default Post
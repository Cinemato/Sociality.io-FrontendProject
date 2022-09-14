import './posts-page.styles.css';
import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts.context';

import PostsDate from '../posts-date/posts-date.component';
import StatusRow from '../status-row/status-row.component';

const PostsPage = () => {
  const {posts} = useContext(PostsContext);

  return (
    <div className="posts-page">
      <StatusRow />
      {Object.keys(posts)
      .sort((key1, key2) => (new Date(key2) - new Date(key1)))
      .map(date => (
        <PostsDate key={date} date={date} />
      ))}
    </div>
  )
}

export default PostsPage
import './posts-page.style.css';
import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts.context';

import PostsDate from '../posts-date/posts-date.component';

const PostsPage = () => {
  const {posts} = useContext(PostsContext);

  return (
    <div className="posts-page">
      {Object.keys(posts).map(date => (
        <PostsDate key={date} date={date} />
      ))}
    </div>
  )
}

export default PostsPage
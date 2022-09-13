import './posts-date.styles.css';

import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts.context';

import Post from '../post/post.component';

const PostsDate = ({date}) => {
  const { posts } = useContext(PostsContext);
  const datePosts = posts[date];

  return (
    <div className="posts-date-container">
      <h2 className='posts-date'>{date}</h2>
      <div className="posts-container">
        {datePosts.map(post => (
          <Post key={post.published_at} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default PostsDate
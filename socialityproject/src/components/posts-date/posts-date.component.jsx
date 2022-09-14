import './posts-date.styles.css';

import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts.context';

import Post from '../post/post.component';

const PostsDate = ({date}) => {
  const { posts } = useContext(PostsContext);
  const postsByDate = posts[date];

  const dateOfPosts = new Date(date);
  const month = dateOfPosts.toLocaleString('default', { month: 'long' });

  return (
    <div className="posts-date-container">
      <h2 className='posts-date'>{`${dateOfPosts.getDate()} ${month} ${dateOfPosts.getFullYear()}`}</h2>
      <div className="posts-container">
        {postsByDate.sort((post1, post2) => (new Date(post2.created_at) - new Date(post1.created_at)))
        .map(post => (
          <Post key={post.updated_at} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default PostsDate
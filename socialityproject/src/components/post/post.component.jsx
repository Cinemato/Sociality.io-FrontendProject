import './post.styles.css';

import { ReactComponent as Check } from '../../assets/post-icons/check.svg';
import { ReactComponent as Trash } from '../../assets/post-icons/trash.svg';
import { ReactComponent as Options } from '../../assets/post-icons/options.svg';

import { ReactComponent as Twitter } from '../../assets/post-icons/twitter.svg';

import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts.context';

const Post = ({post}) => {
  const { posts } = useContext(PostsContext);
  console.log(Object.keys(posts));

  return (
    <div className="post-container">
      <div className="post-status">
        <Twitter />
      </div>
      <div className="post-details">
        <div className="post-upper-options">
              <div className="post-date">
                  <p>14 January 2016 - 14:30</p>
              </div>
              <div className="status-options">
                  <Check />
                  <Trash />
                  <Options />
              </div>
          </div>
          <div className="post-content">
            <p>Lorem ipsum dolor sit amet, constetur adipising elit. Consr asperores.</p>
            <img src="https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg" alt="" />
          </div>
          <div className="post-lower-options">
            <Check />
            <span>124</span>
            <Trash />
            <span>63</span>
            <Options />
            <span>4</span>
          </div>
      </div>
    </div>
  )
}

export default Post
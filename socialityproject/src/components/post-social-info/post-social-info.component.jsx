import './post-social-info.styles.css';

import SOCIAL_MEDIA_DATA from '../../data/social-media-data';
import { Fragment } from 'react';

const PostSocialInfo = ({channel}) => {
  const socialButtons = SOCIAL_MEDIA_DATA[channel].buttons;

  return (
    <div className="post-social-info">
      {socialButtons.map(({id, button, amount}) => (
        <Fragment key={id}>
          {button}
          <span>{amount}</span>
        </Fragment>
      ))}
    </div>
  )
}

export default PostSocialInfo
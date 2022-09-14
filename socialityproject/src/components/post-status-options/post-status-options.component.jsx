import './post-status-options.styles.css';
import { Fragment } from 'react';

const PostStatusOptions = ({status, date}) => {
  const createdDate = new Date(date);
  const month = createdDate.toLocaleString('default', { month: 'long' });

  return (
    <div className="post-status-options">
        <div className="post-date">
            <p>{`${createdDate.getDate()} ${month} ${createdDate.getFullYear()} - ${createdDate.getHours()}:${createdDate.getMinutes()}`}</p>
        </div>
        <div className="status-options">
            {status.buttons.map(({id, button}) => (
              <Fragment key={id}>
                {button}
              </Fragment>
            ))}
        </div>
    </div>
  )
}

export default PostStatusOptions
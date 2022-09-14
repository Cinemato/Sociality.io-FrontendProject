import './post-details.styles.css';

import PostStatusOptions from '../post-status-options/post-status-options.component';
import PostContent from '../post-content/post-content.component';
import PostSocialInfo from '../post-social-info/post-social-info.component';

const PostDetails = ({post, status}) => {
    const {created_at, entry, account: {channel}} = post;

    return (
        <div className="post-details">
            <PostStatusOptions status={status} date={created_at}/>
            <PostContent text={entry.message} imageUrl={entry.image[0]}/>
            <PostSocialInfo channel={channel}/>
        </div>
    )
}

export default PostDetails
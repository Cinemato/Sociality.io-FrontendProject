import './post-content.styles.css';
import noPost from '../../assets/no-post-image.png';

const PostContent = ({text, imageUrl}) => {
    const onImageErrorHandler = ({target}) => {
        target.src = noPost
    } 

    return (
        <div className="post-content">
            <p>{text}</p>
            <img src={imageUrl} alt="" onError={onImageErrorHandler} />
        </div>
    )
}

export default PostContent
import { ReactComponent as Twitter } from '../assets/post-icons/social/twitter.svg';
import { ReactComponent as Facebook } from '../assets/post-icons/social/facebook.svg';
import { ReactComponent as Instagram } from '../assets/post-icons/social/instagram.svg';

import { ReactComponent as Like } from '../assets/post-icons/social/like.svg';
import { ReactComponent as Heart } from '../assets/post-icons/social/heart.svg';
import { ReactComponent as Comment } from '../assets/post-icons/social/comment.svg';
import { ReactComponent as Retweet } from '../assets/post-icons/social/retweet.svg';
import { ReactComponent as Share } from '../assets/post-icons/social/share.svg';
import { ReactComponent as View } from '../assets/post-icons/social/view.svg';

const SOCIAL_MEDIA_DATA = {
  twitter: 
    {
      logo: <Twitter />,
      buttons: [
        {
          id: 0,
          button: <Heart />,
          amount: 124
        },
        {
          id: 1,
          button: <Retweet />,
          amount: 63
        },
        {
          id: 2,
          button: <Comment />,
          amount: 4
        },
        {
          id: 3,
          button: <View />,
          amount: 1426
        }
      ]
    },
  instagrambusiness:
    {
      logo: <Instagram />,
      buttons: [
        {
          id: 0,
          button: <Like />,
          amount: 124
        },
        {
          id: 1,
          button: <Comment />,
          amount: 63
        },
        {
          id: 2,
          button: <Share />,
          amount: 4
        },
        {
          id: 3,
          button: <View />,
          amount: 1426
        }
      ]
    },
  facebook:
    {
      logo: <Facebook />,
      buttons: [
        {
          id: 0,
          button: <Like />,
          amount: 124
        },
        {
          id: 1,
          button: <Comment />,
          amount: 63
        },
        {
          id: 2,
          button: <Share />,
          amount: 4
        },
        {
          id: 3,
          button: <View />,
          amount: 1426
        }
      ]
    }
}

export default SOCIAL_MEDIA_DATA;
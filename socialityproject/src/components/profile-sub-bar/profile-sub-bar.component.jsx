import './profile-sub-bar.styles.css';
import { ReactComponent as Notification } from '../../assets/notification.svg';
import { ReactComponent as Summary } from '../../assets/summary.svg';
import { ReactComponent as Publish } from '../../assets/publish.svg';
import { ReactComponent as Engage } from '../../assets/engage.svg';
import { ReactComponent as Listen } from '../../assets/listen.svg';
import { ReactComponent as Report } from '../../assets/report.svg';
import ProfileButton from '../profile-button/profile-button.component';

const PROFILE_BUTTONS = {
  notifications: {
    text: "NOTIFICATIONS",
  },
  summary: {
    text: "SUMMARY",
    dropdownButtons: [
      {
        text: "Compose",
        color: "#fff",
        url: "/"
      },
      {
        text: "Feed",
        color: "#f55661",
        url: "/"
      }
    ]
  },
  publish: {
    text: "PUBLISH",
    dropdownButtons: [
      {
        text: "Compose",
        color: "#fff",
        url: "/"
      },
      {
        text: "Feed",
        color: "#f55661",
        url: "/"
      }
    ]
  },
  engage: {
    text: "ENGAGE",
    dropdownButtons: [
      {
        text: "Compose",
        color: "#fff",
        url: "/"
      },
      {
        text: "Feed",
        color: "#f55661",
        url: "/"
      }
    ]
  },
  listen: {
    text: "LISTEN",
    dropdownButtons: [
      {
        text: "Compose",
        color: "#fff",
        url: "/"
      },
      {
        text: "Feed",
        color: "#f55661",
        url: "/"
      }
    ]
  },
  report: {
    text: "REPORT",
    dropdownButtons: [
      {
        text: "Compose",
        color: "#fff",
        url: "/"
      },
      {
        text: "Feed",
        color: "#f55661",
        url: "/"
      }
    ]
  }
}

const ProfileSubBar = () => {
  return (
    <div className="profile-sub-bar">
        <ProfileButton ButtonIcon={Notification} buttonName={PROFILE_BUTTONS.notifications} />
        <ProfileButton ButtonIcon={Summary} buttonName={PROFILE_BUTTONS.summary} />
        <ProfileButton ButtonIcon={Publish} buttonName={PROFILE_BUTTONS.publish} />
        <ProfileButton ButtonIcon={Engage} buttonName={PROFILE_BUTTONS.engage} />
        <ProfileButton ButtonIcon={Listen} buttonName={PROFILE_BUTTONS.listen} />
        <ProfileButton ButtonIcon={Report} buttonName={PROFILE_BUTTONS.report} />
    </div>
  )
}

export default ProfileSubBar
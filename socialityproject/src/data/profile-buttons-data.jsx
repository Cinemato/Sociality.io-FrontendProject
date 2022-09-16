import { ReactComponent as Notification } from '../assets/button-icons/notification.svg';
import { ReactComponent as Summary } from '../assets/button-icons/summary.svg';
import { ReactComponent as Publish } from '../assets/button-icons/publish.svg';
import { ReactComponent as Engage } from '../assets/button-icons/engage.svg';
import { ReactComponent as Listen } from '../assets/button-icons/listen.svg';
import { ReactComponent as Report } from '../assets/button-icons/report.svg';

const PROFILE_BUTTONS_DATA = [
  {
    icon: <Notification />,
    text: "NOTIFICATIONS",
  },
  {
    icon: <Summary />,
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
  {
    icon: <Publish />,
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
  {
    icon: <Engage />,
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
  {
    icon: <Listen />,
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
  {
    icon: <Report />,
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
]

export default PROFILE_BUTTONS_DATA
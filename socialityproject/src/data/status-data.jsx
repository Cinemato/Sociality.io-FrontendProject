import { ReactComponent as Check } from '../assets/post-icons/status/check.svg';
import { ReactComponent as Trash } from '../assets/post-icons/status/trash.svg';
import { ReactComponent as Options } from '../assets/post-icons/status/options.svg';
import { ReactComponent as NotAllowed } from '../assets/post-icons/status/not-allowed.svg';

const STATUS_DATA = [
    {
        id: 0,
        text: "Need Approval",
        color: "#f7bf38",
        buttons: [
            {
                id: 0,
                button: <Check />
            },
            {
                id: 1,
                button: <Trash />
            },
            {
                id: 2,
                button: <Options />
            }   
        ]
    },
    {
        id: 1,
        text: "Scheduled",
        color: "#3ac183",
        buttons: [
            {
                id: 0,
                button: <NotAllowed />
            },
            {
                id: 1,
                button: <Trash />
            },
            {
                id: 2,
                button: <Options />
            } 
        ]
    },
    {
        id: 2,
        text: "Publishing",
        color: "#67b1f2",
        buttons: [
            {
                id: 0,
                button: <Trash />
            },
            {
                id: 1,
                button: <Options />
            } 
        ]
    },
    {
        id: 3,
        text: "Published",
        color: "#acacac",
        buttons: [
            {
                id: 0,
                button: <Trash />
            },
            {
                id: 1,
                button: <Options />
            } 
        ]
    },
    {
        id: 4,
        text: "Error",
        color: "#fb6450",
        buttons: [
            {
                id: 0,
                button: <Trash />
            },
            {
                id: 1,
                button: <Options />
            } 
        ]
    }
]

export default STATUS_DATA;
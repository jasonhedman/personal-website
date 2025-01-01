import {MdEmail} from "react-icons/md";
import {FaGithub, FaLinkedin, FaPhone} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

import {ContactLink} from "@/types/ContactLink";

const contactLinks: ContactLink[] = [
    {
        icon: MdEmail,
        href: 'mailto:jason@hedmans.org'
    },
    {
        icon: FaGithub,
        href: 'https://github.com/jasonhedman'
    },
    {
        icon: FaLinkedin,
        href: 'https://www.linkedin.com/in/jason-hedman/'
    },
    {
        icon: FaXTwitter,
        href: 'https://twitter.com/jsonhedman'
    }
]

export default contactLinks;

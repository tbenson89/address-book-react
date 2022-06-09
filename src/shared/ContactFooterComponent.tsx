import React from 'react';
import './contact-footer.css';
import SOCIAL_LINKS from './Util';
import { GiTechnoHeart } from 'react-icons/gi';
import { RiFacebookBoxLine, RiInstagramLine, RiGithubLine } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';
import { BiDna } from 'react-icons/bi';


const ContactFooterComponent: React.FC = () => {

    return (
        <div className='content-space theme-font-lite'>
            <GiTechnoHeart /> Social Links <GiTechnoHeart />
            <div className="social-icon-group footing text-center">

                {/* <!-- Facebook --> */}
                <a className="social-links fb-tuned" target="_blank" rel="noopener noreferrer" href={SOCIAL_LINKS.FB_TUNED}>
                    <RiFacebookBoxLine />
                </a>

                {/* <!-- Twitter --> */}
                <a className="social-links tw-tuned" target="_blank" rel="noopener noreferrer" href={SOCIAL_LINKS.TW_TUNED}>
                    <TbWorld /> {/* <- is not used for twitter we need this one for website 1 */}
                </a>

                {/* <!-- YouTube --> */}
                <a className="social-links yt-tuned" target="_blank" rel="noopener noreferrer" href={SOCIAL_LINKS.YT_TUNED}>
                    <BiDna /> {/* <- is not used for twitter we need this one for website 2 */}
                </a>

                {/* <!-- Instagram --> */}
                <a className="social-links ig-tuned" target="_blank" rel="noopener noreferrer" href={SOCIAL_LINKS.IG_TUNED}>
                    <RiInstagramLine />
                </a>

                {/* <!-- Github --> */}
                <a className="social-links git-tuned" target="_blank" rel="noopener noreferrer" href={SOCIAL_LINKS.GIT_TUNED}>
                    <RiGithubLine />
                </a>

                {/* <!-- Pinterest --> */}
                {/* <a className="social-links pin-tuned"></a> */}{/* <!-- NO Account/Link created yet! --> */}

            </div>
        </div>
    )
}

export default ContactFooterComponent;

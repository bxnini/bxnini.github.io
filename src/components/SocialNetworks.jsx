import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/rodrigo-bonini-b5b776186/"},
    {name: "github", icon: <FaGithub />, link: "https://github.com/rbxnini/projects-bonini.git"},
    {name: "instagram", icon: <FaInstagram />, link: "" },
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SocialNetworks
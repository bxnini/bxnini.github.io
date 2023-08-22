import { AiFillPhone, AiFillMail, AiFillEnvironment } from "react-icons/ai";

import '../styles/components/InformationContainer.sass'

const InformationContainer = () => {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(19) 99869-2486</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillMail id="email-icon" />
            <div>
                <h3>Email</h3>
                <h5>donbonini00@gmail.com</h5>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Araras / SP</p>
            </div>
        </div>
    </section>;
};

export default InformationContainer;
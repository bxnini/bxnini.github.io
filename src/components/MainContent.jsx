import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjetctsContainer";
import TechlogiesContainer from "./TechnologiesContainer";

import "../styles/components/MainContent.sass"


const MainContent = () => {
    return <main id="main-content">
        <AboutContainer />
        <TechlogiesContainer />
        <ProjectsContainer />
    </main>;
};

export default MainContent;
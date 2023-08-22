import SocialNetworkContainer from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/literalmente_eu.jpg";
import MeuArquivoPDF from "../components/CV.pdf";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = MeuArquivoPDF;
    link.download = 'curriculo.pdf';
    link.click();
  };

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn" onClick={handleDownloadPDF}>
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
import './Home.css';
import Carrousel from '../../components/Carrousel/Carrousel';
import Live from '../../components/Live/Live';

function Home() {
    return (
        <section className="About_iss">
            <div className="About_iss_container">
                <h1 className="About_iss_title">A propos de l'ISS:</h1>
                <p className="About_iss_text">La Station spatiale internationale (ISS) est un laboratoire spatial en orbite autour de la Terre, utilisé par les agences spatiales de différents pays pour mener des expériences et des recherches dans le domaine de la science, de la technologie, de l'ingénierie, de l'éducation et de l'observation de la Terre. Elle a été lancée en 1998 et est le fruit d'un partenariat entre l'Agence spatiale américaine (NASA), l'Agence spatiale européenne (ESA), l'Agence spatiale japonaise (JAXA) et l'Agence spatiale russe (Roscosmos). L'ISS mesure 110 mètres de long et est constituée de plusieurs modules habités, qui ont été ajoutés au fil du temps. Elle est habitée en permanence par une équipe de 6 membres, qui restent à bord pendant environ 6 mois. L'ISS est le lieu d'une activité scientifique intense, avec des expériences menées dans de nombreux domaines, notamment la biologie, la physique, la chimie et la météorologie. Elle est également utilisée pour entraîner les astronautes et les équipages de vols spatiaux futurs, ainsi que pour fournir une plateforme pour l'observation de la Terre et l'étude de l'environnement spatial.</p>
            </div>
            <Live />
            <Carrousel />
        </section>
    );
}

export default Home;
import React from 'react';
import Radium from 'radium';
import './FormPresentation.css';
import ScrollAnimation from 'react-animate-on-scroll';

const formPresentation = () => {
    return (
        <ScrollAnimation 
                duration={0.75}
                animateIn='fadeIn'
                animateOut='fadeOut'>
            <div className="formPres">
                <div className="PresentationAlign">
                    <h1>ISOLEZ VOUS POUR 1€</h1>
                    <h2>ENGAGEMENT NATIONAL SOLIDARITÉ ÉNERGÉTIQUE</h2>
                    <div className="PresAlign">
                        <h3><i className="icon"> </i>Réalisation par des spécialistes de l’isolation et du bâtiment</h3>
                        <h3><i className="icon"> </i>Nous sommes reconnu garant de l’environnement (RGE)</h3>
                        <h3><i className="icon"> </i>Réduisez jusqu’à 30% de votre facture d'énergie</h3>
                        <h3><i className="icon"> </i>Programme validé par le pôle national </h3>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default Radium(formPresentation);
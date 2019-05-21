import React from 'react';
import Radium from 'radium';
import './DisplayPres.css'

const displayPres = () => {
    return (
        <div className="DisplayPres">
            <h1>L'ISOLATION POUR 1€ C'EST QUOI ?</h1>
            <p>Depuis la mise en place de la Loi POPE, l’Etat oblige les fournisseurs d’énergie (carburant, gaz et électricité) à aider leurs clients à réduire leurs factures d’énergies.</p>
            <p>S’isoler pour un euro symbolique, c’est possible grâce aux aides de l’État, ce dispositif permet de financer à 100% vos travaux d’isolation. Vous pouvez dès maintenant en bénéficier pour isoler vos combles, vides sanitaires, sous-sols, caves, garages et faire jusqu’à 30% d’économies d’énergies.</p>
        </div>
    )   
}

export default Radium(displayPres)
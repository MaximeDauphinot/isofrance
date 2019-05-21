import React from 'react';
import Radium from 'radium';
import './WayToDo.css'

const wayToDo = () => {
    return (
        <div className="wayToDo" id="Demarche">
            <h1>L’ISOLATION À 1 € EN 4 ÉTAPES</h1>      
            <div className="AligmnentDemarche">
                <div className="demarche">
                    <div className="rowWayTo">
                        <div className="displayWayTo">
                            <h1>1. Faites le test d’éligibilité</h1>
                            <p>Vous êtes recontacté après avoir rempli le formulaire pour valider votre éligibilité</p>
                        </div>
                        <div className="displayWayTo">
                            <h1>3. Confirmation la veille de l’intervention</h1>
                            <p>Un conseiller vous contacte la veille de l’intervention pour vérifier avec vous vos disponibilités</p>
                        </div>
                    </div>
                    <div className="rowWayTo">
                        <div className="displayWayTo">
                            <h1>2. Rendez-vous téléphonique</h1>
                            <p>Un conseiller valide avec vous une date d’intervention qui vous convient</p>
                        </div>
                        <div className="displayWayTo">
                            <h1>4. Intervention pour l’isolation à 1 €</h1>
                            <p>Notre équipe effectue les travaux dans votre domicile. Une fois l’isolation terminée, vous leur remettrez 1 € symbolique</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn"><a href="#formulary">Lancer le test</a></button>
        </div>
    )   
}

export default Radium(wayToDo)
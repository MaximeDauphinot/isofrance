import React, { Component } from 'react';
import Radium from 'radium';
import './Form.css';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';
import Swal from 'sweetalert2'


const style = {
    width: 'auto',
    marginRight: '5px',
}

const dept = (
    <select className="inputstyle" name="deptList" id="departement" required>
        <option value="00">Département*</option>
        <option value="01 - Ain">01 - Ain</option>
        <option value="02 - Aisne">02 - Aisne</option>
        <option value="03 - Allier">03 - Allier</option>
        <option value="04 - Alpes de Haute Provence">04 - Alpes de Haute Provence</option>
        <option value="05 - Hautes Alpes">05 - Hautes Alpes</option>
        <option value="06 - Alpes Maritimes">06 - Alpes Maritimes</option>
        <option value="07 - Ard&#232;che">07 - Ard&#232;che</option>
        <option value="08 - Ardennes">08 - Ardennes</option>
        <option value="09 - Ari&#232;ge">09 - Ari&#232;ge</option>
        <option value="10 - Aube">10 - Aube</option>
        <option value="11 - Aude">11 - Aude</option>
        <option value="12 - Aveyron">12 - Aveyron</option>
        <option value="13 - Bouches du Rh&#244;ne">13 - Bouches du Rh&#244;ne</option>
        <option value="14 - Calvados">14 - Calvados</option>
        <option value="15 - Cantal">15 - Cantal</option>
        <option value="16 - Charente">16 - Charente</option>
        <option value="17 - Charente Maritime">17 - Charente Maritime</option>
        <option value="18 - Cher">18 - Cher</option>
        <option value="19 - Corr&#232;ze">19 - Corr&#232;ze</option>
        <option value="2A - Corse du Sud">2A - Corse du Sud</option>
        <option value="2B - Haute-Corse">2B - Haute-Corse</option>
        <option value="21 - C&#244;te d'Or">21 - C&#244;te d'Or</option>
        <option value="22 - C&#244;tes d'Armor">22 - C&#244;tes d'Armor</option>
        <option value="23 - Creuse">23 - Creuse</option>
        <option value="24 - Dordogne">24 - Dordogne</option>
        <option value="25 - Doubs">25 - Doubs</option>
        <option value="26 - Dr&#244;me">26 - Dr&#244;me</option>
        <option value="27 - Eure">27 - Eure</option>
        <option value="28 - Eure et Loir">28 - Eure et Loir</option>
        <option value="29 - Finist&#232;re">29 - Finist&#232;re</option>
        <option value="30 - Gard">30 - Gard</option>
        <option value="31 - Haute Garonne">31 - Haute Garonne</option>
        <option value="32 - Gers">32 - Gers</option>
        <option value="33 - Gironde">33 - Gironde</option>
        <option value="34 - H&#233;rault">34 - H&#233;rault</option>
        <option value="35 - Ille et Vilaine">35 - Ille et Vilaine</option>
        <option value="36 - Indre">36 - Indre</option>
        <option value="37 - Indre et Loire">37 - Indre et Loire</option>
        <option value="38 - Is&#232;re">38 - Is&#232;re</option>
        <option value="39 - Jura">39 - Jura</option>
        <option value="40 - Landes">40 - Landes</option>
        <option value="41 - Loir et Cher">41 - Loir et Cher</option>
        <option value="42 - Loire">42 - Loire</option>
        <option value="43 - Haute Loire">43 - Haute Loire</option>
        <option value="44 - Loire Atlantique">44 - Loire Atlantique</option>
        <option value="45 - Loiret">45 - Loiret</option>
        <option value="46 - Lot">46 - Lot</option>
        <option value="47 - Lot et Garonne">47 - Lot et Garonne</option>
        <option value="48 - Loz&#232;re">48 - Loz&#232;re</option>
        <option value="49 - Maine et Loire">49 - Maine et Loire</option>
        <option value="50 - Manche">50 - Manche</option>
        <option value="51 - Marne">51 - Marne</option>
        <option value="52 - Haute Marne">52 - Haute Marne</option>
        <option value="53 - Mayenne">53 - Mayenne</option>
        <option value="54 - Meurthe et Moselle">54 - Meurthe et Moselle</option>
        <option value="55 - Meuse">55 - Meuse</option>
        <option value="56 - Morbihan">56 - Morbihan</option>
        <option value="57 - Moselle">57 - Moselle</option>
        <option value="58 - Ni&#232;vr">58 - Ni&#232;vre</option>
        <option value="59 - Nord">59 - Nord</option>
        <option value="60 - Oise">60 - Oise</option>
        <option value="61 - Orne">61 - Orne</option>
        <option value="62 - Pas de Calais">62 - Pas de Calais</option>
        <option value="63 - Puy de D&#244;me">63 - Puy de D&#244;me</option>
        <option value="64 - Pyr&#233;n&#233;es Atlantiques">64 - Pyr&#233;n&#233;es Atlantiques</option>
        <option value="65 - Hautes Pyr&#233;n&#233;es">65 - Hautes Pyr&#233;n&#233;es</option>
        <option value="66 - Pyr&#233;n&#233;es Orientales">66 - Pyr&#233;n&#233;es Orientales</option>
        <option value="67 - Bas Rhin">67 - Bas Rhin</option>
        <option value="68 - Haut Rhin">68 - Haut Rhin</option>
        <option value="69 - Rh&#244;ne">69 - Rh&#244;ne</option>
        <option value="70 - Haute Sa&#244;ne">70 - Haute Sa&#244;ne</option>
        <option value="71 - Sa&#244;ne et Loire">71 - Sa&#244;ne et Loire</option>
        <option value="72 - Sarthe">72 - Sarthe</option>
        <option value="73 - Savoie">73 - Savoie</option>
        <option value="74 - Haute Savoie">74 - Haute Savoie</option>
        <option value="75 - Paris">75 - Paris</option>
        <option value="76 - Seine Maritime">76 - Seine Maritime</option>
        <option value="77 - Seine et Marne">77 - Seine et Marne</option>
        <option value="78 - Yvelines">78 - Yvelines</option>
        <option value="79 - Deux S&#232;vres">79 - Deux S&#232;vres</option>
        <option value="80 - Somme">80 - Somme</option>
        <option value="81 - Tarn">81 - Tarn</option>
        <option value="82 - Tarn et Garonne">82 - Tarn et Garonne</option>
        <option value="83 - Var">83 - Var</option>
        <option value="84 - Vaucluse">84 - Vaucluse</option>
        <option value="85 - Vend&#233;e">85 - Vend&#233;e</option>
        <option value="86 - Vienne">86 - Vienne</option>
        <option value="87 - Haute Vienne">87 - Haute Vienne</option>
        <option value="88 - Vosges">88 - Vosges</option>
        <option value="89 - Yonne">89 - Yonne</option>
        <option value="90 - Territoire de Belfort">90 - Territoire de Belfort</option>
        <option value="91 - Essonne">91 - Essonne</option>
        <option value="92 - Hauts de Seine">92 - Hauts de Seine</option>
        <option value="93 - Seine Saint Denis">93 - Seine Saint Denis</option>
        <option value="94 - Val de Marne">94 - Val de Marne</option>
        <option value="95 - Val d'Oise">95 - Val d'Oise</option>
        <option value="971 - Guadeloupe">971 - Guadeloupe</option>
        <option value="972 - Martinique">972 - Martinique</option>
        <option value="973 - Guyane">973 - Guyane</option>
        <option value="974 - R&#233;union">974 - R&#233;union</option>
        <option value="975 - Saint Pierre et Miquelon">975 - Saint Pierre et Miquelon</option>
        <option value="976 - Mayotte">976 - Mayotte</option>
    </select>
)

const energie = (
    <select className="inputstyle" id="energie" name="energie" required>
        <option value="00 - Énergie de chauffage*">Énergie de chauffage*</option>
        <option value="01 - Gaz naturel">Gaz naturel</option>
        <option value="02 - GPL">GPL</option>
        <option value="03 - Fioul">Fioul</option>
        <option value="04 - Bois">Bois</option>
        <option value="05 - Électricité">Électricité</option>
        <option value="06 - autre">autre</option>
    </select>
)

const uR = "Vous êtes ?*";
const uLive =  "Vous habitez ?*";

class form extends Component { 
    
    handleSubmit(e){
        e.preventDefault();
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const email = document.getElementById('email').value;
        const telephone = document.getElementById('telephone').value;
        const departement = document.getElementById('departement').value;
        const nbrpersonne = document.getElementById('nbrpersonne').value;
        const revenu = document.getElementById('revenu').value;
        const surface = document.getElementById('surface').value;
        const situation = document.getElementById('situation').value;
        const habitation = document.getElementById('habitation').value;
        const energie = document.getElementById('energie').value;
        const annee = document.getElementById('annee').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                nom: nom,   
                prenom: prenom,  
                email: email,
                telephone: telephone,
                departement: departement,
                nbrpersonne: nbrpersonne,
                revenu: revenu,
                surface: surface,
                situation: situation,
                habitation: habitation,
                energie: energie,
                annee: annee
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                Swal.fire({
                    type: 'success',
                    title: 'Bien joué',
                    text: "L'email est envoyé!",
                  })
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                Swal.fire({
                    title: "Mauvaise nouvelle !",
                    text: "IL ya eu un probleme avec l'envoi..",
                    type: "error",
                  });
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
        <ScrollAnimation 
                duration={0.75}
                animateIn='fadeIn'
                animateOut='fadeOut'>
            <div className="simulator">
                <div className="title">
                    <h3>VOTRE SIMULATION EN 60 SECONDES</h3>
                    <h4>TESTEZ VOTRE ÉLIGIBILITÉ</h4>
                </div>
                <div className="alignmentformulary">
                    <form className="form" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" >
                        <div className="row">
                            <input className="inputstyle" type="text" id="nom" name="nom" placeholder="Nom*" value={this.state.nom} required/>
                            <input className="inputstyle" type="text" id="prenom" name="prenom" placeholder="Prenom*" value={this.state.prenom} required/>
                        </div>
                        <div className="row">
                            <input className="inputstyle" type="text" id="email" name="email" placeholder="Email*" value={this.state.email} required/>
                            <input className="inputstyle" type="text" id="telephone" name="telephone" placeholder="Numéro de téléphone*" value={this.state.phone} required/>
                       </div>
                        <div className="row">
                            {dept}
                            <input className="inputstyle" type="text" id="nbrpersonne" name="peopleNumber" placeholder="Nombre de personnes*" required/>
                        </div>
                        <div className="row">
                            <input className="inputstyle" type="text" id="revenu" name="revenu" placeholder="Revenu fiscal €/an *" required/>
                            <input className="inputstyle" type="text" id="surface" name="surface" placeholder="Surface à isoler (m²)*" required/>
                        </div>
                        <div className="row_sd">
                            <div className="rowAlignement">
                                {uR}
                            </div>
                            <div className="rowAlignement">
                                <input className="inputstyle" type="radio" id="situation" name="situation" style={style} value="Propriétaire" required/>
                                <label>Propriétaire</label>
                            </div>
                            <div className="rowAlignement">
                                <input className="inputstyle" type="radio" id="situation" name="situation" style={style} value="Locataire" required/>
                                <label>Locataire</label>
                            </div>
                        </div>
                        <div className="row_sd">
                            <div className="rowAlignement">
                                {uLive}
                            </div>
                            <div className="rowAlignement">
                                <input className="inputstyle" type="radio" id="habitation" name="habitation" style={style} value="Maison" required/>
                                <label>Maison</label>
                            </div>
                            <div className="rowAlignement">
                                <input className="inputstyle" type="radio" id="habitation" name="habitation" style={style} value="Appartement" required/>
                                <label>Appartement</label>
                            </div>
                        </div>
                        <div className="row">
                            <input className="inputstyle" type="text" id="annee" name="annee" placeholder="Année de construction*" required/>
                            {energie}
                        </div>
                        <div className="button">
                            <label>
                                <input type="submit" value="Lancer le test" />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </ScrollAnimation>
        )
    }
}

export default Radium(form); 
import React, { Component } from 'react';
import Radium from 'radium';
import './Form.css';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';

const style = {
    width: 'auto',
    marginRight: '5px',
}

const dept = (
    <select className="inputstyle" name="deptList" id="deptList" required>
        <option value="00">Département*</option>
        <option value="01">01 - Ain</option>
        <option value="02">02 - Aisne</option>
        <option value="03">03 - Allier</option>
        <option value="04">04 - Alpes de Haute Provence</option>
        <option value="05">05 - Hautes Alpes</option>
        <option value="06">06 - Alpes Maritimes</option>
        <option value="07">07 - Ard&#232;che</option>
        <option value="08">08 - Ardennes</option>
        <option value="09">09 - Ari&#232;ge</option>
        <option value="10">10 - Aube</option>
        <option value="11">11 - Aude</option>
        <option value="12">12 - Aveyron</option>
        <option value="13">13 - Bouches du Rh&#244;ne</option>
        <option value="14">14 - Calvados</option>
        <option value="15">15 - Cantal</option>
        <option value="16">16 - Charente</option>
        <option value="17">17 - Charente Maritime</option>
        <option value="18">18 - Cher</option>
        <option value="19">19 - Corr&#232;ze</option>
        <option value="2A">2A - Corse du Sud</option>
        <option value="2B">2B - Haute-Corse</option>
        <option value="21">21 - C&#244;te d'Or</option>
        <option value="22">22 - C&#244;tes d'Armor</option>
        <option value="23">23 - Creuse</option>
        <option value="24">24 - Dordogne</option>
        <option value="25">25 - Doubs</option>
        <option value="26">26 - Dr&#244;me</option>
        <option value="27">27 - Eure</option>
        <option value="28">28 - Eure et Loir</option>
        <option value="29">29 - Finist&#232;re</option>
        <option value="30">30 - Gard</option>
        <option value="31">31 - Haute Garonne</option>
        <option value="32">32 - Gers</option>
        <option value="33">33 - Gironde</option>
        <option value="34">34 - H&#233;rault</option>
        <option value="35">35 - Ille et Vilaine</option>
        <option value="36">36 - Indre</option>
        <option value="37">37 - Indre et Loire</option>
        <option value="38">38 - Is&#232;re</option>
        <option value="39">39 - Jura</option>
        <option value="40">40 - Landes</option>
        <option value="41">41 - Loir et Cher</option>
        <option value="42">42 - Loire</option>
        <option value="43">43 - Haute Loire</option>
        <option value="44">44 - Loire Atlantique</option>
        <option value="45">45 - Loiret</option>
        <option value="46">46 - Lot</option>
        <option value="47">47 - Lot et Garonne</option>
        <option value="48">48 - Loz&#232;re</option>
        <option value="49">49 - Maine et Loire</option>
        <option value="50">50 - Manche</option>
        <option value="51">51 - Marne</option>
        <option value="52">52 - Haute Marne</option>
        <option value="53">53 - Mayenne</option>
        <option value="54">54 - Meurthe et Moselle</option>
        <option value="55">55 - Meuse</option>
        <option value="56">56 - Morbihan</option>
        <option value="57">57 - Moselle</option>
        <option value="58">58 - Ni&#232;vre</option>
        <option value="59">59 - Nord</option>
        <option value="60">60 - Oise</option>
        <option value="61">61 - Orne</option>
        <option value="62">62 - Pas de Calais</option>
        <option value="63">63 - Puy de D&#244;me</option>
        <option value="64">64 - Pyr&#233;n&#233;es Atlantiques</option>
        <option value="65">65 - Hautes Pyr&#233;n&#233;es</option>
        <option value="66">66 - Pyr&#233;n&#233;es Orientales</option>
        <option value="67">67 - Bas Rhin</option>
        <option value="68">68 - Haut Rhin</option>
        <option value="69">69 - Rh&#244;ne</option>
        <option value="70">70 - Haute Sa&#244;ne</option>
        <option value="71">71 - Sa&#244;ne et Loire</option>
        <option value="72">72 - Sarthe</option>
        <option value="73">73 - Savoie</option>
        <option value="74">74 - Haute Savoie</option>
        <option value="75">75 - Paris</option>
        <option value="76">76 - Seine Maritime</option>
        <option value="77">77 - Seine et Marne</option>
        <option value="78">78 - Yvelines</option>
        <option value="79">79 - Deux S&#232;vres</option>
        <option value="80">80 - Somme</option>
        <option value="81">81 - Tarn</option>
        <option value="82">82 - Tarn et Garonne</option>
        <option value="83">83 - Var</option>
        <option value="84">84 - Vaucluse</option>
        <option value="85">85 - Vend&#233;e</option>
        <option value="86">86 - Vienne</option>
        <option value="87">87 - Haute Vienne</option>
        <option value="88">88 - Vosges</option>
        <option value="89">89 - Yonne</option>
        <option value="90">90 - Territoire de Belfort</option>
        <option value="91">91 - Essonne</option>
        <option value="92">92 - Hauts de Seine</option>
        <option value="93">93 - Seine Saint Denis</option>
        <option value="94">94 - Val de Marne</option>
        <option value="95">95 - Val d'Oise</option>
        <option value="971">971 - Guadeloupe</option>
        <option value="972">972 - Martinique</option>
        <option value="973">973 - Guyane</option>
        <option value="974">974 - R&#233;union</option>
        <option value="975">975 - Saint Pierre et Miquelon</option>
        <option value="976">976 - Mayotte</option>
    </select>
)

const energie = (
    <select className="inputstyle" name="energie" id="deptList" required>
        <option value="00">Énergie de chauffage*</option>
        <option value="01">Gaz naturel</option>
        <option value="02">GPL</option>
        <option value="03">Fioul</option>
        <option value="04">Bois</option>
        <option value="05">Électricité</option>
        <option value="06">autre</option>
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
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                nom: nom,   
                prenom: prenom,  
                email: email,
                telephone: telephone
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
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
                        {/* <div className="row">
                            {dept}
                            <input className="inputstyle" type="text" name="peopleNumber" placeholder="Nombre de personnes*" required/>
                        </div>
                        <div className="row">
                            <input className="inputstyle" type="text" name="revenu" placeholder="Revenu fiscal €/an *" required/>
                            <input className="inputstyle" type="text" name="surface" placeholder="Surface à isoler (m²)*" required/>
                        </div>
                        <div className="row_sd">
                            <div className="rowAlignement">
                                {uR}
                            </div>
                            <div className="rowAlignement">
                                <input className="inputstyle" type="radio" name="situation" style={style} value="Propriétaire" required/>
                                <label>Propriétaire</label>
                            </div>
                            <div className="rowAlignement">
                                <input className="inputstyle" type="radio" name="situation" style={style} value="Locataire" required/>
                                <label>Locataire</label>
                            </div>
                        </div>
                        <div className="row_sd">
                            <div className="rowAlignement">
                                {uLive}
                            </div>
                            <div className="rowAlignement">
                                <input className="inputstyle" type="radio" name="habitation" style={style} value="Maison" required/>
                                <label>Maison</label>
                            </div>
                            <div className="rowAlignement">
                                <input className="inputstyle" type="radio" name="habitation" style={style} value="Appartement" required/>
                                <label>Appartement</label>
                            </div>
                        </div>
                        <div className="row">
                            <input className="inputstyle" type="text" name="annee" placeholder="Année de construction*" required/>
                            {energie}
                        </div> */}
                        <div className="button">
                            <label>
                                <input type="submit" value={ this.state.buttonText } />
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
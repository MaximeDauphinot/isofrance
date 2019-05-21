import React from 'react';
import Radium from 'radium';
import './Formulary.css';
import FormPresentation from './FormPresentation/FormPresentation';
import Form from './Form/Form';

const formulary = () => {
    return (
        <div className="formulary" >
            <FormPresentation />
            <Form />
        </div>
    )
}

export default Radium(formulary);
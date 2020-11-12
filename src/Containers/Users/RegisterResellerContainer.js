import React from 'react';
import { FormRegisterasiReseller } from '../../Components/Index';
import imgLogo from '../../Modules/Images/logo.png';

const RegisterResellerContainer = () => {
    return (
        <div className="register-reseller-section">
            <div class="jumbotron">
                <img alt="complex" src={imgLogo} />
                <h1>Alzhaffron Indonesia</h1>
            </div>
            <div className="form-section">
                <h1 className="title">Formulir Menjadi Reseller</h1>
                <FormRegisterasiReseller />
            </div>
        </div>
    )
}

export default RegisterResellerContainer

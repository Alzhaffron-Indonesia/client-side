import React from 'react';
import { FormRegisterasiReseller } from '../../Components/Index';
import swal from 'sweetalert';
import imgLogo from '../../Modules/Images/logo.png';

const RegisterResellerContainer = () => {
    const handleSubmit = (data) => {
        swal({                
            title: "Page on Progress",
            icon: 'error',
            button: "Okay!",
        })
    }
    return (
        <div className="register-reseller-section">
            <div class="jumbotron">
                <img alt="complex" src={imgLogo} />
                <h1>Alzhaffron Indonesia</h1>
            </div>
            <div className="form-section">
                <h1 className="title">Formulir Menjadi Reseller</h1>
                <FormRegisterasiReseller onSubmit={(data) => handleSubmit(data)} />
            </div>
        </div>
    )
}

export default RegisterResellerContainer

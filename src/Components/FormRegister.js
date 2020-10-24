import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";

import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import {
    fade,    
    withStyles,    
  } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),        
      },
      width: '100%'
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '100%',
      marginBottom: '1rem',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',        
        '"Lato"',        
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,    
    readOnly,
    meta: { touched, error, warning },
}) => (
    <div>               
            <BootstrapInput type={type} placeholder={label} id="bootstrap-input" />
            {touched &&
                    ((error && <p style={{ color: "red", marginBottom: "0px" }}>{error} </p>) ||
                        (warning && <p style={{ color: "brown" }}>{warning} </p>))
            } 
    </div>                             
    )

class FormRegister extends Component {    
    render(){
        return (
            <div className="font-lato" >
                <form onSubmit={this.props.handleSubmit} >
                    <Grid container className="component-login mx-auto mt-5">
                        <div className="form-login">
                            <p className="form-title">Registerasi</p>                              

                            <Field type="text" name="email" component={renderField} label="Email" />                                
                            <Field type="password" name="password" component={renderField} label="Password" />                                                                                                                           
                            <Button variant="contained" className="btn-login font-lato" type="submit" disabled={this.props.submitting}>
                                Masuk
                            </Button>
                            <p className="link-text mt-4">Belum terdaftar? Yuk <Link to="/"> <span> Registrasi </span>
                                </Link></p>
                                
                        </div>                        
                    </Grid>
                </form>
            </div>
        )
    }            
}

FormRegister = reduxForm({
    form: "formLoginUser",
    enableReinitialize: true,
    validate: false,   
})(FormRegister);


export default FormRegister;

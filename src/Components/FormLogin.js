import React, { useState } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import {
    fade,    
    withStyles,    
  } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import userAction from '../Modules/Redux/Action/User';
import { useHistory } from "react-router-dom";


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


const FormLogin = (props) => {
  let history = useHistory();
  const [state, setState] = useState({    
    email: null,
    password: null
  })
  const onChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value.toString() })
  }
  const onSubmit = async () => {
    await props.login(state, history)
  }

  return (
    <div>
        <div className="font-lato" >                                
                    <Grid container className="component-login mx-auto mt-5">
                        <div className="form-login">
                            <p className="form-title">Masuk</p>        
                            <div>
                              <BootstrapInput type="email" id="email" value={state.email} onChange={onChange} placeholder="Email" />                        
                            </div>
                            <div>
                              <BootstrapInput type="password" id="password" value={state.password} onChange={onChange} placeholder="Password" />                        
                            </div>
                            <Button variant="contained" className="btn-login font-lato" onClick={onSubmit}>
                                Masuk
                            </Button>
                            <p className="link-text mt-4">Belum terdaftar? Yuk <Link to="/register"> <span> Registrasi </span>
                                </Link></p>
                                
                        </div>                        
                    </Grid>                
            </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
      login: (userData, history) => dispatch(userAction.login(userData, history)),      
  }
}

export default connect(null, mapDispatchToProps)(FormLogin)
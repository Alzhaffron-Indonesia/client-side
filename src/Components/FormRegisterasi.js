import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';
import { Button, FormControlLabel, Grid, Radio, RadioGroup } from '@material-ui/core';
import {
    fade,    
    withStyles,    
  } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { connect } from 'react-redux';
import 'date-fns';
import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,  
  DatePicker,
} from '@material-ui/pickers';
import userAction from '../Modules/Redux/Action/User';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

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


function getSteps() {
  return ['Data Diri', 'Dokumen'];
}


const FormRegisterasi = (props) => {  
  let history = useHistory();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);  
  const steps = getSteps();  
  const [state, setState] = useState({    
    name: null,
    email: null,
    // jenisKelamin: 'lk',
    whatsapp: null,
    birthday: null,
    password: null,    
    document: {
      numberKTP: null,      
      bankAccountName: null,    
      bankAccountNumber: null,              
    },
  })
  const onChangeDoc = (e) => {
    setState({ ...state, document: {
      ...state.document,
      [e.target.name]: e.target.value.toString() 
    }})
  }
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value.toString() })
  }  
  const handleDateChange = (date) => {
    setState({...state, birthday: format(date, 'yyyy-MM-dd') });
  };
  const onSubmit = async () => {    
    await props.register(state, history)
  }
  useEffect(() => {    
    console.log(state)    
  });  

  const handleNext = () => {    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>    
        <Grid container className="component-regis mx-auto mt-5">
        <div className="form-regis">
        <p className="form-title">Registerasi</p>                              
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>       
              <p className="form-info">Masukkan data berikut dengan benar.</p>                        
                        {activeStep === 0 && <div>
                            <BootstrapInput                                
                               name="name"
                               type="text"
                               onChange={onChange} 
                               value={state.name} 
                               placeholder="Nama" />                                    
                            <BootstrapInput type="email" name="email" value={state.email} onChange={onChange} placeholder="Email" />                                    
                            {/* <RadioGroup row aria-label="position" onChange={onChange} value={state.jenisKelamin} name="jenisKelamin" defaultValue={state.jenisKelamin}>                      
                                <FormControlLabel value="lk" control={<Radio color="primary" />} label="Laki-laki" />
                                <FormControlLabel value="pr" control={<Radio color="primary" />} label="Perempuan" />
                            </RadioGroup> */}
                            <div className="form-group">                
                                <BootstrapInput type="text" name="whatsapp" value={state.whatsapp} onChange={onChange} placeholder="Nomor WhatsApp" />                                                                  
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <div className="date-input">
                                    <DatePicker
                                      disableFuture
                                      openTo="year"
                                      format="dd/MM/yyyy"  
                                      name="birthday"                                
                                      views={["year", "month", "date"]}
                                      value={state.birthday}
                                      placeholder="Tanggal Lahir"                                      
                                      onChange={handleDateChange}
                                    />                               

                                  </div>

                                </MuiPickersUtilsProvider>
                            </div>
                            <BootstrapInput type="password" name="password" value={state.password} onChange={onChange} placeholder="Kata Sandi" />            
                            </div>}
                        {activeStep === 1 && <div className="nested">                          
                            <BootstrapInput                                                          
                              name="numberKTP"
                              type="text"
                              onChange={onChangeDoc} 
                              value={state.document.numberKTP} 
                              placeholder="Nomor KTP" />            
                            <BootstrapInput                               
                              name="bankAccountName"
                              type="text"
                              onChange={onChangeDoc} 
                              value={state.document.bankAccountName}
                              placeholder="Nama Bank" />            
                            <BootstrapInput type="text" name="bankAccountNumber" value={state.document.bankAccountNumber} onChange={onChangeDoc} placeholder="Nomor Rekening" />            

                            </div>}
                        <div className="btn-regis-group">
                        {activeStep === 0 ? (
                            ''
                        ) : (
                            <Button onClick={handleBack} className="btn-regis font-lato">
                                Back
                            </Button>                         
                        ) }                        
                        {activeStep === steps.length - 1 ? (
                            <Button variant="contained" className="btn-regis font-lato" onClick={onSubmit}>
                                Registrasi
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                className="btn-regis font-lato"
                                onClick={handleNext}                                
                            >
                                Selanjutnya
                            </Button>
                        )}                                         
                        </div>                    
                        <p className="link-text mt-4">Sudah terdaftar? Yuk <Link to="/login"> <span> Masuk </span>
                            </Link></p>   
          </div>
        )}
      </div>
      </div>                        
      </Grid>    
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
      register: (userData, history) => dispatch(userAction.register(userData, history)),      
  }
}

export default connect(null,mapDispatchToProps)(FormRegisterasi)
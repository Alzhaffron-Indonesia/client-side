import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { reduxForm, Field } from "redux-form";

import { Link } from 'react-router-dom';
import { Button, FormControlLabel, Grid, Radio, RadioGroup } from '@material-ui/core';
import {
    fade,    
    withStyles,    
  } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

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

function getSteps() {
  return ['Data Diri', 'Dokumen'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
          <div>
            <Field type="text" name="nama" component={renderField} label="Nama" />                                
            <Field type="text" name="email" component={renderField} label="Email" />
            <RadioGroup row aria-label="position" name="position" defaultValue="lk">        
                <FormControlLabel value="lk" control={<Radio color="primary" />} label="Laki-laki" />
                <FormControlLabel value="pr" control={<Radio color="primary" />} label="Perempuan" />
            </RadioGroup>
            <div className="form-group">
                <Field type="text" name="noWa" component={renderField} label="Nomor WhatsApp" />
                <Field type="text" name="tglLahir" component={renderField} label="Tanggal Lahir" />
            </div>
            <Field type="text" name="password" component={renderField} label="Kata Sandi" />                                                                                                                                       
          </div>

      );
    case 1:
      return (
        <div>
            <Field type="text" name="email" component={renderField} label="Nomor KTP" />                                            
            <Field type="text" name="password" component={renderField} label="Nomor Rekening" />                                                                                                                                       
            <Field type="text" name="password" component={renderField} label="Nama Bank" />                                                                                                                                                   
        </div>
      );
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

const FormRegisterasi = (props) => {
  const { handleSubmit,  submitting } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);  
  const steps = getSteps();

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
    <form onSubmit={handleSubmit} >
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
                                {getStepContent(activeStep)}                                                                                     
                        
                        <div className="btn-regis-group">
                        {activeStep === 0 ? (
                            ''
                        ) : (
                            <Button onClick={handleBack} className="btn-regis font-lato">
                                Back
                            </Button>                         
                        ) }                        
                        {activeStep === steps.length - 1 ? (
                            <Button variant="contained" className="btn-regis font-lato" type="submit" disabled={submitting}>
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
                        <p className="link-text mt-4">Belum terdaftar? Yuk <Link to="/"> <span> Registrasi </span>
                            </Link></p>   
          </div>
        )}
      </div>
      </div>                        
      </Grid>
    </form>                                    
    </div>
  );
}
export default reduxForm({
    form: 'simple'  // a unique identifier for this form
  })(FormRegisterasi)
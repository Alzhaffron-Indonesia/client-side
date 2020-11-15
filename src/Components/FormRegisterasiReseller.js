import React, { useState } from 'react'
import { reduxForm, Field } from "redux-form";
import { purple } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Grid, Typography } from '@material-ui/core';
import {
    fade,    
    withStyles,    
  } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { FaCamera } from 'react-icons/fa';

const PurpleCheckbox = withStyles({
    root: {
      color: 'white',
      BackgroundColor: 'white',
      '&$checked': {
        color: purple[600],
      },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

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
            <Typography variant="caption">
                {label}
            </Typography>            
            <BootstrapInput type={type} id="bootstrap-input" />
            {touched &&
                    ((error && <p style={{ color: "red", marginBottom: "0px" }}>{error} </p>) ||
                        (warning && <p style={{ color: "brown" }}>{warning} </p>))
            } 
    </div>                             
    )

const FormRegisterasiReseller = (props) => {
        const { handleSubmit,  submitting } = props;
        const [state, setState] = useState({
            checkedRules: false,
          });
        const handleChange = (event) => {
            console.log("ANJAY")
            setState({ ...state, [event.target.name]: event.target.checked });
        };
        return (
            <div className="font-lato" >
                <form onSubmit={handleSubmit} className="component-reg-reseller" >
                    <Grid container className="form-reg-reseller">
                        <div className="form-group-reg-reseller">
                            <p className="form-title">Data Diri</p>                              

                            <Field type="text" name="nama" component={renderField} label="Nama Lengkap" />                                
                            <Field type="email" name="email" component={renderField} label="Alamat Email" /> 
                            <Field type="text" name="wa" component={renderField} label="No WhatsApp" /> 
                            <Field type="text" name="tglLahir" component={renderField} label="Tanggal Lahir" /> 
                        </div>                        
                        <div className="form-group-reg-reseller">
                            <p className="form-title">Dokumen</p>                              

                            <Field type="text" name="noktp" component={renderField} label="No KTP" />                                
                            <Typography variant="caption">
                                Foto KTP
                            </Typography>    
                            <input
                                accept="image/*"
                                style={{display: 'none'}}
                                id="icon-button-file"
                                multiple
                                type="file"
                                name="fotoKtp"
                            />
                            <label className="input-file" htmlFor="icon-button-file">
                                <Button
                                    variant="contained"                                                                    
                                    endIcon={<FaCamera/>}
                                    component="span"
                                >                                
                                </Button>
                            </label>
                            <div className="form-group">
                                <Field type="text" name="noWa" component={renderField} label="Nomor WhatsApp" />
                                <Field type="text" name="tglLahir" component={renderField} label="Tanggal Lahir" />
                            </div>
                            <Typography variant="caption">
                                Foto Halaman Depan Buku Tabungan
                            </Typography>   
                            <input
                                accept="image/*"
                                style={{display: 'none'}}
                                id="icon-button-file"
                                multiple
                                type="file"
                                name="fotoKtp"
                            />
                            <label className="input-file" htmlFor="icon-button-file">
                                <Button
                                    variant="contained"                                                                    
                                    endIcon={<FaCamera/>}
                                    component="span"
                                >                                
                                </Button>
                            </label>
                            
                        </div>                        
                        <div className="form-group-reg-reseller">
                            <p className="form-title">Alamat Pengiriman</p>                              

                            <Field type="text" name="prov" component={renderField} label="Provinsi" />
                            <Field type="text" name="kota" component={renderField} label="Kota/Kabupaten" /> 
                            <div className="form-group">
                                <Field type="text" name="kec" component={renderField} label="Kecamatan" />
                                <Field type="text" name="kdpos" component={renderField} label="Kode Pos" />
                            </div>
                            <Typography variant="caption" display="block" >
                                Alamat
                            </Typography>
                            <textarea rows="4" display="block" className="textarea-input" name="alamat" /> 
                                
                        </div>                                             
                    </Grid>
                    <div>
                        <p className="link-text mt-4">
                            <PurpleCheckbox
                                checked={state.checkedRules}
                                onChange={handleChange}
                                name="checkedRules"
                                color="primary"
                            />
                            Saya menyetujui <Link to="/"> <span> Syarat dan Ketentuan </span></Link> Alzhaffron Indonesia 
                            </p>    
                        <Button variant="contained" className="btn font-lato" type="submit" disabled={submitting}>
                            Submit
                        </Button>
                    </div>   
                </form>
            </div>
        )
    
}
export default reduxForm({
    form: 'simple'  // a unique identifier for this form
  })(FormRegisterasiReseller)

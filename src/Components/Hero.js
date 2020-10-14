import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import imgHero from '../Modules/Images/heroImg.png';
import '../Modules/colors.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,            
  },
  paper: {    
    width: '80vw',
    margin: '0 auto'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    marginLeft: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  heroDesc: {
    maxWidth: '90%',
    marginTop: '1em',
  },
  heroImg: {
    marginTop: '1em',
    paddingBottom: '0 !important'
  },
  caption: {
      maxWidth: '70%'
  }
}));

const Hero = () => {    
  const classes = useStyles();

  return (
    <div className={`hero-root ${classes.root}`}>
      <div className={classes.paper}>
        <Grid className="hero-section" container spacing={2} justify="space-between" alignItems="center">          
          <Grid item md={6} className={classes.heroDesc}>
            <Grid item container direction="column" spacing={2}>
              <Grid item >
                <Typography className="font-lato" variant="h3" gutterBottom>
                    Ingin Mulai Berbisnis Bersama kami ?
                </Typography>
                <Typography className={classes.caption} variant="body2" gutterBottom>
                    Menjadi Reseller produk kami dan hasilkan keuntungan hingga jutaan rupiah setiap bulannya.
                </Typography>
                <Grid className="btn-hero" >
                    <button>Pelajari Selengkapnya</button>
                    <button >Registrasi</button>
                </Grid>                
              </Grid>              
            </Grid>            
          </Grid>
          <Grid item md={6} className={classes.heroImg}>            
            <img className={classes.img} alt="complex" src={imgHero} />            
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Hero;
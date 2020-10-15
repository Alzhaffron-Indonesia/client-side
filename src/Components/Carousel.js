import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import imgTesti from '../Modules/Images/testi/1.png'
import '../Modules/colors.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,        
  },
  paper: {        
    width: '90%',
    margin: '0 auto'
  },
  image: {
    width: 128,
    height: 128,
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
  },  
}));

const Carousel = () => {    
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <Grid className="carousel-section" container justify="space-between" alignItems="center">          
          <Grid item md={6} className={classes.heroDesc}>            
              <Grid item direction="column" className="testi-desc">
                <Typography className="font-lato" variant="body1" gutterBottom>
                    “ Bisnisnya simple, tapi hasilnya Masya Allah banget. Awalnya coba-coba tapi ga tau kenapa jadi ketagihan gini, apalagi produknya yang menyehatkan bisa kita pakai juga untuk sehari-hari. Recommended banget deh “                                
                </Typography>                                         
                <Typography className="font-lato" variant="body1" gutterBottom>
                    <b>Muhammad Ali Abigael</b>
                </Typography>                                         
                <Typography className="font-lato" variant="body1" gutterBottom>
                S1 Teknik Industri Brawijaya
                </Typography>                                         
              </Grid>                                  
          </Grid>
          <Grid item md={6} className={classes.heroImg}>            
            <img className="testi-img" alt="complex" src={imgTesti} />            
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Carousel;
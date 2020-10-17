import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

const Carousel = (props) => {    
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <Grid className="carousel-section" container justify="space-between" alignItems="center">          
          <Grid item md={6} className={classes.heroDesc}>            
              <Grid item direction="column" className="carousel-desc">
                <Typography className="font-lato" variant="body1" gutterBottom>
                    {props.textDefinisi}
                </Typography>                                         
                <Typography className="font-lato" variant="body1" gutterBottom>
                    <b>{props.name}</b>
                </Typography>                                         
                <Typography className="font-lato" variant="body1" gutterBottom>
                    {props.asal}
                </Typography>                                         
              </Grid>                                  
          </Grid>
          <Grid item md={6} className={classes.heroImg}>            
            <img className="carousel-img" alt="complex" src={props.imgCarousel} />            
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Carousel;
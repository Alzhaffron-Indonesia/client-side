import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import '../Modules/colors.scss'
import { Button } from '@material-ui/core';

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

const ProductDetail = (props) => {    
  const classes = useStyles();
  const [count, setCount] = useState(50);

  const increaseTtl = () => {
      setCount(count + 1)
  }
  const decreaseTtl = () => {
      if (count !== 0) setCount(count - 1);
  }

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <Typography className="font-lato" style={{marginTop: '2em', fontWeight: 'bold'}} variant="h4" gutterBottom>
          <span className="title-section">Product</span>                
        </Typography>   
        <Grid className="carousel-section" container justify="space-between" alignItems="center">          
          <Grid item md={8} direction="column" className={classes.heroDesc}>            
              <Grid item direction="column" className="carousel-desc">
                <Typography className="font-lato" variant="h4" gutterBottom>
                    {props.title}
                </Typography>                                         
                <Typography className="font-lato" variant="h6" gutterBottom>
                    Rp {props.harga}
                </Typography>                                         
                <Typography className="font-lato" variant="body2" gutterBottom>
                    {props.textDefinisi}
                </Typography>                                                                                        
              </Grid>   
              <div className="form-product">
                  <div className="quantity-section">
                      <button variant="contained" onClick={decreaseTtl} className="btn-decrement font-lato" >
                          -
                      </button>
                      <div className="desc">
                          <span className="title">Kuantitas</span>
                          <div className="total">
                              <input type="text" name="ttlProduct" value={count}></input>
                              <p>Box</p>
                          </div>
                          
                      </div>                
                      <button variant="contained" onClick={increaseTtl} className="btn-increment font-lato" >
                          +
                      </button>
                      

                  </div>
                  <Button variant="contained" className="btn-product font-lato" >
                      Masuk
                  </Button>
              </div>                               
          </Grid>
          <Grid item md={4} className={classes.heroImg}>            
            <img className="carousel-img" alt="complex" src={props.imgCarousel} />            
          </Grid>        
        </Grid>
      </div>
    </div>
  );
}

export default ProductDetail;
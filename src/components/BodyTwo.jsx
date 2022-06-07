import * as React from 'react';
import '../App.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Rasmlar1 from '../img/about.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%',paddingTop:'100px' }}>
      <Grid justifyContent='center' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={10} lg={5}>
          <img src={Rasmlar1} style={{width:'100%',height:'90%'}} />
        </Grid>
        <Grid sx={{paddingBottom:'5%'}} item xs={11} md={10} lg={6}>
          <Typography variant='h5' sx={{paddingTop:'5%',color:'#FDBE33',fontWeight:'bold'}}>Welcome to Builderz</Typography>
          <Typography variant='h3' sx={{fontWeight:'bold',paddingTop:'2%'}}>25 Years Experience</Typography>
          <Typography variant='h6'sx={{paddingTop:'3%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.</Typography>
          <Typography variant='h6' sx={{paddingTop:'2%',paddingBottom:'4%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.</Typography>
          {/* <button className='button2'  style={{ fontSize:'20px',border:'1px solid white' ,padding:'2%',paddingLeft:'4%',paddingRight:'4%'}}>Learn More</button> */}
          <button className='button2'  style={{ fontSize:'20px',border:'1px solid white' ,padding:'2%',paddingLeft:'4%',paddingRight:'4%'}}>Learn More</button>
        </Grid>
       
      </Grid>
    </Box>
  );
}

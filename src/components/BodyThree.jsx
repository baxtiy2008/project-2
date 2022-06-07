import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Typography from  '@mui/material/Typography';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sm={6} lg={3} md={6} sx={{background:'#030F27',padding:'50px',}}>
          <Typography sx={{paddingTop:'60px'}}>
              <EngineeringIcon sx={{color:'#FEC953',fontSize:'70px'}} />
              <span style={{paddingLeft:'10px',color:'#FDBE33',fontSize:'30px',fontWeight:'bold',position:'absolute'}}>109</span>
              <span style={{paddingLeft:'10px',paddingTop:'44px',color:'#FDBE33',position:'absolute'}}>EXPERT WORKERS</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={6} sx={{background:'#030F27',padding:'50px',}}>
        <Typography sx={{paddingTop:'60px'}}>
              <MapsHomeWorkIcon sx={{color:'#FEC953',fontSize:'70px'}} />
              <span style={{paddingLeft:'10px',color:'#FDBE33',fontSize:'30px',fontWeight:'bold',position:'absolute'}}>485</span>
              <span style={{paddingLeft:'10px',paddingTop:'44px',color:'#FDBE33',position:'absolute'}}>HAPPY CLIENTS</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={6} sx={{background:'#FDBE33',padding:'50px',}}>
        <Typography sx={{paddingTop:'60px'}}>
              <EngineeringIcon sx={{color:'#030F27',fontSize:'70px'}} />
              <span style={{paddingLeft:'10px',color:'#030F27',fontSize:'30px',fontWeight:'bold',position:'absolute'}}>789</span>
              <span style={{paddingLeft:'10px',paddingTop:'44px',color:'#030F27',position:'absolute'}}>COMPLETED PROJECTS</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={6} sx={{background:'#FDBE33',padding:'50px',}}>
        <Typography sx={{paddingTop:'60px'}}>
              <EngineeringIcon sx={{color:'#030F27',fontSize:'70px'}} />
              <span style={{paddingLeft:'10px',color:'#030F27',fontSize:'30px',fontWeight:'bold',position:'absolute'}}>890</span>
              <span style={{paddingLeft:'10px',paddingTop:'44px',color:'#030F27',position:'absolute'}}>RUNNING PROJECTS</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

import * as React from 'react';
import Navbar from './Navbar'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%',background:'#FDBE33' }}  >
      <Grid justifyContent='center' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={10} lg={3} md={3}>
          <Typography variant="h2" component="div" gutterBottom>Builderz</Typography>
        </Grid>
        <Grid item xs={10}  lg={2.5} md={2.5}>
          <Typography sx={{paddingTop:'10px'}}>
               <CalendarMonthIcon sx={{fontSize:'50px'}} /><span style={{paddingTop:'5px',position:'absolute'}}>Opening Hour</span> <span style={{paddingTop:'27px',position:'absolute'}}>Mon - Fri, 8:00 - 9:00</span>
           </Typography>
        </Grid>
        <Grid item xs={10} lg={2} md={2}>
          <Typography sx={{paddingTop:'10px'}}>
          <CalendarMonthIcon sx={{fontSize:'50px'}} /> <span style={{paddingTop:'5px',position:'absolute'}}>Call Us</span> <span style={{paddingTop:'27px',position:'absolute'}}>+012 345 6789</span>
          </Typography>
        </Grid>
        <Grid item xs={10} lg={2} md={2}>
        <Typography sx={{paddingTop:'10px'}}>
               <CalendarMonthIcon sx={{fontSize:'50px'}} /><span style={{paddingTop:'5px',position:'absolute'}}>Email Us</span> <span style={{paddingTop:'27px',position:'absolute'}}>info@example.com</span>
           </Typography>
        </Grid>
      </Grid>
      <Navbar />
    </Box>
  );
}

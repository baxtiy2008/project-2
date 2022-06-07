import * as React from 'react';
import './Servises.css'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rasm1 from '../img/about.jpg'
import Rasm2 from '../img/portfolio-5.jpg'
import Rasm3 from '../img/service-3.jpg'
import Rasm4 from '../img/service-4.jpg'
import Rasm5 from '../img/service-5.jpg'
import Rasm6 from '../img/service-6.jpg'
import Typography from  '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1,paddingBottom:'5%' }}>
      <Box sx={{textAlign:'center'}}>
        <Typography sx={{paddingTop:'5%',color:'#FDBE33' ,fontSize:'25px',fontWeight:'bold'}}>Our Services</Typography>
        <Typography sx={{fontSize:'35px',fontWeight:'bold'}}>We Provide Services</Typography>

      </Box>
      <Grid justifyContent='center' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item className='gridone'  xs={3} >
            <Item >
              <Typography ><img  src={Rasm3} style={{width:'100%'}} /></Typography>
              <Typography className='yashirin1' sx={{position:'relative',marginTop:'-200px',paddingBottom:'35%',color:'white'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.</Typography>
              <Typography sx={{fontWeight:'bold',fontSize:'20px',background:'#030F26',color:'#FDBE33',padding:'3%',textAlign:'left',marginTop:'-2%'}}>Building Construction  {/* <span className='span1' style={{color:'black'}}>+</span> */}     </Typography>
              
            </Item>
          </Grid>
          <Grid item className='gridone'  xs={3}>
          <Item>
              <Typography ><img  src={Rasm4} style={{width:'100%'}} /></Typography>
              <Typography className='yashirin1' sx={{position:'relative',marginTop:'-200px',paddingBottom:'35%',color:'white'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.</Typography>
              <Typography sx={{fontWeight:'bold',fontSize:'20px',background:'#030F26',color:'#FDBE33',padding:'3%',textAlign:'left',marginTop:'-2%'}}>Building Construction  {/* <span className='span1' style={{color:'black'}}>+</span> */}     </Typography>

            </Item>          
            </Grid>
          <Grid item className='gridone' xs={3} >
          <Item>
              <Typography ><img  src={Rasm5} style={{width:'100%'}} /></Typography>
              <Typography className='yashirin1' sx={{position:'relative',marginTop:'-200px',paddingBottom:'35%',color:'white'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.</Typography>
              <Typography sx={{fontWeight:'bold',fontSize:'20px',background:'#030F26',color:'#FDBE33',padding:'3%',textAlign:'left',marginTop:'-2%'}}>Building Construction  {/* <span className='span1' style={{color:'black'}}>+</span> */}     </Typography>

            </Item>          </Grid>
          {/* <Grid item xs={4} >
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=5</Item>
          </Grid>
          <Grid item  xs={4}>
            <Item>xs=6</Item>
          </Grid> */}
{/* xs={2} sm={4} md={4} */}
      </Grid>
      <Grid justifyContent='center' sx={{paddingTop:'20px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid className='gridone' item xs={3} >
          <Item>
              <Typography ><img  src={Rasm4} style={{width:'100%'}} /></Typography>
              <Typography className='yashirin1' sx={{position:'relative',marginTop:'-200px',paddingBottom:'35%',color:'white'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.</Typography>
              <Typography sx={{fontWeight:'bold',fontSize:'20px',background:'#030F26',color:'#FDBE33',padding:'3%',textAlign:'left',marginTop:'-2%'}}>Building Construction  {/* <span className='span1' style={{color:'black'}}>+</span> */}     </Typography>

            </Item>          </Grid>
          <Grid className='gridone' item xs={3}>
          <Item>
              <Typography ><img  src={Rasm5} style={{width:'100%'}} /></Typography>
              <Typography className='yashirin1' sx={{position:'relative',marginTop:'-200px',paddingBottom:'35%',color:'white'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.</Typography>
              <Typography sx={{fontWeight:'bold',fontSize:'20px',background:'#030F26',color:'#FDBE33',padding:'3%',textAlign:'left',marginTop:'-2%'}}>Building Construction  {/* <span className='span1' style={{color:'black'}}>+</span> */}     </Typography>

            </Item>          </Grid>
          <Grid className='gridone' item  xs={3}>
          <Item>
              <Typography ><img  src={Rasm6} style={{width:'100%'}} /></Typography>
              <Typography className='yashirin1' sx={{position:'relative',marginTop:'-200px',paddingBottom:'35%',color:'white'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.</Typography>
              <Typography sx={{fontWeight:'bold',fontSize:'20px',background:'#030F26',color:'#FDBE33',padding:'3%',textAlign:'left',marginTop:'-2%'}}>Building Construction  {/* <span className='span1' style={{color:'black'}}>+</span> */}     </Typography>

            </Item>          </Grid>
      </Grid>
    </Box>
  );
}

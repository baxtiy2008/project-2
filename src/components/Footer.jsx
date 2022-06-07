import * as React from 'react';
import './Main.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from  '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%',marginTop:'5%' }}>
      <Grid sx={{paddingTop:'5%',paddingBottom:'5%',background:'#030F27',color:'white'}} justifyContent='center' container rowSpacing={0} columnSpacing={{ xs: 3, sm: 4, md: 1 }}>
        <Grid item xs={12} md={6} lg={3} sx={{paddingBottom:'5%'}}>
          <Typography sx={{marginLeft:'3%'}}>
             <Typography  sx={{fontSize:'20px',fontWeight:'bold',color:'#FDBE33'}}>Office Contact <hr width='30%' color='#FDBE33' /></Typography>
              <Typography sx={{marginTop:'5%'}}><LocationOnIcon /><span style={{marginLeft:'5px',position:'absolute'}}> 123 Street, New York, USA</span></Typography>
              <Typography><PhoneIcon /><span style={{marginLeft:'10px',position:'absolute'}}>+012 345 67890</span></Typography>
              <Typography><EmailIcon /><span style={{marginLeft:'10px',position:'absolute'}}> info@example.com</span></Typography>
              <Typography sx={{marginTop:'5%'}}>
                  <TwitterIcon className='icon1' sx={{border:'1px solid #474E5E',borderRadius:'30px',padding:'10px'}} />
                  <FacebookIcon className='icon1' sx={{border:'1px solid #474E5E',marginLeft:'2%',borderRadius:'30px',padding:'10px'}}/>
                  <YouTubeIcon className='icon1' sx={{border:'1px solid #474E5E',borderRadius:'30px',marginLeft:'2%',padding:'10px'}}/>
                  <InstagramIcon className='icon1' sx={{border:'1px solid #474E5E',borderRadius:'30px',marginLeft:'2%',padding:'10px'}}/>
                  <LinkedInIcon className='icon1' sx={{border:'1px solid #474E5E',borderRadius:'30px',marginLeft:'2%',padding:'10px'}}/>
              </Typography>
           </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={2} sx={{paddingBottom:'10%'}}>
        <Typography sx={{marginLeft:'3%'}}>
             <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#FDBE33'}}>Services Areas <hr width='30%' color='#FDBE33' /></Typography>
              <Typography className='typo1' sx={{marginTop:'5%'}}> > <span  className='typo2'>Building Construction</span> </Typography>
              <Typography className='typo1' sx={{marginTop:'1%'}}> > <sapn  className='typo2'>House Renovation</sapn> </Typography>
              <Typography className='typo1' sx={{marginTop:'1%'}}> > <sapn  className='typo2'>Architecture Design</sapn></Typography>
              <Typography  className='typo1' sx={{marginTop:'1%'}}> > <span  className='typo2'>Interior Design</span></Typography>
              <Typography className='typo1' sx={{marginTop:'1%'}} > > <span  className='typo2'>Painting</span></Typography>
           </Typography>      
             </Grid>
        <Grid item xs={12} md={6} lg={2} sx={{paddingBottom:'10%'}}>
        <Typography sx={{marginLeft:'3%'}}>
             <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#FDBE33'}}>Useful Pages <hr width='30%' color='#FDBE33' /></Typography>
              <Typography className='typo1' sx={{marginTop:'5%'}}> > <span  className='typo2'>About Us</span> </Typography>
              <Typography className='typo1' sx={{marginTop:'1%'}}> > <sapn  className='typo2'>Contact Us</sapn> </Typography>
              <Typography className='typo1' sx={{marginTop:'1%'}}> > <sapn  className='typo2'>Our Team</sapn></Typography>
              <Typography  className='typo1' sx={{marginTop:'1%'}}> > <span  className='typo2'>Projects</span></Typography>
              <Typography className='typo1' sx={{marginTop:'1%'}} > > <span  className='typo2'>Testimonial</span></Typography>
           </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Typography sx={{marginLeft:'3%'}}>
             <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#FDBE33'}}>Newsletter <hr width='30%' color='#FDBE33' /></Typography>
              <Typography  sx={{marginTop:'5%'}}>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</Typography>
              <TextField
          id="outlined-required"
          sx={{background:'white',width:'100%',}}
          placeholder='Email here'
        /><button className='qwer'  style={{width:'30%',padding:'10px',paddingTop:'19px',paddingBottom:'19px',position:'relative',marginLeft:'-30%',}}>Submit</button>
           </Typography>
        </Grid>
        <Grid item xs={9.9} sx={{marginLeft:'1%',paddingTop:'5%'}}>
          <Typography className='asdf' sx={{textAlign:'center',}}>
            <Typography sx={{paddingTop:'1%',paddingBottom:'1%'}}>
              <span className='pra' style={{ paddingRight:'1%'}} >Terms of use</span>
              <span className='a1' ></span>

              <span className='pra' style={{marginLeft:'1%', paddingRight:'1%'}}>Pravicy policy</span>
              <span className='a1' ></span>
              <span className='pra' style={{marginLeft:'1%', paddingRight:'1%'}}>Cookies</span>
              <span className='a1' ></span>

              <span className='pra' style={{marginLeft:'1%', paddingRight:'1%'}}>Help</span>
              <span className='a1' ></span>

              <span className='pra' style={{marginLeft:'1%'}}>FQAs</span>
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography sx={{marginLeft:'3%',fontSize:'20px',marginTop:'5%'}}>
            © <span className='pre' >Your Site Name</span>, All Right Reserved.

          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography sx={{textAlign:'right',fontSize:'20px',marginTop:'5%'}}>
            Designed By<span className='pre'>  React Js Codex</span>

          </Typography>
        </Grid>
      </Grid>
      
    </Box>
  );
}

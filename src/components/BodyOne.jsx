import * as React from 'react';
import './Main.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from  '@mui/material/Typography';
import Rasmc1 from '../img/carousel-1.jpg';
import Rasmc2 from '../img/carousel-2.jpg';
import Rasmc3 from '../img/carousel-3.jpg';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';




const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const images = [
    {
      label: 'Constructor1',
      imgPath:Rasmc1,
    },
    {
      label: 'Constructor2',
      imgPath:Rasmc2,
    },
    {
      label: 'Constructor3',
      imgPath:Rasmc3,
    },
  ];

export default function BasicGrid() {
    
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
    const handleStepChange = (step) => {
        setActiveStep(step);
      };
    
    return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={12} lg={12} md={12} xl={12}> */}
          {/* <Item> */}
              {/* <ol> */}
                  {/* <li></li> */}
                  {/* <li></li> */}
                  {/* <li></li> */}
              {/* </ol> */}
          {/* </Item> */}
        {/* </Grid> <br/><br/> */}
        <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
          {/* <Item> */}
              {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      > */}
        {/* <Typography sx={{}}>{images[activeStep].label}</Typography> */}
      {/* </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                    position: 'relative',
                  height: '100%',
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
                />
              
            ) : null}
            
          <Typography variant='' placement='top' sx={{alignItems:'center',justifyContent:'',position:'absolute',color:'white',height:'90.5%',textAlign:'center',width:'100%',marginTop:'-44%',paddingTop:'4%'}}>
              <Typography variant='h4'sx={{}}>We are profissional </Typography> <br/><br/><br/>
              <Typography variant='h2'sx={{fontWeight:'bold'}}>For Your Dream Project</Typography> <br/><br/><br/><br/>
              <Typography className='button1' variant='button'sx={{border:'2px solid white',padding:'1%'}}>Get A Quote</Typography>
          </Typography> 

          
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box>

          {/* <Typography variant='' placement='top' sx={{alignItems:'center',justifyContent:'',position:'absolute',color:'white',textAlign:'center',width:'100%',marginTop:'-400px'}}>
              <Typography variant='h4'sx={{}}>We are profissional </Typography> <br/><br/><br/>
              <Typography variant='h2'sx={{fontWeight:'bold'}}>For Your Dream Project</Typography> <br/><br/>
              <Typography variant='button'sx={{border:'2px solid white',padding:'3%',textDecoration:'underline',fontSize:'20px'}}>Get a quote</Typography>
          </Typography>  */}
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
            sx={{
              marginTop:'-50%',
              color:'white'
            }}
              size="large"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button sx={{marginTop:'-50%',color:'white' }} size="large" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              
            </Button>
          }
        />
      </Box>
          {/* </Item> */}
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4} xl={12} sx={{bgcolor:'black',height:'45vh'}}>
          {/* <Item sx={{bgcolor:'black',height:'50vh'}}>  */}
          <br/><br/><br />
                <Typography sx={{display: 'flex',color:'orange'}}>
                    <EngineeringIcon sx={{height:'100px',width:'100px',border:'1px dashed white',borderRadius:'50%',padding:'1%'}}/> 
                    <Typography> <br/>
                        <Typography sx={{fontWeight:'bold',fontSize:'25px'}}>Expert worker</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magni?</Typography>
                    </Typography>
                </Typography>
          {/* </Item> */}
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4} xl={12} sx={{bgcolor:'orange',height:'45vh'}}>
          {/* <Item >  */}
            <br/><br/><br />
                <Typography sx={{display: 'flex',color:'black'}}>
                    <EngineeringIcon sx={{height:'100px',width:'100px',border:'1px dashed white',borderRadius:'50%',padding:'1%'}}/> 
                    <Typography> <br/>
                        <Typography sx={{fontWeight:'bold',fontSize:'25px'}}>Quality Work</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magni?</Typography>
                    </Typography>
                </Typography>
          {/* </Item> */}
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4} xl={12} sx={{bgcolor:'black',height:'45vh'}}>
          {/* <Item sx={{bgcolor:'black',height:'50vh'}}>  */}
          <br/><br/><br />
                <Typography sx={{display: 'flex',color:'orange'}}>
                    <SupportAgentIcon sx={{height:'100px',width:'100px',border:'1px dashed white',borderRadius:'50%',padding:'1%'}}/> 
                    <Typography> <br/>
                        <Typography sx={{fontWeight:'bold',fontSize:'25px'}}>24/7 Support</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magni?</Typography>
                    </Typography>
                </Typography>
          {/* </Item> */}
        </Grid>
      </Grid>
    </Box>
  );
}

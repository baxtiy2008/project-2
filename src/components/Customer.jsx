import * as React from 'react';
import './Customer.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img1 from '../img/quote.png'
import Img2 from '../img/testimonial-2.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {

  return (
    <div>

        <Box className='playbox1'>
      <Box className='one12'>
          <Box>
                <Typography><img style={{borderRadius:'50%'}} src={Img2} /></Typography>
                <Typography><img src={Img1} /></Typography>
            <Typography variant='h5' sx={{fontWeight:'bold',color:'#FDBE33'}} >Customer Name</Typography>
            <Typography sx={{color:'white'}} >profession</Typography>
            <Typography variant='h6' sx={{color:'white'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, voluptatibus cum dicta<br /> id quasi laudantium molestias velit facilis culpa voluptatem<br /> architecto eos animi magnam aspernatur quo hic et</Typography>

          </Box>
          
      </Box>
        </Box>
    </div>
  );
}

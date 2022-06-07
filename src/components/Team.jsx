import * as React from 'react';
import './Main.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { CardActionArea } from '@mui/material';
import Rasm1 from '../img/team-1.jpg'
import Rasm2 from '../img/team-2.jpg'
import Rasm3 from '../img/team-3.jpg'
import Rasm4 from '../img/team-4.jpg'
import Box from '@mui/material/Box';

export default function ActionAreaCard() {
  return (
      <Box>
          <Box sx={{textAlign:'center'}}>
        <Typography sx={{paddingTop:'5%',color:'#FDBE33' ,fontSize:'25px',fontWeight:'bold'}}>Our Services</Typography>
        <Typography sx={{fontSize:'35px',fontWeight:'bold',paddingBottom:'5%'}}>We Provide Services</Typography>

      </Box>
          <Grid justifyContent='center' container >
              <Grid>
                    <Card  sx={{marginLeft:'10%' , width:'80%' }}>
                        <Box  className='box3'>
                                    {/* <CardActionArea> */}
                                        <CardMedia
                                        component="img"
                                        height="90%"
                                        image={Rasm1}
                                        alt="usta 1"
                                        />
                                        <CardContent className='card' sx={{textAlign:'center'}}>
                                        <Typography className='liz' gutterBottom variant="h5"  component="div">
                                        Adam Phillips
                                        </Typography>
                                        {/* </CardContent> */}
                                        {/* <CardContent  sx={{textAlign:'center'}}> */}
                                        <Typography variant="body2" color="white">
                                        CEO & Founder
                                        </Typography>
                                        </CardContent>
                                    {/* </CardActionArea> */}
                            </Box>
                    </Card>
              </Grid>

              <Grid>
                    <Card  sx={{marginLeft:'10%' , width:'80%' }}>
                        <Box  className='box3'>
                                    {/* <CardActionArea> */}
                                        <CardMedia
                                        component="img"
                                        height="90%"
                                        image={Rasm2}
                                        alt="usta 1"
                                        />
                                        <CardContent className='card' sx={{textAlign:'center'}}>
                                        <Typography className='liz' gutterBottom variant="h5"  component="div">
                                        Dylan Adams
                                        </Typography>
                                        {/* </CardContent> */}
                                        {/* <CardContent  sx={{textAlign:'center'}}> */}
                                        <Typography variant="body2" color="white">
                                        Civil Engineer
                                        </Typography>
                                        </CardContent>
                                    {/* </CardActionArea> */}
                            </Box>
                    </Card>
              </Grid>

              <Grid >
                    <Card  sx={{ marginLeft:'10%' ,width:'80%' }}>
                        <Box  className='box3'>
                                    {/* <CardActionArea> */}
                                        <CardMedia
                                        component="img"
                                        height="90%"
                                        image={Rasm3}
                                        alt="usta 1"
                                        />
                                        <CardContent className='card' sx={{textAlign:'center'}}>
                                        <Typography className='liz' gutterBottom variant="h5"  component="div">
                                        Jhon Doe
                                        </Typography>
                                        {/* </CardContent> */}
                                        {/* <CardContent  sx={{textAlign:'center'}}> */}
                                        <Typography variant="body2" color="white">
                                        Interior Designer
                                        </Typography>
                                        </CardContent>
                                    {/* </CardActionArea> */}
                            </Box>
                    </Card>
              </Grid>

              <Grid>
                    <Card  sx={{marginLeft:'10%' , width:'80%' }}>
                        <Box  className='box3'>
                                    {/* <CardActionArea> */}
                                        <CardMedia
                                        component="img"
                                        height="90%"
                                        image={Rasm4}
                                        alt="usta 1"
                                        />
                                        <CardContent className='card' sx={{textAlign:'center'}}>
                                        <Typography className='liz' gutterBottom variant="h5"  component="div">
                                        Josh Dunn
                                        </Typography>
                                        {/* </CardContent> */}
                                        {/* <CardContent  sx={{textAlign:'center'}}> */}
                                        <Typography variant="body2" color="white">
                                        Painter
                                        </Typography>
                                        </CardContent>
                                    {/* </CardActionArea> */}
                            </Box>
                    </Card>
              </Grid>
          </Grid>
      </Box>
  );
}

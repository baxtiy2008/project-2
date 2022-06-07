import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Container fixed>
    <Box sx={{ flexGrow: 1 }}>
    <Typography sx={{textAlign:'center',padding:'5%'}}>
          <p style={{color:'gold'}}>Latest Blog </p>
          <h1><b>Latest From Our Blog</b></h1>
        </Typography>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4}>
            <Item>
              <img src="../img/blog-1.jpg" alt="" style={{width:'100%'}} />
              <h3 style={{color:'gold',backgroundColor:'black',padding:'5%'}}>Lorem ipsum dolored</h3>
              <Typography sx={{backgroundColor:'#F3F6FFFF'}}>
              <Typography sx={{padding:"5%"}}>By Admin  In  Construction</Typography>
              <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Tempora fugiat provident dolores
                Tempora fugiat provident  labore.</Typography></Typography>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
            <img src="../img/blog-2.jpg" alt=""style={{width:'100%'}} />
              <h3 style={{color:'gold',backgroundColor:'black',padding:'5%'}}>Lorem ipsum dolored</h3>
              <Typography sx={{backgroundColor:'#F3F6FFFF'}}>
              <Typography sx={{padding:"5%"}}>By Admin  In  Construction</Typography>
              <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Tempora fugiat provident dolores
                Tempora fugiat provident  labore</Typography></Typography>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
            <img src="../img/blog-3.jpg" alt="" style={{width:'100%'}}/>
              <h3 style={{color:'gold',backgroundColor:'black',padding:'5%'}}>Lorem ipsum dolored</h3>
              <Typography sx={{backgroundColor:'#F3F6FFFF'}}>
              <Typography sx={{padding:"5%"}}>By Admin  In  Construction</Typography>
              <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Tempora fugiat provident dolores
                Tempora fugiat provident  labore</Typography></Typography>
            </Item>
          </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

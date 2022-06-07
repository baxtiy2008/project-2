import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import "./Abaut.css";
import CountUp from "react-countup";

export default function About () {
  return (
    <div>    
        {/* <Servise />
        <Video />
        <Team />
        <SimpleAccordion />
        <Page />
        <BlogEnter /> */}
        

        <Box className="footer wow fadeIn" data-wow-delay="0.3s" >
          <Box className="container" >
            <Grid className="row" style={{display:'flex'}} >
              <Grid item xs={2} className="col-md-6 col-lg-3" style={{width:'50%',marginLeft:'5%'}} >
                <Box className="footer-contact"style={{}} >
                  <Typography variant="h2">Office Contact</Typography>
                  <Typography>
                    <i className="fa fa-map-marker-alt"></i>123 Street, New
                    York, USA
                  </Typography>
                  <Typography>
                    <i className="fa fa-phone-alt"></i>+012 345 67890
                  </Typography>
                  <Typography>
                    <i className="fa fa-envelope"></i>info@example.com
                  </Typography>
                  <Box className="footer-social">
                    <a href="/twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="youtube">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="instagramm">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={2} className="col-md-6 col-lg-3" style={{marginLeft:'5%',width:'50%'}}>
                <Box className="footer-link"style={{}}>
                  <Typography variant="h2">Services Areas</Typography>
                  <a href="">Building Construction</a>
                  <a href="">House Renovation</a>
                  <a href="">Architecture Design</a>
                  <a href="">Interior Design</a>
                  <a href="">Painting</a>
                </Box>
              </Grid>
              <Grid xs={2} className="col-md-6 col-lg-3" style={{marginLeft:'5%',width:'50%'}}>
                <Box className="footer-link"style={{}}>
                  <Typography variant="h2">Useful Pages</Typography>
                  <a href="">About Us</a>
                  <a href="">Contact Us</a>
                  <a href="">Our Team</a>
                  <a href="">Projects</a>
                  <a href="">Testimonial</a>
                </Box>
              </Grid>
              <Grid xs={2} className="col-md-6 col-lg-3" style={{marginLeft:'5%',width:'50%',marginRight:'5%'}}>
                <Box className="newsletter">
                  <Typography variant="h2">Newsletter</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non vulpu
                  </Typography>
                  <Box className="form">
                    <input className="form-control" placeholder="Email here" style={{width:'100%'}}></input>
                    
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="container footer-menu" style={{}}>
            <Box className="f-menu">
              <a href="">Terms of use</a>
              <a href="">Privacy policy</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FQAs</a>
            </Box>
          </Box>
          <Box className="container copyright"style={{}}>
            <Box className="row"style={{}}>
              <Box className="col-md-6">
                <Typography>
                  &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                </Typography>
              </Box>
              <Box className="col-md-6">
                <Typography>
                  Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Button href="#" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </Button>
      
    </div>
  );
};


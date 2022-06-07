import * as React from 'react';
import { Accordion, Grid, Container } from '@mui/material/';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import "./Accordion.css"
export default function SimpleAccordion() {
    return (

        <div style={{paddingBottom:'5%'}}>
            <Container >
                <Grid mt="3%" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography color="#FDBE33">Frequently Asked  Questions</Typography>
                    <Typography color="#030F27" variant="h4">You may Ask</Typography>

                </Grid>

                <Grid mt="3%" container>


                    <Grid pr="3%" pl="4%" xs={12} sm={12} md={6} lg={6} sx={{borderRight:'1px solid #FDBE33'}}className="fadeInLeft" >

                        <Accordion className="fadeInLeft">
                            <AccordionSummary
                                expandIcon={< AddIcon sx={{color:'#FDBE33'}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{marginTop:'3%'}}>
                            <AccordionSummary
                                expandIcon={<AddIcon sx={{color:'#FDBE33'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

<Accordion sx={{marginTop:'3%'}}>
                            <AccordionSummary
                                expandIcon={<AddIcon sx={{color:'#FDBE33'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion><Accordion sx={{marginTop:'3%'}}>
                            <AccordionSummary
                                expandIcon={<AddIcon sx={{color:'#FDBE33'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion><Accordion sx={{marginTop:'3%'}}>
                            <AccordionSummary
                                expandIcon={<AddIcon sx={{color:'#FDBE33'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                 
                    <Grid pl="3%" pr="4%" xs={12} sm={12} md={6} lg={6}>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<AddIcon sx={{color:'#FDBE33'}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

<Accordion sx={{marginTop:'3%'}}>
                            <AccordionSummary
                                expandIcon={<AddIcon sx={{color:'#FDBE33'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{marginTop:'3%'}}>
                            <AccordionSummary
                                expandIcon={<AddIcon sx={{color:'#FDBE33'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{marginTop:'3%'}}>
                            <AccordionSummary
                                expandIcon={<AddIcon sx={{color:'#FDBE33'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{marginTop:'3%'}}>
                            <AccordionSummary
                                expandIcon={<AddIcon sx={{color:'#FDBE33'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>




                </Grid>
            </Container>
        </div>
    );
}
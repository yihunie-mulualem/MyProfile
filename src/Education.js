
import react from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Link,
    Alert,
    Snackbar,
    AppBar,
    Fade, Box, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Education(){
    return (
        <Container sx={{padding:"50px"}}>
            <Typography>Education Background</Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Preparatory and Secondary School</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>I attended Preparatory and secondary School in Amanuel General Secondary and Preparatory School. </Typography>
                    <Typography>During my secondary school, life was sweet then I had nothing to worry about.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Bsc In Software Engineering</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    I Had Graduated from Bahir Dar University(Bahir Dar,Ethiopia) on 24-Aug-2022 with Software Engineering with Comulative CGPA 3.78.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                    Training
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h5">
                        Cisco Network Accadamy 
                    </Typography>
                    <Typography >
                        Introduction to Networks
                    </Typography>
                    <Typography variant="h5">
                    System Development
                    </Typography>
                    <Typography >
                        Fullstack software developemnt Training by Minab IT Solutions plc and Bahir Dar University
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
     
    )
}
export default Education;
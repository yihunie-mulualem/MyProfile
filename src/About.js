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
function About() {
    return (
        <Container sx={{ padding: "50px" }}>
            <Typography sx={{ color:"gray" }}>About Me</Typography>
            <Typography sx={{color:"gray"}}><b>Whom AM I ?</b></Typography>
            <Typography sx={{color:"gray"}}>
               <b>Hi I'm Yihunie Mulualem Melese,</b> am from Addis Ababa,Ethiopia, I enjoyed writing code, solving problems.
            </Typography>
            <Typography sx={{ color: "gray" }} >
              I graduated with a Bachelor’s degree in Software Engineering from Bahir Dar University in Ethiopia on August 24, 2022. Since graduating, I have gained two years of hands-on experience in system development, working on diverse projects that have honed my technical skills and deepened my understanding of software engineering principles
            </Typography>
            <Typography sx={{ color:"gray" }} >
                I have soft skills like teamwork, effective communication skills,problem solving,eager to learn and contribute to the strongability to handle the staff and work pressure,have good technical and analytical skills.
            </Typography>
            <Typography sx={{ color: "gray" }} >
                <b>Career Objective:</b> To render and perform the necessary instructions as stipulated by an organization and attain some duties assigned to me for the better growth and development of the organization.
            </Typography>
            <Box sx={{ backgroundColor: "yellow", width: "100%", height:"100px", padding:"40px"}}>
                <Typography>
                   <b> I am happy to let you know </b>
                </Typography>
                <Typography> <b>that 10+ projects done sucessfully!</b>

                </Typography>
                <Button sx={{ padding:"45px" }} ><Link  to="/">Hire Me</Link></Button>
            </Box>
        </Container>

)
}
export default About;
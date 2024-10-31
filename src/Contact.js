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
    Fade, Box, Accordion, AccordionSummary, AccordionDetails, LinearProgress, Card, CardMedia, CardActions, CardContent
} from '@mui/material';
import { Phone, Email, GitHub } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
    return (
        <Container spacing={2}>
            <Box sx={{ alignItems: "center", display:"flex",flexDirection:"column",gap:1 ,mt:"10px"}}>
                <Typography sx={{ color: "gray" }}>Get In Touch</Typography>
                <Typography sx={{ alignItems: "center" }}><b>Contact</b></Typography>
            </Box>
          
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box display="flex" alignItems="center" mb={8} mt={5 }>
                        <LocationOnIcon sx={{
                            mr:1
                        }} />
                        <Typography sx={{color:"blue"} }>Addis Ababa,Ethiopia</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={8} mt={5 }>
                        <Phone sx={{ mr: 1 }} />
                        <Typography sx={{color:"blue"} }>+251948263781</Typography> {/* Replace with your actual phone number */}
                    </Box>
                    <Box display="flex" alignItems="center" mb={8} >
                        <Email sx={{ mr: 1 }} />
                        <Typography sx={{color:"blue"} }>yihuniemulualem220@gmail.com</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={1 }>
                        <GitHub sx={{ mr: 1 }} />
                        <Typography sx={{color:"blue"} }>https://github.com/yihunie-mulualem</Typography>
                    </Box>
                 
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="Name"
                        name="name"
                        fullWidth
                        margin="normal" // Optional: adds spacing above and below the field
                    />
                    <TextField
                        variant="outlined"
                        label="Email"
                        name="Email"
                        fullWidth
                        margin="normal" />
                    <TextField
                        variant="outlined"
                        label="Subject"
                        name="subject"
                        fullWidth
                        margin="normal" />
                    <TextField
                        variant="outlined"
                        label="Message"
                        name="message"
                        fullWidth
                        margin="normal"
                    />
                    <Button color="primary" variant="contained" fullWidth>
                    Submit
                    </Button>
                </Grid>
            </Grid>
        </Container>
      
    )
}
export default Contact;
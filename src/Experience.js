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
import { AccessAlarm } from '@mui/icons-material'; // Import any icon you prefer
import './work.css';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
function Experience() {
    return (
        <Container spacing={2}>
            <Grid Container spacing={2}>
                <Grid item xs={6}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color:"gray"
                    } }> <Typography sx={{ color: "gray" }}>Work </Typography>
                        <Typography><b>Work Experience</b></Typography></Box>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Align items to the start for better left positioning
                position: 'relative',
                padding: '20px',
            }}>
            <Box className="vertical-bar"
                sx={{
                    width: '6px',
                    height: '500px',
                    backgroundColor: 'gray',
                    position: 'absolute', // Use absolute positioning
                    left: '60px', // Adjust this value to move farther from the left
                    top: '0', // Adjust this value to move farther from the left

                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    position:"absolute",
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50px', // Width of the circle
                    height: '50px', // Height of the circle
                    borderRadius: '50%', // Makes it a circle
                    backgroundColor: 'lightblue',
                    marginTop: "40px",
                    left: '60px', // Adjust this value to move farther from the left

                }}>
                <EditIcon sx={{ color: 'white', fontSize: 24 }} />  
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                position: "absolute",
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '50px', // Width of the circle
                                height: '50px', // Height of the circle
                                borderRadius: '50%', // Makes it a circle
                                backgroundColor: 'lightblue',
                                marginTop: "160px",
                                left: '60px', // Adjust this value to move farther from the left

                            }}>
                            <EditIcon sx={{ color: 'blue', fontSize: 24 }} />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                position: "absolute",
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '50px', // Width of the circle
                                height: '50px', // Height of the circle
                                borderRadius: '50%', // Makes it a circle
                                backgroundColor: 'lightblue',
                                marginTop: "280px",
                                left: '60px', // Adjust this value to move farther from the left
                            }}>
                            <EditIcon sx={{ color: 'violet', fontSize: 24 }} />
                        </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sx={{  marginLeft: "120px"}}>
                    <Card sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start', // Align items to the start for better left positioning
                        position: 'relative',
                        padding: '20px',
                    }}><Typography variant="h5">Internship Practitioner software Engineer </Typography>
                        <Typography>Mern Stack Practitioner at Dan Energy Ethiopia for three Months</Typography></Card>

                    <Card sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start', // Align items to the start for better left positioning
                        position: 'relative',
                        padding: '20px',
                    }}><Typography variant="h5">Internship</Typography>
                        <Typography>Internship at Amhara Region Science and Technology Incubation Center for four Months</Typography></Card>
                    <Card sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start', // Align items to the start for better left positioning
                        position: 'relative',
                        padding: '20px',
                    }}><Typography variant="h5">Programmer</Typography>
                        <Typography>System Developer at Berhan Bank startin from March,28 2023 upto Present !!!</Typography></Card>
                </Grid>
            </Grid>
        </Container>

    )
}
export default Experience;
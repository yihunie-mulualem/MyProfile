import react, { useState, useEffect } from 'react';
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
    Fade, Box 

} from '@mui/material';
function Home() {
    const [showFirst, setShowFirst] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirst((prev) => !prev);
        }, 2000); 

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <Box sx={{
                display: 'flex', justifyContent: 'left', height: '100vh', padding: '50px'}}>
                <Box sx={{ position: 'absolute', width: 400, height: 100 }}>
                    <Fade in={showFirst} timeout={{ enter: 500, exit: 500 }}>
                        <Box sx={{ position: 'absolute', width: '100%', height: '100%', borderRadius: 1, paddingTop:'34px' }}>
                            <Typography sx={{ color: "blue", fontSize:"30px" }}>Hi!</Typography>
                            <Typography sx={{ color: "blue", fontSize:"30px" }}>I’m Yihunie Mulualem</Typography>
                            <Box>
                                <Typography>Web Developer
                                 </Typography>
                            <Button variant="outlined">Download Cv</Button>
                            </Box>
                        </Box>
                       
                    </Fade>
                    <Fade in={!showFirst} timeout={{ enter: 500, exit: 500 }}>
                        <Box sx={{ position: 'absolute', width: '100%', height: '100%', borderRadius: 1, paddingTop: '23px' }}>
                            <Typography sx={{ fontSize: "30px",color:"blue" }} >Humbleness</Typography>
                            <Typography sx={{ fontSize:"30px",color:"blue"} }>is what I’m good at</Typography>
                            <Box>
                            <Button variant="outlined">View Portfolio</Button>
                            </Box>
                        </Box>
                    </Fade>
                </Box>
            </Box>
        </>
    )
}
export default Home;
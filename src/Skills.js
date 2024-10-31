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
    Fade, Box, Accordion, AccordionSummary, AccordionDetails, LinearProgress, Card, CardMedia, CardActions,CardContent
} from '@mui/material';
import  MaterialUI  from './MaterialUI.png';
import css from './css.png';
import reactjs from './reactjs.png';
import netcore from './asp.netcore.png';
import Javascriptlogo from './Javascriptlogo.png';
import * as React from 'react';
import Larvel from './Screenshot_2_Laravel.png';
import Php from './Screenshot_2_Laravel.png';
import javascript from './Javascriptlogo.png';
import Mysqllogo from './Mysqllogo.png';
import sql from './Sqllogo.png';
import CSharp from './Screenshot_2C#.png';
import php from './Screenshot_2PHP.png';
import figma from './Screenshot_2figma.png';
     function Skills() {
    return (
        <Container spacing={2}>
            <Typography variant="h6" sx={{ color: "gray" }}> My Speciality</Typography>
            <Typography sx={{ color: "gray" }}>These are my skills, I specialize on the following tools</Typography>
            <Typography>I have hard Skills on these tools C#,PHP,Css,HTML,Java, C++.</Typography>
            <Grid container spacing={2}>

                <Grid item xs={6}>
            <Card>
                <CardMedia
                    component="img"
                    image={MaterialUI}
                    alt="Material UI Logo"
                    sx={{ width: 30, height: 50, margin: 'auto', mt: 2 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Material UI
                    </Typography>
                </CardContent>
                    </Card>        
             <Card>
                <CardMedia
                    component="img"
                    image={netcore}
                    alt=""
                    sx={{ width: 30, height: 50, margin: 'auto', mt: 2 }}
                >

                </CardMedia>
                <CardContent>
                    <Typography>
                    Asp.Net core
                    </Typography>
                        </CardContent>
                    </Card>
                <Card>
                <CardMedia
                    component="img"
                    image={reactjs}
                    alt="Reactjs"
                    sx={{ width: 30, height: 50, margin: 'auto', mt: 2 }}
                >

                </CardMedia>
                <CardContent>
                    <Typography>
                        React js
                    </Typography>
                        </CardContent>
                    </Card>
                <Card>
                <CardMedia
                    component="img"
                    image={sql}
                    alt="Microsoft Sql Database server"
                    sx={{ width: 80, height: 50, margin: 'auto', mt: 2 }}
                >

                </CardMedia>
                <CardContent>
                    <Typography>
                      Microsoft Sql Database Server 2019
                    </Typography>
                </CardContent>
                </Card>
                </Grid>
            <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={figma}
                            alt="figma logo"
                            sx={{ width: 50, height: 50, margin: 'auto', mt: 2 }}
                        >
                        </CardMedia>
                        <CardContent>
                          UI/Ux Figma Design
                        </CardContent>
                    </Card>
                    <Card>
                        <CardMedia
                            component="img"
                            image={javascript}
                            alt="Javascript Image"
                            sx={{ width: 50, height: 50, margin: 'auto', mt: 2 }}
                        >
                        </CardMedia>
                        <CardContent>
                            Javascript
                        </CardContent>
                    </Card>
                    <Card>
                        <CardMedia
                            component="img"
                            image={Mysqllogo }
                            alt="Mysql Database logo"
                            sx={{width:50,height:50,margin:"auto",mt:2}}
                             >
                        </CardMedia>
                        <CardContent>
                        Mysql Database
                        </CardContent>
                    </Card>
                    <Card>
                        <CardMedia
                            component="img"
                            image={Larvel}
                            alt="Laravel Logo"
                            sx={{width:50,height:50,margin:"auto",mt:2} }
                        >
                        </CardMedia>
                        <CardContent>
                        Laravel,Php framework
                        </CardContent>
                    </Card>
                   
                </Grid>

            </Grid>
        </Container>
    )
}
export default Skills;
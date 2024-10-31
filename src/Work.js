
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Work() {
    return (
        <Container sx={{ padding: "50px" }}>
            <Typography sx={{color:"gray"} }>My Recent work</Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Share Management System</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>The system handles essential functions like tracking shareholder information, managing share distributions, processing dividends, updating share values, and maintaining ownership records. It also helps streamline compliance with regulatory requirements and provides reporting features, enabling efficient handling of shareholder communications and share transaction history.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Reconsilation System</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                       The system automates the process of comparing internal transaction records with external statements(like EtSwitch,Pss,Telebirr,Mpessa) to detect discrepancies, errors, or potential fraud  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        Planning Management System
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                       The system helps to organize, track, and optimize the planning of resources, projects, and strategic initiatives of the bank.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        Dispatch Management System
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        The system helps to manages the process of delivering debit and credit cards to customers, ensuring efficient tracking and handling throughout dispatch, delivery, and activation.
                        The system helps banks streamline logistics, improve customer experience, and maintain data security and compliance.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        Dispute Managemet System 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
The system helps to manage and resolve disputes related to customer transactions, services, and other financial issues effectively. This system streamlines the dispute resolution process, ensures compliance with regulatory requirements, and maintains customer trust                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        Leave Managemet System
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
The system is aimed at efficiently handling employee leave requests, approvals, tracking, and reporting. Its goals are centered around creating a streamlined, transparent, and easily accessible platform for managing time-off and leave balances                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}
export default Work;
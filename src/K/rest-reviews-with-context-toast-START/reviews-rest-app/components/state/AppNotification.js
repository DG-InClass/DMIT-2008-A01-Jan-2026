// ~/components/state/AppNotification.js

import { useState, createContext } from 'react';

import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { create } from '@mui/material/styles/createTransitions';
//     \______/                     \___/
//   My name or "alias"               Actual export name

// This allows other components to send information
// via React's "context" in the background
export const AppNotificationContext = createContext({});

export default function AppNotification(props) {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [severity, setSeverity] = useState('success');

    const showNotification = ({message, severity}) => {
        setText(message);
        setSeverity(severity);
        // display the message
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    // <Snackbar> gives the "toast" functionality
    // <MuiAlert> gives some styling appropriate for alert
    // The rest of our component is going to handle the
    // information details for the notification.
    return <AppNotificationContext.Provider value={{showNotification}}>
        {props.children}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <MuiAlert elevation={6} variant="filled"
                onClose={handleClose} severity={severity}
                sx={{ width: '100%' }}
            >
                {text}
            </MuiAlert>
        </Snackbar>
    </AppNotificationContext.Provider>
}

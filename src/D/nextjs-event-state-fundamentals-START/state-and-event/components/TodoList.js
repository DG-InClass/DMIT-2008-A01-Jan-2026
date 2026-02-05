// ~/components/TodoList.js
import {Box, Button, Grid, TextField} from '@mui/material';
// React's useState hook allows us to manage
// the internal state/data of our component
// in a way that the React framework can also
// notice and handle the "re-render" whenever
// state changes
import { useState } from 'react';

// React components are designed to have a
// single parameter, commonly called "props".
// It's an object that will hold the info
// sent into the component.
// You can choose either to just call it props
// or you can provide a destructured object
// if you want to identify specific property
// names for the props.
export default function TodoList(props) {
    // Using the useState hook is a matter
    // of applying Array Destructuring syntax.
    // useState is important in order to hook
    // into React's rendering processes.
    const [todoText, setTodoText] = useState('');
    //     \______/  \_________/             \/
    //      getter   setter func              |
    //                       initial value   -|

    const onTodoTextChange = (event) => {
        console.log(event.target.value);
        setTodoText(event.target.value);
    }
    const onAddTodoClick = () => {
        console.log('Clicked the button');
    }

    return <>
        <TextField
            id="standard-basic"
            label="New Todo?"
            variant="standard"
            sx={ {width: '100%'} }
            onChange={onTodoTextChange}
            value={todoText}
        />
        <Button
            variant='contained'
            onClick={onAddTodoClick}
        >Add Todo</Button>
        <Grid item xs={12}>
            Current input text: {todoText}
        </Grid>
    </>
}

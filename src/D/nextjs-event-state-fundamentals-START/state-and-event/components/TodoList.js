// ~/components/TodoList.js
import {Box, Button, Grid, TextField, List, ListItem, ListItemText, Typography} from '@mui/material';
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
    const [allTodos, setAllTodos] = useState([]);

    const onTodoTextChange = (event) => {
        console.log(event.target.value);
        setTodoText(event.target.value);
    }
    const onAddTodoClick = () => {
        console.log('Clicked the button');
        // create a new array with all the todos and the new todo item
        const updatedTodoList = [...allTodos, todoText];
        //  to prepend the data [todoText, ...allTodos]
        setAllTodos(updatedTodoList); // replaces the old array of data
        setTodoText(''); // reset the <TextField>
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
            <List sx={{width: '100%'}}>
                {
                    allTodos.map((eachItem, index) =>
                        <ListItem key={index}>
                            <ListItemText>
                                <Typography variant="p" component="div">
                                    {eachItem}
                                </Typography>
                            </ListItemText> 
                        </ListItem>
                    )
                }
            </List>
        </Grid>
    </>
}

// ~/components/TodoList.js
import {Box, Button, Grid, TextField} from '@mui/material';

// React components are designed to have a
// single parameter, commonly called "props".
// It's an object that will hold the info
// sent into the component.
// You can choose either to just call it props
// or you can provide a destructured object
// if you want to identify specific property
// names for the props.
export default function TodoList(props) {
    const onTodoTextChange = (event) => {
        console.log(event.target.value);
    }

    return <>
        <TextField
            id="standard-basic"
            label="New Todo?"
            variant="standard"
            sx={ {width: '100%'} }
            onChange={onTodoTextChange}
        />
    </>
}

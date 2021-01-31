import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Button } from '@material-ui/core';
import './Todo.css';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';


function Todo(props) {

    
    return (
        <List>
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Let's go this 🚀" />
            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete() }>
                <DeleteIcon/></Button>
            
        </List>
    )
}

export default Todo;

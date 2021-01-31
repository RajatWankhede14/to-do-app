import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import './Todo.css'

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.text} secondary="Let's go this 🚀" />
            </ListItem>
            
        </List>
    )
}

export default Todo;

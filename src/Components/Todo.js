import React from 'react';
import {Button, List,ListItem, ListItemAvatar,ListItemText } from '@material-ui/core'
import db from '../firebase';

function Todo(props) {

    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo} secondary="Deadline" />
            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE</Button>
        </List>
    )
}

export default Todo
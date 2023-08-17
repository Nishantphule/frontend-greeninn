import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function Chat() {

    const [menu, setMenu] = useState({ chat: [] });

    const fetchData = () => {
        axios.get(`${API}/chat`)
            .then((res) => setMenu({ chat: res.data.chat }))

    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h2>Chat</h2>
            <List sx={{ width: '100%' }}>
                {menu.chat.map(({ name, price }, i) => (
                    <ListItem
                        key={i}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {price}
                            </IconButton>
                        }
                    >
                        <ListItemText primary={name} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function SnacksPapad() {

    const [menu, setMenu] = useState({ snacks: [], papad: [] });

    const fetchData = () => {
        axios.get(`${API}/snacks&papad`)
            .then((res) => setMenu({ snacks: res.data.snacks, papad: res.data.papad }))

    }

    useEffect(() => fetchData(), []);


    return (
        <div className="menuContainer">
            <h2>Snacks</h2>
            <List sx={{ width: '100%' }}>
                {menu.snacks.map(({ name, price }, i) => (
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

            <h2>Papad</h2>
            <List sx={{ width: '100%' }}>
                {menu.papad.map(({ name, price }, i) => (
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

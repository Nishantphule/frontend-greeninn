import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function Thalis() {
    const [menu, setMenu] = useState({ pizzaPasta: [] });

    const fetchData = () => {
        axios.get(`${API}/chaat`)
            .then((res) => setMenu({ pizzaPasta: res.data.pizzaPasta, sandwiches: res.data.sandwiches }))

    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h2>Thalis (11 am to 3pm)</h2>
            <List sx={{ width: '100%' }}>
                {menu.sandwiches.map(({ name, price, extras }, i) => (
                    <ListItem
                        key={i}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {price}
                            </IconButton>
                        }
                    >
                        <ListItemText primary={name} secondary={extras} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

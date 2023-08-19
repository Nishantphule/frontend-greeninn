import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function PizzaPastaSandwiches() {

    const [menu, setMenu] = useState({ pizzaPasta: [], sandwiches: [] });

    const fetchData = () => {
        axios.get(`${API}/pizza&pasta&sandwiches`)
            .then((res) => setMenu({ pizzaPasta: res.data.pizzaPasta, sandwiches: res.data.sandwiches }))

    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h2>Pizza & Pasta</h2>
            <List sx={{ width: '100%' }}>
                {menu.pizzaPasta.map(({ name, price }, i) => (
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

            <h2>Sandwiches</h2>
            <List sx={{ width: '100%' }}>
                {menu.sandwiches.map(({ name, price }, i) => (
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

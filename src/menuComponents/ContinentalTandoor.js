import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function ContinentalTandoor() {

    const [menu, setMenu] = useState({ continental: [], tandoor: [] });

    const fetchData = () => {
        axios.get(`${API}/continental&tandoor`)
            .then((res) => setMenu({ continental: res.data.continental, tandoor: res.data.tandoor }))

    }


    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h2>Continental</h2>
            <List sx={{ width: '100%' }}>
                {menu.continental.map(({ name, price }, i) => (
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

            <h2>Tandoor</h2>
            <List sx={{ width: '100%' }}>
                {menu.tandoor.map(({ name, price }, i) => (
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

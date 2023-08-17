import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function BreakfastMisal() {

    const [menu, setMenu] = useState({ breakfast: [], misal: [] });

    const fetchData = () => {
        axios.get(`${API}/breakfast`)
            .then((res) => setMenu({ breakfast: res.data.breakfast, misal: res.data.misal }))

    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h2>Breakfast</h2>
            <List sx={{ width: '100%' }}>
                {menu.breakfast.map(({ name, price }, i) => (
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
            <h2>Misal</h2>
            <List sx={{ width: '100%' }}>
                {menu.misal.map(({ name, price, extras }, i) => (
                    <ListItem
                        key={i}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {price}
                            </IconButton>
                        }
                    >
                        <ListItemText primary={name} secondary={extras ? `(${extras[0]}+${extras[1]}+${extras[2]})` : ""} />
                    </ListItem>
                ))}
            </List></div>
    )
}

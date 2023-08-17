import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

export default function SouthIndian() {
    const [menu, setMenu] = useState({ simplySouth: [], specialDosa: [], uttapam: [] });

    const fetchData = () => {
        axios.get(`${API}/southIndian`)
            .then((res) => setMenu({ simplySouth: res.data.simplySouth, specialDosa: res.data.specialDosa, uttapam: res.data.uttapam }))

    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h2>Simply South</h2>
            <List sx={{ width: '100%' }}>
                {menu.simplySouth.map(({ name, price }, i) => (
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

            <h2>Special Dosa</h2>
            <List sx={{ width: '100%' }}>
                {menu.specialDosa.map(({ name, price }, i) => (
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

            <h2>Uttapam</h2>
            <List sx={{ width: '100%' }}>
                {menu.uttapam.map(({ name, price }, i) => (
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

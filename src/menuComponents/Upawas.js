import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function Upawas() {

    const [menu, setMenu] = useState({ upawas: [] });

    const fetchData = () => {
        axios.get(`${API}/upawas`)
            .then((res) => setMenu({ upawas: res.data.upawas }))

    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h2>Upawas</h2>
            <List sx={{ width: '100%' }}>
                {menu.upawas.map(({ name, price }, i) => (
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
            </List></div>
    )
}

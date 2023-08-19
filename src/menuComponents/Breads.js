import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function Breads() {

    const [menu, setMenu] = useState({ indianBread: [] });

    const fetchData = () => {
        axios.get(`${API}/mainCourse`)
            .then((res) => setMenu({ indianBread: res.data.indianBread }))

    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h2>Indian Bread</h2>
            <List sx={{ width: '100%' }}>
                {menu.indianBread.map(({ name, price }, i) => (
                    <ListItem
                        key={i}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {price.plain ? `${price.plain} / ${price.butter}` : price}
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

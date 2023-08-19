import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';


export default function RicaDal() {

    const [menu, setMenu] = useState({ basmatiKhajana: [], dal: [] });

    const fetchData = () => {
        axios.get(`${API}/mainCourse`)
            .then((res) => setMenu({ basmatiKhajana: res.data.basmatiKhajana, dal: res.data.dal }))

    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h2>Basmati Khajana</h2>
            <List sx={{ width: '100%' }}>
                {menu.basmatiKhajana.map(({ name, price }, i) => (
                    <ListItem
                        key={i}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {price.half ? `${price.half} / ${price.full}` : price.plain ? `${price.plain} / ${price.butter}` : price}
                            </IconButton>
                        }
                    >
                        <ListItemText primary={name} />
                    </ListItem>
                ))}
            </List>

            <h2>Dal</h2>
            <List sx={{ width: '100%' }}>
                {menu.dal.map(({ name, price }, i) => (
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

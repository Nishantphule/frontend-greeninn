import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function PavBhajiCholePulao() {

    const [menu, setMenu] = useState({ pavBhaji: [], pulao: [], chole: [] });

    const fetchData = () => {
        axios.get(`${API}/pavBhaji&chole&pulao`)
            .then((res) => setMenu({ pavBhaji: res.data.pavBhaji, pulao: res.data.pulao, chole: res.data.chole }))

    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h2>Pav Bhaji</h2>
            <List sx={{ width: '100%' }}>
                {menu.pavBhaji.map(({ name, price }, i) => (
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

            <h2>Pulao</h2>
            <List sx={{ width: '100%' }}>
                {menu.pulao.map(({ name, price }, i) => (
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

            <h2>Chole</h2>
            <List sx={{ width: '100%' }}>
                {menu.chole.map(({ name, price }, i) => (
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

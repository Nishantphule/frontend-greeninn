import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function Chinese() {

    const [menu, setMenu] = useState({ chineseSoup: [], chineseStarter: [], chineseRice: [], chineseNoodles: [] });

    const fetchData = () => {
        axios.get(`${API}/chinese`)
            .then((res) => setMenu({ chineseSoup: res.data.chineseSoup, chineseStarter: res.data.chineseStarter, chineseRice: res.data.chineseRice, chineseNoodles: res.data.chineseNoodles }))

    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h1>Chinese</h1>
            <h2>Soup</h2>
            <List sx={{ width: '100%' }}>
                {menu.chineseSoup.map(({ name, price }, i) => (
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

            <h2>Starter</h2>
            <List sx={{ width: '100%' }}>
                {menu.chineseStarter.map(({ name, price }, i) => (
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

            <h2>Rice</h2>
            <List sx={{ width: '100%' }}>
                {menu.chineseRice.map(({ name, price }, i) => (
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

            <h2>Noodles</h2>
            <List sx={{ width: '100%' }}>
                {menu.chineseNoodles.map(({ name, price }, i) => (
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

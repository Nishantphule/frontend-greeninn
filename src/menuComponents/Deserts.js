import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function Deserts() {

    const [menu, setMenu] = useState({ iceCream: [], kulfi: [] });

    const fetchData = () => {
        axios.get(`${API}/deserts`)
            .then((res) => setMenu({ iceCream: res.data.deserts[0].options, kulfi: res.data.deserts[1].options }))

    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h2>Single Scoop Ice Cream</h2>
            <List sx={{ width: '100%' }}>
                {menu.iceCream.map(({ flavor, price }, i) => (
                    <ListItem
                        key={i}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {price}
                            </IconButton>
                        }
                    >
                        <ListItemText primary={flavor} />
                    </ListItem>
                ))}
            </List>

            <h2>Kulfi</h2>
            <List sx={{ width: '100%' }}>
                {menu.kulfi.map(({ flavor, price }, i) => (
                    <ListItem
                        key={i}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {price}
                            </IconButton>
                        }
                    >
                        <ListItemText primary={flavor} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

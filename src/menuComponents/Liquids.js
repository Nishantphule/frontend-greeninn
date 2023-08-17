import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

export default function Liquids() {
    const [liquids, setLiquids] = useState({ beverages: [], juices: [], milkShakes: [], lassi: [] });
    const fetchData = () => {
        fetch(`${API}/liquids`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setLiquids({ beverages: res.beverages, juices: res.juices, milkShakes: res.milkShakes, lassi: res.lassi }))

    }

    useEffect(() => fetchData(), []);

    return (
        <div className='menuContainer'>
            <h2>Beverages</h2>
            <List sx={{ width: '100%' }}>
                {liquids.beverages.map(({ name, price }, i) => (
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
            <h2>Juices</h2>
            <List sx={{ width: '100%' }}>
                {liquids.juices.map(({ name, price, options }, i) => (
                    <ListItem
                        key={i}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {price}
                            </IconButton>
                        }
                    >
                        <ListItemText primary={name} secondary={options ? `${options[0]}/${options[1]}/${options[2]}` : ""} />
                    </ListItem>
                ))}
            </List>
            <h2>Milk Shakes</h2>
            <List sx={{ width: '100%' }}>
                {liquids.milkShakes.map(({ name, price }, i) => (
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
            <h2>Lassi</h2>
            <List sx={{ width: '100%' }}>
                {liquids.lassi.map(({ name, price }, i) => (
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

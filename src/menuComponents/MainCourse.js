import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function MainCourse() {

    const [menu, setMenu] = useState({ maharashtrian: [], punjabi: [], paneerSpecial: [], greenInnSpecial: [] });

    const fetchData = () => {
        axios.get(`${API}/mainCourse`)
            .then((res) => setMenu({ maharashtrian: res.data.maharashtrian, punjabi: res.data.punjabi, paneerSpecial: res.data.paneerSpecial, greenInnSpecial: res.data.greenInnSpecial }))

    }


    useEffect(() => fetchData(), []);

    return (
        <div className="menuContainer">
            <h2>Maharashtrian Main Course</h2>
            <List sx={{ width: '100%' }}>
                {menu.maharashtrian.map(({ dish, price }, i) => (
                    <ListItem
                        key={i}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {price}
                            </IconButton>
                        }
                    >
                        <ListItemText primary={dish} />
                    </ListItem>
                ))}
            </List>

            <h2>Punjabi Main Course</h2>
            <List sx={{ width: '100%' }}>
                {menu.punjabi.map(({ dish, price }, i) => (
                    <ListItem
                        key={i}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {price}
                            </IconButton>
                        }
                    >
                        <ListItemText primary={dish} />
                    </ListItem>
                ))}
            </List>

            <h2>Paneer Special</h2>
            <List sx={{ width: '100%' }}>
                {menu.paneerSpecial.map(({ name, price }, i) => (
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

            <h2>Green Inn Special</h2>
            <List sx={{ width: '100%' }}>
                {menu.greenInnSpecial.map(({ name, price }, i) => (
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

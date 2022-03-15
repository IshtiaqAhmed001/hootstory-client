import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import Story from '../Story/Story';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import BookIcon from '@mui/icons-material/Book';
import Button from '@mui/material/Button';
import './Stories.css';


const Stories = () => {

    const [allStories, setAllStories] = useState([]);
    const [toggleInput, setToggleInput] = useState({ longToggle: false, shortToggle: false });

    useEffect(() => {
        fetch('http://localhost:5000/stories')
            .then(res => res.json())
            .then(data => setAllStories(data));
    }, []);

    const longStories = allStories.filter(story => story.type === "long");
    const shortStories = allStories.filter(story => story.type === "short");

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.checked;
        const newToggleInput = { ...toggleInput }
        newToggleInput[field] = value;
        setToggleInput(newToggleInput);
    };

    const handleDeleteAll = () => {
        window.confirm('Are you sure you want to delete ?');
    }

    return (
        <div className='landing-page'>
            <Grid sx={{ marginTop: 10, backgroundColor: '#242527', width: '80%', mx: 'auto', p: 2 }} container spacing={0}>
                <Grid item xs={12} sm={8} md={8} lg={8}>
                    <Button sx={{ fontWeight: 'bold' }} variant="inherit">
                        <BookIcon sx={{ borderRadius: '50%', backgroundColor: '#3A3B3D', mr: 1, padding: '5px' }} />
                        Blog</Button>

                    <Button onClick={handleDeleteAll} sx={{ color: '#bf483b' }} variant="inherit">Delete All</Button>

                    <div style={{ display: 'inline-block', margin: '0 10px' }}>
                        <FormControlLabel control={<Switch
                            checked={toggleInput?.longToggle}
                            name="longToggle"
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />} label="Long Stories" />
                        <h4 style={{ display: 'inline', borderRadius: '50%', backgroundColor: '#18191B', padding: '5px 10px' }}>{longStories.length}</h4>
                    </div>
                    <div style={{ display: 'inline-block', margin: '0 10px' }}>
                        <FormControlLabel control={<Switch
                            checked={toggleInput?.shortToggle}
                            name="shortToggle"
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />} label="Short Stories" />
                        <h4 style={{ display: 'inline', borderRadius: '50%', backgroundColor: '#18191B', padding: '5px 10px' }}>{shortStories.length}</h4>
                    </div>
                </Grid>

            </Grid>
            {/* <Box sx={{ width: '75%', mx: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', my: 4, backgroundColor: '#242527', px: 5 }} >

                <Button sx={{ mt: 0.5, fontWeight: 'bold' }} variant="inherit">
                    <BookIcon sx={{ borderRadius: '50%', backgroundColor: '#3A3B3D', mr: 1, padding: '5px' }} />
                    Blog</Button>

                <Button onClick={handleDeleteAll} sx={{ mt: 0.5, mr: 1, color: '#bf483b' }} variant="inherit">Delete All</Button>
                <FormControlLabel control={<Switch
                    checked={toggleInput?.longToggle}
                    name="longToggle"
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />} label="Long Stories" />
                <h4 style={{ borderRadius: '50%', backgroundColor: '#18191B', padding: '5px 10px' }}>{longStories.length}</h4>
                <FormControlLabel sx={{ ml: 4 }} control={<Switch
                    checked={toggleInput?.shortToggle}
                    name="shortToggle"
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />} label="Short Stories" />
                <h4 style={{ borderRadius: '50%', backgroundColor: '#18191B', padding: '5px 10px' }}>{shortStories.length}</h4>
            </Box> */}

            {/* blogs grid  */}
            <Grid sx={{ width: '80%', mx: 'auto', py: 4 }} container spacing={2}>
                {
                    (toggleInput.longToggle && toggleInput.shortToggle) && allStories.map(story => <Story
                        key={story.id}
                        story={story}>
                    </Story>)
                }
                {
                    (!toggleInput.longToggle && toggleInput.shortToggle) && shortStories.map(story => <Story
                        key={story.id}
                        story={story}>
                    </Story>)
                }
                {
                    (toggleInput.longToggle && !toggleInput.shortToggle) && longStories.map(story => <Story
                        key={story.id}
                        story={story}>
                    </Story>)
                }
            </Grid>
        </div >
    );
};

export default Stories;
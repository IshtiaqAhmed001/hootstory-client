import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import Story from '../Story/Story';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
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
        console.log(newToggleInput);
    };

    return (
        <div className='landing-page'>

            <Box sx={{ width: '76%', mx: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', my: 4, backgroundColor: '#242527', px: 4 }} >
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
            </Box>

            {/* blogs grid  */}
            <Grid sx={{ width: '80%', mx: 'auto', py: 4 }} container rowSpacing={4} columnSpacing={4}>
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
        </div>
    );
};

export default Stories;
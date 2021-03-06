import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import Story from '../Story/Story';
import BookIcon from '@mui/icons-material/Book';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddNewBlog from '../AddNewBlog/AddNewBlog';
import './Stories.css';


const Stories = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    const [allStories, setAllStories] = useState([]);
    const [toggleInput, setToggleInput] = useState({ longToggle: true, shortToggle: true });

    useEffect(() => {
        fetch('https://frozen-river-03960.herokuapp.com/stories')
            .then(res => res.json())
            .then(data => setAllStories(data));
    }, []);

    const longStories = allStories.filter(story => story.type !== "short");
    const shortStories = allStories.filter(story => story.type === "short");

    // sorting long stories by date and storing in new array 
    const sortedAllStories = allStories.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    const sortedLongStories = longStories.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    const sortedShortStories = shortStories.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.checked;
        const newToggleInput = { ...toggleInput }
        newToggleInput[field] = value;
        setToggleInput(newToggleInput);
    };

    const handleDeleteAll = () => {
        if (window.confirm('Are you sure you want to delete ? This action can not be undone!')) {
            fetch('https://frozen-river-03960.herokuapp.com/stories', {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('All stories deleted successfully! Please Reload the page');
                    }
                })
        }
    }

    return (
        <>
            <div className='landing-page'>
                <Grid sx={{ marginTop: 10, backgroundColor: '#242527', width: '80%', mx: 'auto', p: 2 }} container >
                    <Grid item xs={12} sm={10} md={10} lg={10}>
                        <Button sx={{ fontWeight: 'bold' }} variant="inherit">
                            <BookIcon sx={{ borderRadius: '50%', backgroundColor: '#3A3B3D', mr: 1, padding: '5px' }} />
                            Blog</Button>

                        <Button onClick={handleDeleteAll} sx={{ color: '#bf483b' }} variant="inherit">Delete All</Button>

                        <Button onClick={handleModalOpen} sx={{ color: '#4391F1' }} variant="inherit">Add New Story</Button>

                        <div style={{ display: 'inline-block', margin: '0 10px' }}>
                            <h5 style={{ display: 'inline', borderRadius: '50%', backgroundColor: '#3A3B3D', padding: '5px 10px', marginRight: '10px' }}>{longStories.length}</h5>
                            <h4 style={{ display: 'inline' }}>Long Stories</h4>
                            <Switch
                                checked={toggleInput?.longToggle}
                                name="longToggle"
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                        <div style={{ display: 'inline-block', margin: '0 10px' }}>
                            <h5 style={{ display: 'inline', borderRadius: '50%', backgroundColor: '#3A3B3D', padding: '5px 10px', marginRight: '10px' }}>{shortStories.length}</h5>
                            <h4 style={{ display: 'inline' }}>Short Stories</h4>
                            <Switch
                                checked={toggleInput?.shortToggle}
                                name="shortToggle"
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                    </Grid>
                </Grid>

                {/* Recent Blogs Container  */}
                <Box sx={{ width: '80%', mx: 'auto', py: 4 }}>
                    <Typography sx={{ textAlign: 'left', fontWeight: 'bold', my: 2 }} variant="body1">Recent</Typography>
                    <Grid container spacing={2}>
                        {
                            (toggleInput.longToggle && toggleInput.shortToggle) && allStories.map(story => {
                                if (new Date(story.datetime) > new Date('2021-12-31')) {
                                    return <Story
                                        key={story._id}
                                        story={story}>
                                    </Story>
                                }
                                else {
                                    return ''
                                }
                            })
                        }
                        {
                            (!toggleInput.longToggle && !toggleInput.shortToggle) && <Typography sx={{ textAlign: 'left', fontWeight: 'bold', color: '#bf483b', letterSpacing: 2, ml: 2, my: 2 }} variant="caption">No blogs to show, Please select an option!</Typography>
                        }
                        {
                            (!toggleInput.longToggle && toggleInput.shortToggle) && shortStories.map(story => {
                                if (new Date(story.datetime) > new Date('2021-12-31')) {
                                    return <Story
                                        key={story._id}
                                        story={story}>
                                    </Story>
                                }
                                else {
                                    return ''
                                }
                            })
                        }
                        {
                            (toggleInput.longToggle && !toggleInput.shortToggle) && longStories.map(story => {
                                if (new Date(story.datetime) > new Date('2021-12-31')) {
                                    return <Story
                                        key={story._id}
                                        story={story}>
                                    </Story>
                                }
                                else {
                                    return ''
                                }
                            })
                        }
                    </Grid>
                </Box>



                {/* Old Blogs Container  */}
                <Box sx={{ width: '80%', mx: 'auto', py: 4 }}>
                    <Typography sx={{ textAlign: 'left', fontWeight: 'bold', my: 2 }} variant="body1">Old</Typography>
                    <Grid container spacing={2}>
                        {
                            (toggleInput.longToggle && toggleInput.shortToggle) && allStories.map(story => {
                                if (new Date(story.datetime) <= new Date('2021-12-31')) {
                                    return <Story
                                        key={story._id}
                                        story={story}>
                                    </Story>
                                }
                                else return ''
                            })
                        }

                        {
                            (!toggleInput.longToggle && !toggleInput.shortToggle) && <Typography sx={{ textAlign: 'left', fontWeight: 'bold', color: '#bf483b', letterSpacing: 2, ml: 2, my: 2 }} variant="caption">No blogs to show, Please select an option!</Typography>
                        }

                        {
                            (!toggleInput.longToggle && toggleInput.shortToggle) && shortStories.map(story => {
                                if (new Date(story.datetime) < new Date('2021-12-31')) {
                                    return <Story
                                        key={story._id}
                                        story={story}>
                                    </Story>
                                }
                                else return ''
                            })
                        }
                        {
                            (toggleInput.longToggle && !toggleInput.shortToggle) && longStories.map(story => {
                                if (new Date(story.datetime) < new Date('2021-12-31')) {
                                    return <Story
                                        key={story._id}
                                        story={story}>
                                    </Story>
                                }
                                else return ''
                            })
                        }
                    </Grid>
                </Box>
            </div >
            <AddNewBlog
                stories={allStories}
                openModal={openModal}
                handleModalClose={handleModalClose}
            ></AddNewBlog>
        </>
    );
};

export default Stories;
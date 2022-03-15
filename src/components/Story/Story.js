import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Story = ({ story }) => {
    const { id, title, image, body, datetime } = story;
    return (
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'between', p: 2, backgroundColor: '#242527', border: 5, borderColor: '#18191B', borderRadius: 2 }} >
            <div style={{ textAlign: 'left' }}>
                {
                    title !== "NULL" && <Typography variant="h6"> {title} </Typography>
                }
                <Typography variant="body2"> {body} </Typography>
                <Typography variant="caption"> {datetime} </Typography>
            </div>
            <div>
                {
                    image !== "NULL" && <img style={{ width: '200px' }} src={image} alt="" />
                }
            </div>
        </Grid>
    );
};

export default Story;
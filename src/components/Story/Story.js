import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './Story.css';

const Story = ({ story }) => {
    const { title, image, type, body, datetime } = story;
    const convertedDate = new Date(datetime)
    // const mydate = new Date("2021-12-31");
    // console.log('storydate: ', convertedDate, 'today: ', mydate);


    return (
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'between', p: 1, backgroundColor: '#242527', border: 5, borderColor: '#18191B', borderRadius: 2 }} >
            <div style={{ textAlign: 'left' }}>
                {
                    title !== "NULL" && type === "long" && <h3 style={{ margin: '0 0 4px 0', color: '#1976D2' }}>{title}</h3>
                }
                <Typography className='blog-body' variant="body2" > {body} </Typography>

                <Typography variant="caption" sx={{ color: '#8D8C89' }}> {convertedDate.toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })} | {convertedDate.toLocaleTimeString()}</Typography>
            </div>
            <div>
                {
                    image !== "NULL" && type === "long" && <img style={{ width: '97px', height: '99px', borderRadius: '4px' }} src={image} alt="" />
                }
            </div>

        </Grid>
    );
};

export default Story;
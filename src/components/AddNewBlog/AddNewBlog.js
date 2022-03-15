import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddNewBlog = ({ openModal, handleModalClose, stories }) => {
    const blogDate = new Date();
    const initialBlogInfo = {
        id: (stories.length + 1).toString(), title: "New Blog", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus quia nisi magni fuga nobis.", type: "long", image: 'NULL', datetime: blogDate
    }
    const [blogInfo, setBlogInfo] = useState(initialBlogInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBlogInfo = { ...initialBlogInfo }
        newBlogInfo[field] = value;
        setBlogInfo(newBlogInfo);
    }


    const handleSubmit = e => {

        // console.log(blogInfo);

        fetch('https://frozen-river-03960.herokuapp.com/stories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Blog added successfully. Please reload!')
                }
            })


        handleModalClose();
        e.preventDefault();
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Add New Blog
                        </Typography>
                        <form onSubmit={handleSubmit} >

                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                name="title"
                                onBlur={handleOnBlur}
                                defaultValue="Blog Title"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                name="type"
                                onBlur={handleOnBlur}
                                defaultValue="Blog Type"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                name="body"
                                onBlur={handleOnBlur}
                                defaultValue="Blog Paragraph"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                name="image"
                                onBlur={handleOnBlur}
                                defaultValue="Image Link"
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                defaultValue={blogDate.toLocaleDateString()}
                                size="small"
                            />

                            <Button type='submit' variant="inherit">Submit</Button>

                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default AddNewBlog;
import React, { useEffect, useState } from 'react';

const Stories = () => {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/stories')
            .then(res => res.json())
            .then(data => setStories(data))
    }, []);

    const shortStories = stories.filter(story => story.type === "short");
    const longStories = stories.filter(story => story.type !== "short");
    return (
        <div>
            <h1>Total stories: {stories.length}</h1>
            <h2>Short Stories: {shortStories.length}</h2>
            <h2>Long Stories: {longStories.length}</h2>
        </div>
    );
};

export default Stories;
import React, { useEffect, useState } from 'react';

const loadStoriesData = () => {

    const [stories, setStories] = useState([])

    useEffect(() => {
        fetch('/story.json')
        .then(res => res.json())
        .then(data => setStories(data))
    }, [])
    return stories
};

export default loadStoriesData;
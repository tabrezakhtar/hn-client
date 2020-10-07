import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
const STORY = 'https://hn.algolia.com/api/v1/items/';

function Comments() {
  const {storyId} = useParams();
  
  const [story, setStory] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(STORY + storyId);
        const {title, url, author, children} = await result.json();
        setStory({title, url, author, children});
        setLoading(false)
      } catch(error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [storyId]);

  if(error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  if (!storyId) {
    return <div>Missing storyId param.</div>;
  }

  return <div>
    Title: {story.title} <br />
    Url: {story.url} <br />
    Author: {story.author}
  </div>;
}

export default Comments;
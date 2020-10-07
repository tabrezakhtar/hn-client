import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import moment from 'moment';
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

  const formattedDate = moment(story.created_at).fromNow();

  return <div class="card horizontal">
    <div class="card-stacked">
      <div class="card-content">
        <a className="story__link" href={story.url}>{story.title}</a>
        <span className="story__time chip orange lighten-4">{formattedDate}</span>
        <span className="comments__number right chip grey lighten-5">{story.children.length} comments</span>
      </div>
      <div class="card-action">
        
      </div>
    </div>
  </div>
}

export default Comments;
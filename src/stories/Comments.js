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

  const commentsList = story.children.map(comment => <div key={comment.id} className="collection-item">
    <p className="grey lighten-4" dangerouslySetInnerHTML={{__html: comment.text}} />
    <span className="story__time chip orange lighten-4">{moment(comment.created_at).fromNow()}</span>
    <span className="comments__number chip grey lighten-5">{story.author}</span>
  </div>);

  return <div className="card horizontal">
    <div className="card-stacked">
      <div className="card-content">
        <a className="story__link" href={story.url}>{story.title}</a>
        <span className="story__time chip orange lighten-4">{formattedDate}</span>
        <span className="comments__number right chip grey lighten-5">{story.children.length} comments</span>
      </div>
      <div className="card-action">
        {commentsList}
      </div>
    </div>
  </div>
}

export default Comments;
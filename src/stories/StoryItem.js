import React from 'react';
import moment from 'moment';

function StoryItem({story, index}) {
  const formattedDate = moment(story.created_at).fromNow();

  return <li className="collection-item">
    <span className="story__number left chip red lighten-4">{index+1}</span>
    
    <a className="story__link" href={'/comments/' + story.objectID}>{story.title}</a>
    <span className="story__time chip orange lighten-4">{formattedDate}</span>
    
    <span className="comments__number right chip grey lighten-5">{story.num_comments} comments</span>
  </li>;
}

export default StoryItem;
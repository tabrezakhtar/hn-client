import React from 'react';
import moment from 'moment';

function Story({story, index}) {
  const formattedDate = moment(story.created_at).fromNow();
  
  return <li className="collection-item">
    <span className="story__number">{index+1}</span>
    <a className="story__link" href={'/comments/' + story.objectID}>{story.title}</a>
    <span className="comments__number">{story.num_comments} comments</span>
    <span className="story__time">{formattedDate}</span>
  </li>;
}

export default Story;
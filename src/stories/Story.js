import React from 'react';

function Story({story, index}) {
  return <li className="collection-item">
    <span className="story__number">{index+1}</span>
    <a className="story__link" href={'/comments/' + story.objectID}>{story.title}</a>
    <span className="comments__number">15 comments</span>
    <span className="story__time">10 minutes ago</span>
  </li>;
}

export default Story;
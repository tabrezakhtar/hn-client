import React from 'react';

function StoriesList({stories}) {
  return stories.length ? stories.map(story => 
    <li key={story.objectID}><a href={story.url}>{story.title}</a></li>
  ) : null;
}

export default StoriesList;
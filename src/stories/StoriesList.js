import React from 'react';

function StoriesList({stories, error}) {

  if(error) {
    return <li>{error}</li>
  }

  return stories.length ? stories.map(story => 
    <li key={story.objectID}>{story.title}</li>
  ) : null;
}

export default StoriesList;